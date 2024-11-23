import dns from 'dns';
import fs from 'fs';
import path from 'path';
import openapiTS, {astToString} from 'openapi-typescript';
import ts from 'typescript';

const OPENAPI_ENDPOINT =
  process.env.CORTEX_API_URL || 'https://api.dev.withcortex.ai';

dns.setDefaultResultOrder('ipv4first');

const generateTypes = async () => {
  const endpointUrl = OPENAPI_ENDPOINT;

  const apiContractUrl = `${endpointUrl}/openapi-api.json`;

  const outputPath = path.resolve('./src/types/openapi.d.ts');

  try {
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

    const ast = await openapiTS(apiContractUrl, {
      exportType: true,
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

    const result = astToString(ast);

    fs.writeFileSync(outputPath, result);

    console.log(
      '\x1b[32m%s\x1b[0m',
      `🎉 Successfully generated types from OpenAPI contract at ${apiContractUrl}`,
    );
  } catch (e) {
    console.error(e);
  }
};

generateTypes();
