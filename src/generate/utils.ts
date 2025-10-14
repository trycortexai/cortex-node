import openapiTS, {
	astToString,
	type OpenAPI3,
	type OperationObject,
	type ParameterObject,
	type ReferenceObject,
	type RequestBodyObject,
	type ResponsesObject,
	type SchemaObject,
} from "openapi-typescript";
import ts from "typescript";

import { setObjectProperty } from "../utils";

export const generateTypes = async (schema: string) => {
	const STRING = ts.factory.createTypeReferenceNode(
		ts.factory.createIdentifier("string"),
	);
	const FILE = ts.factory.createTypeReferenceNode(
		ts.factory.createIdentifier("File"),
	);
	const BLOB = ts.factory.createTypeReferenceNode(
		ts.factory.createIdentifier("Blob"),
	);
	const NULL = ts.factory.createTypeReferenceNode(
		ts.factory.createIdentifier("null"),
	);

	const ast = await openapiTS(schema, {
		exportType: true,
		arrayLength: true,
		rootTypes: true,
		emptyObjectsUnknown: true,
		transform: (schemaObject) => {
			if (schemaObject.format === "binary") {
				return ts.factory.createUnionTypeNode([
					FILE,
					BLOB,
					STRING,
					...(schemaObject.nullable ? [NULL] : []),
				]);
			}
		},
	});

	let template = astToString(ast);

	template = convertPathsAndComponentsToPascalCase(
		template.replaceAll("export type Schema", "export type "),
	);

	return template;
};

type MethodOptions = {
	name: string;
	method: string;
	endpoint: string;
	stream: boolean;
	parameters: Record<string, string>;
	body?: string;
	query?: string;
	returns: string;
	finalReturns?: string;
	description?: string;
};

const METHOD_TO_NAME = {
	get: "retrieve",
	post: "create",
	patch: "update",
	put: "put",
	delete: "delete",
} as const;

/**
 * Checks if a string is a whole number
 *
 * Example: cleanPathUrl('/apps/{app_id}/files/{file_id}') => 'apps.files'
 */
const cleanPathUrl = (path: string) => {
	return path
		.split("/")
		.filter((segment) => segment && !segment.includes("{"))
		.map((e) => convertToCamelCase(e))
		.join(".");
};

export const generateAPIMethods = (schema: OpenAPI3): string => {
	const allMethods: Map<string, MethodOptions> = new Map();

	const allPaths = new Map(Object.entries(schema.paths ?? {}));

	allPaths.forEach((methods, endpoint) => {
		Object.entries(methods).forEach(([method, details]) => {
			const apiMethod = buildAPIMethodObject(schema, endpoint, method, details);

			const methodsToPush = [apiMethod];

			if (apiMethod.stream) {
				apiMethod.stream = false;

				if (apiMethod.body) {
					apiMethod.body = `Omit<${apiMethod.body}, 'stream'>`;
				}

				methodsToPush.push({
					...apiMethod,
					name: "stream",
					stream: true,
				});

				methodsToPush.push({
					...apiMethod,
					name: "streamResponse",
					finalReturns: "Response",
					stream: true,
				});
			}

			methodsToPush.forEach((apiMethod) => {
				const matchingPaths = [...allPaths.keys()].filter(
					(path) => path !== endpoint && path.startsWith(endpoint),
				);

				if (methodsToPush.length === 1 && !matchingPaths.length) {
					const fullPath = `${cleanPathUrl(endpoint)}`;
					allMethods.set(fullPath, apiMethod);
					return;
				}

				const fullPath = `${cleanPathUrl(endpoint)}.${apiMethod.name}`;
				allMethods.set(fullPath, apiMethod);
			});
		});
	});

	return methodsToString(allMethods);
};

