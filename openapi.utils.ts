import openapiTS, {
  astToString,
  OpenAPI3,
  OperationObject,
  ParameterObject,
  ReferenceObject,
  RequestBodyObject,
  ResponsesObject,
} from 'openapi-typescript';
import ts from 'typescript';

export const generateTypes = async (schema: string) => {
  const STRING = ts.factory.createTypeReferenceNode(
    ts.factory.createIdentifier('string'),
  );
  const FILE = ts.factory.createTypeReferenceNode(
    ts.factory.createIdentifier('File'),
  );
  const BLOB = ts.factory.createTypeReferenceNode(
    ts.factory.createIdentifier('Blob'),
  );
  const NULL = ts.factory.createTypeReferenceNode(
    ts.factory.createIdentifier('null'),
  );

  const ast = await openapiTS(schema, {
    exportType: true,
    arrayLength: true,
    rootTypes: true,
    emptyObjectsUnknown: true,
    transform: schemaObject => {
      if (schemaObject.format === 'binary') {
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

  template = template.replaceAll('export type Schema', 'export type ');

  return template;
};

const setObjectProperty = <T>(obj: T, path: string, value: unknown): T => {
  const parts = path.split('.');
  const len = parts.length;

  let lastValue = obj as Record<string, unknown>;

  for (let i = 0; i < len; i++) {
    const isLastPart = i === len - 1;
    const currentPart = parts[i];

    if (isLastPart) {
      lastValue[currentPart] = value;
    } else {
      if (!(currentPart in lastValue)) {
        lastValue[currentPart] = {};
      } else if (
        typeof lastValue[currentPart] !== 'object' ||
        lastValue[currentPart] === null
      ) {
        lastValue[currentPart] = {};
      }

      lastValue = lastValue[currentPart] as Record<string, unknown>;
    }
  }

  return obj as T;
};

type MethodOptions = {
  name: string;
  method: string;
  endpoint: string;
  parameters: Record<string, string>;
  body?: string;
  query?: string;
  returns: string;
  description?: string;
};

const METHOD_TO_NAME = {
  get: 'get',
  post: 'create',
  patch: 'update',
  put: 'put',
  delete: 'delete',
} as const;

/**
 * Checks if a string is a whole number
 *
 * Example: cleanPathUrl('/apps/{app_id}/files/{file_id}') => 'apps.files'
 */
const cleanPathUrl = (path: string) => {
  return path
    .split('/')
    .filter(segment => segment && !segment.includes('{'))
    .map(e => convertToCamelCase(e))
    .join('.');
};

/* 
/apps/{app_id}/files
/apps/{app_id}/files/{file_id}
/apps/{app_id}/files/{file_id}/cancel
*/
export const generateAPIMethods = (schema: OpenAPI3): string => {
  const allMethods: Map<string, MethodOptions> = new Map();

  Object.entries(schema.paths ?? {}).forEach(([endpoint, methods]) => {
    Object.entries(methods).forEach(([method, details]) => {
      const apiMethod = buildAPIMethodObject(endpoint, method, details);

      const matchingPaths = Object.keys(schema.paths ?? {}).filter(
        path => path !== endpoint && path.startsWith(endpoint),
      );

      if (!matchingPaths.length) {
        const fullPath = `${cleanPathUrl(endpoint)}`;
        allMethods.set(fullPath, apiMethod);
        return;
      }

      const fullPath = `${cleanPathUrl(endpoint)}.${apiMethod.name}`;
      allMethods.set(fullPath, apiMethod);
    });
  });

  return methodsToString(allMethods);
};

const buildAPIMethodObject = (
  endpoint: string,
  method: string,
  schema: OperationObject,
): MethodOptions => {
  const {parameters, requestBody, responses} = schema;

  if (parameters && '$ref' in parameters) {
    throw new Error('Parameters reference not supported');
  }

  const methodName = isResponseArray(responses)
    ? 'list'
    : (METHOD_TO_NAME[method] ?? method);

  const methodParameters = (parameters as ParameterObject[])
    .filter(e => e.in === 'path')
    .filter(e => e.name !== 'app_id')
    .map(e => [e.name, 'string']);

  const hasAnyQueryParameters = (parameters as ParameterObject[]).some(
    e => e.in === 'query',
  );

  const apiMethod: MethodOptions = {
    name: methodName,
    method,
    endpoint,
    body: requestBody ? getBodyType(requestBody) : undefined,
    query: hasAnyQueryParameters
      ? `paths['${endpoint}']['${method}']['parameters']['query']`
      : undefined,
    parameters: Object.fromEntries(methodParameters),
    returns: getResponseType(responses),
  };

  return apiMethod;
};

const getBodyType = (requestBody: RequestBodyObject | ReferenceObject) => {
  if (isReferenceObject(requestBody)) {
    return formatReference(requestBody.$ref);
  }

  const response = requestBody?.content?.['application/json'];

  if (!response) {
    return 'unknown';
  }

  if (isReferenceObject(response)) {
    return formatReference(response.$ref);
  }

  if ('schema' in response && isReferenceObject(response.schema)) {
    return formatReference(response.schema.$ref);
  }

  if (
    'schema' in response &&
    response.schema &&
    'type' in response.schema &&
    response.schema.type === 'array' &&
    isReferenceObject(response.schema.items)
  ) {
    return `${formatReference(response.schema.items.$ref)}[]`;
  }

  throw new Error(`Unsupported body type: ${JSON.stringify(requestBody)}`);
};

const isResponseArray = (response: ResponsesObject | undefined) => {
  const okResponse = response?.['200'];

  if (!okResponse || !('content' in okResponse)) {
    return false;
  }

  const content = okResponse.content?.['application/json'];

  return (
    content &&
    'schema' in content &&
    !!content.schema &&
    'type' in content.schema &&
    content.schema.type === 'array' &&
    !!content.schema.items
  );
};

const getResponseType = (responses: ResponsesObject | undefined) => {
  const okResponse = responses?.['200'];
  if (!okResponse || !('content' in okResponse)) {
    return `void`;
  }

  const content = okResponse.content?.['application/json'];

  if (!content || !('schema' in content) || !content.schema) {
    return `void`;
  }

  if (isReferenceObject(content.schema)) {
    return formatReference(content.schema.$ref);
  }

  if (
    'type' in content.schema &&
    content.schema.type === 'array' &&
    isReferenceObject(content.schema.items)
  ) {
    return `${formatReference(content.schema.items.$ref)}[]`;
  }

  if (
    'allOf' in content.schema &&
    isReferenceObject(content.schema.allOf?.[0])
  ) {
    return formatReference(content.schema.allOf?.[0].$ref);
  }

  const isNullable =
    'nullable' in content.schema && Object.keys(content.schema).length === 1;

  if (isNullable) {
    return 'void';
  }

  throw new Error(`Unknown response type: ${JSON.stringify(content)}`);
};

const isReferenceObject = (obj: unknown): obj is ReferenceObject => {
  return typeof obj === 'object' && !!obj && '$ref' in obj;
};

const formatReference = (ref: string) => {
  return `${ref.split('/').pop()}`;
};

/**
 * Converts a string to camel case
 *
 * Example: convertToCamelCase('hello-world') => 'helloWorld'
 */
const convertToCamelCase = (str: string) => {
  return str.replace(/([-_][a-z])/gi, $1 => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};

const createMethod = ({
  method,
  endpoint,
  parameters,
  query,
  body,
  returns,
}: MethodOptions) => {
  const params = Object.entries(parameters);

  const allParameters = [...params];

  if (body) {
    allParameters.push(['body', body]);
  }

  if (query) {
    allParameters.push(['query?', query]);
  }

  const paramsString = params.length
    ? `params: {${params.map(([key]) => `${key}: ${convertToCamelCase(key)}`).join(',')}},\n`
    : '';

  const parsedMethod = `(${allParameters
    .map(([key, value]) => `${convertToCamelCase(key)}: ${value}`)
    .join(', ')}): Promise<${returns}> => {
  return callAPI({
    method: ${encodeParam(method)},
    endpoint: ${encodeParam(endpoint)},
    ${paramsString}${query ? `query,\n` : ''}${body ? `body,\n` : ''}
  }) as Promise<${returns}>;
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

  const finalTemplate = `export type APIMethodParams = {
  method: string;
  endpoint: string;
  params?: Record<string, unknown>;
  body?: unknown;
  query?: Record<string, unknown>;
};
export type APIMethods = ReturnType<typeof createAPI>;
export const createAPI = (callAPI: (params: APIMethodParams) => unknown) => (${template});`;

  //console.log('finalTemplate', finalTemplate);

  return finalTemplate;
};
