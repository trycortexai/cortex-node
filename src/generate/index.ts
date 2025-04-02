import dns from 'dns';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';

import {logger} from '../logger';
import {generateAPIMethods, generateTypes} from './utils';

const OPENAPI_ENDPOINT = 'https://api.dev.withcortex.ai';
const API_CONTRACT_URL = `${OPENAPI_ENDPOINT}/openapi-api.json`;

dns.setDefaultResultOrder('ipv4first');

const OPENAPI_PATH = path.resolve('./src/openapi.ts');

const BANNER = `// This file is auto-generated. Do not edit.`;

const generate = async () => {
  const spinner = ora({
    text: chalk.blue('Starting OpenAPI generation...'),
    spinner: 'dots',
  }).start();

  try {
    spinner.text = chalk.blue(
      `Fetching OpenAPI schema from ${API_CONTRACT_URL}`,
    );
    const openapiSchema = await (await fetch(API_CONTRACT_URL)).json();
    spinner.succeed(chalk.green(`OpenAPI schema fetched successfully`));

    spinner.start(chalk.blue('Generating schema types...'));
    const openapiTypes = await generateTypes(openapiSchema);
    spinner.succeed(chalk.green('Schema types generated successfully'));

    spinner.start(chalk.blue('Generating API methods...'));
    const apiMethods = generateAPIMethods(openapiSchema);
    spinner.succeed(chalk.green('API methods generated successfully'));

    spinner.start(chalk.blue(`Writing to ${OPENAPI_PATH}...`));
    fs.writeFileSync(
      OPENAPI_PATH,
      `${BANNER}

${apiMethods}\n\n${openapiTypes}`,
    );
    spinner.succeed(chalk.green('File written successfully'));

    console.log('\n');
    console.log(chalk.bold.green('✨ OpenAPI Generation Complete ✨'));
    console.log(chalk.white(`Output: ${OPENAPI_PATH}`));
    console.log('\n');
  } catch (e) {
    spinner.fail(chalk.red('Generation failed'));
    logger.error('OpenAPI generation error:', e);
  }
};

generate();