const buildAPIMethodObject = (
	schema: OpenAPI3,
	endpoint: string,
	method: string,
	operation: OperationObject,
): MethodOptions => {
	const { parameters, requestBody, responses } = operation;

	if (parameters && "$ref" in parameters) {
		throw new Error("Parameters reference not supported");
	}

	const isPaginationSupported = (parameters as ParameterObject[])?.some(
		(e) => e.name === "page" && e.in === "query",
	);

	const methodName = isPaginationSupported
		? "list"
		: (METHOD_TO_NAME[method as keyof typeof METHOD_TO_NAME] ?? method);

	const methodParameters = (parameters as ParameterObject[])
		?.filter((e) => e.in === "path")
		.filter((e) => e.name !== "app_id")
		.map((e) => [e.name, "string"]);

	const hasAnyQueryParameters = (parameters as ParameterObject[]).some(
		(e) => e.in === "query",
	);

	const responseType = getResponseType(responses);

	const apiMethod: MethodOptions = {
		name: methodName,
		method,
		endpoint,
		stream: isStreamingSupported(schema, requestBody),
		body: requestBody ? getBodyType(requestBody) : undefined,
		query: hasAnyQueryParameters
			? `Paths['${endpoint}']['${method}']['parameters']['query']`
			: undefined,
		parameters: Object.fromEntries(methodParameters),
		returns: isPaginationSupported
			? `{
      data: ${responseType};
      pagination: {
        page: number;
        take: number;
        count: number;
      };
    }`
			: responseType,
	};

	return apiMethod;
};

const isStreamingSupported = (
	schema: OpenAPI3,
	requestBody: RequestBodyObject | ReferenceObject | undefined,
): boolean => {
	let schemaObject: SchemaObject | null = null;

	if (isReferenceObject(requestBody)) {
		schemaObject = getSchemaObjectFromRef(schema, requestBody.$ref);
		return false;
	}

	if (!schemaObject) {
		const response = requestBody?.content?.["application/json"];

		if (!response) {
			return false;
		}

		if (isReferenceObject(response)) {
			schemaObject = getSchemaObjectFromRef(schema, response.$ref);
		}

		if ("schema" in response && isReferenceObject(response.schema)) {
			schemaObject = getSchemaObjectFromRef(schema, response.schema.$ref);
		}
	}

	if (schemaObject?.type !== "object") {
		return false;
	}

	const isStreamingSupported = !!schemaObject?.properties?.stream;

	return isStreamingSupported;
};

const getSchemaObjectFromRef = (
	schema: OpenAPI3,
	ref: string,
): SchemaObject | null => {
	if (!schema.components?.schemas) {
		return null;
	}

	const schemaName = ref.split("/").pop();
	const schemaObject = schema.components.schemas[schemaName ?? ""];

	if (schemaObject.type === "object") {
		return schemaObject;
	}

	return null;
};

const getBodyType = (requestBody: RequestBodyObject | ReferenceObject) => {
	if (isReferenceObject(requestBody)) {
		return formatReference(requestBody.$ref);
	}

	const response = requestBody?.content?.["application/json"];

	if (!response) {
		return "unknown";
	}

	if (isReferenceObject(response)) {
		return formatReference(response.$ref);
	}

	if ("schema" in response && isReferenceObject(response.schema)) {
		return formatReference(response.schema.$ref);
	}

	if (
		"schema" in response &&
		response.schema &&
		"type" in response.schema &&
		response.schema.type === "array" &&
		isReferenceObject(response.schema.items)
	) {
		return `${formatReference(response.schema.items.$ref)}[]`;
	}

	throw new Error(`Unsupported body type: ${JSON.stringify(requestBody)}`);
};

