import dns from 'dns';
import fs from 'fs';
import path from 'path';

import {generateAPIMethods, generateTypes} from './openapi.utils';

const OPENAPI_ENDPOINT =
  process.env.CORTEX_API_URL || 'https://api.dev.withcortex.ai';

dns.setDefaultResultOrder('ipv4first');

const generate = async () => {
  try {
    const apiContractUrl = `${OPENAPI_ENDPOINT}/openapi-api.json`;

    const openapiSchema = await (await fetch(apiContractUrl)).json();

    console.log(
      '\x1b[32m%s\x1b[0m',
      `🎉 OpenAPI schema fetched from ${apiContractUrl}`,
    );

    const openapiTypes = await generateTypes(openapiSchema);
    console.log('\x1b[32m%s\x1b[0m', `🎉 Successfully generated schema types`);

    //

    const apiMethods = generateAPIMethods(openapiSchema);
    console.log('\x1b[32m%s\x1b[0m', `🎉 Successfully generated API types`);

    //

    const typesPath = path.resolve('./src/generated/openapi.ts');
    fs.writeFileSync(typesPath, `${openapiTypes}\n\n${apiMethods}`);

    console.log(
      '\x1b[32m%s\x1b[0m',
      `🎉 Successfully generated at ${typesPath}`,
    );
  } catch (e) {
    console.error(e);
  }
};

generate();