const getResponseType = (responses: ResponsesObject | undefined) => {
	const okResponse = responses?.["200"];
	if (!okResponse || !("content" in okResponse)) {
		return `void`;
	}

	const content = okResponse.content?.["application/json"];

	if (!content || !("schema" in content) || !content.schema) {
		return `void`;
	}

	if (isReferenceObject(content.schema)) {
		return formatReference(content.schema.$ref);
	}

	if (
		"type" in content.schema &&
		content.schema.type === "array" &&
		isReferenceObject(content.schema.items)
	) {
		return `${formatReference(content.schema.items.$ref)}[]`;
	}

	if (
		"allOf" in content.schema &&
		isReferenceObject(content.schema.allOf?.[0])
	) {
		return formatReference(content.schema.allOf?.[0].$ref);
	}

	const isNullable =
		"nullable" in content.schema && Object.keys(content.schema).length === 1;

	if (isNullable) {
		return "void";
	}

	throw new Error(`Unknown response type: ${JSON.stringify(content)}`);
};

const isReferenceObject = (obj: unknown): obj is ReferenceObject => {
	return typeof obj === "object" && !!obj && "$ref" in obj;
};

const formatReference = (ref: string) => {
	return `${ref.split("/").pop()}`;
};

/**
 * Converts a string to camel case
 *
 * Example: convertToCamelCase('hello-world') => 'helloWorld'
 */
const convertToCamelCase = (str: string) => {
	return str.replace(/([-_][a-z])/gi, ($1) => {
		return $1.toUpperCase().replace("-", "").replace("_", "");
	});
};

const createMethod = ({
	name,
	method,
	endpoint,
	parameters,
	query,
	body,
	stream,
	returns,
	finalReturns,
}: MethodOptions) => {
	const params = Object.entries(parameters);

	const allParameters = [...params];

	const isBodyRequired =
		body && !body.includes("?:") && !body.startsWith("Omit<");

	if (body) {
		allParameters.push([isBodyRequired ? "body" : "body?", body]);
	}

	const options: [string, string][] = [];

	if (query) {
		options.push(["query?", query]);
	}

	if (stream) {
		options.push([
			"onStream?",
			`(partialResult: ${returns}, event: unknown, data: unknown) => void`,
		]);
	}

	allParameters.push([
		"options?",
		`RequestInit${options.length ? ` & {${options.map(([key, value]) => `${key}: ${value}`).join(",")}}` : ""}`,
	]);

	const paramsString = params.length
		? `params: {${params.map(([key]) => `${key}: ${convertToCamelCase(key)}`).join(",")}},\n`
		: "";

	const parsedMethod = `(${allParameters
		.map(([key, value]) => `${convertToCamelCase(key)}: ${value}`)
		.join(", ")}): Promise<${finalReturns ?? returns}> => {
      return callAPI(${encodeParam(name)}, {
        method: ${encodeParam(method)},
        endpoint: ${encodeParam(endpoint)},
        ${paramsString}${body ? `body,` : ""}options,
      }) as Promise<${finalReturns ?? returns}>;
    }`;

	return parsedMethod;
};

export const encodeParam = (param: unknown) => {
	return JSON.stringify(param);
};

export const methodsToString = (
	methods: Map<string, MethodOptions>,
): string => {
	const finalObject: Record<string, unknown> = {};

	methods.forEach((method, fullPath) => {
		setObjectProperty(
			finalObject,
			fullPath,
			`{{${fullPath}:${method.method}}}`,
		);
	});

	let template = JSON.stringify(finalObject, null, 2);

	methods.forEach((method, fullPath) => {
		template = template.replace(
			`"{{${fullPath}:${method.method}}}"`,
			createMethod(method),
		);
	});

	const finalTemplate = `export type APIMethodRequest = {
      method: string;
      endpoint: string;
      params?: Record<string, unknown>;
      body?: unknown;
      options?: RequestInit & {
        query?: Record<string, unknown>;
        onStream?: (partialResult: any, event: unknown, data: unknown) => void;
      }
    };
    export type APIMethods = ReturnType<typeof createAPI>;
    export const createAPI = (callAPI: (name: string, request: APIMethodRequest) => unknown) => (${template});`;

	return convertPathsAndComponentsToPascalCase(finalTemplate);
};

const convertPathsAndComponentsToPascalCase = (str: string) => {
	return str
		.replaceAll("paths", "Paths")
		.replaceAll("components", "Components");
};
