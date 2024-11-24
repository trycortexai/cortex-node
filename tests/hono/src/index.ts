import {Cortex} from '@cortex-ai/sdk';
import {serve} from '@hono/node-server';
import dotenv from 'dotenv';
import {Hono, type Context} from 'hono';
import {env} from 'hono/adapter';

import {stepStream, workflowStream} from './stream.js';

dotenv.config();

const PORT = 8085;

const app = new Hono();

const createCortex = (c: Context) => {
  const {CORTEX_API_KEY, BASE_URL} = env<{
    CORTEX_API_KEY: string;
    BASE_URL: string;
  }>(c);

  const cortex = new Cortex({
    apiKey: CORTEX_API_KEY,
    baseUrl: BASE_URL,
  });

  return cortex;
};

app.get('/', c => {
  return c.text('Cortex SDK');
});

app.get('/stream/step', c => {
  const cortex = createCortex(c);
  stepStream(cortex);
  return c.text('Stream Step');
});

app.get('/stream/workflow', c => {
  const {WORKFLOW_ID} = env<{WORKFLOW_ID: string}>(c);
  const cortex = createCortex(c);
  workflowStream(cortex, WORKFLOW_ID);
  return c.text('Stream Workflow');
});

console.log(`Server is running on http://localhost:${PORT}`);

serve({
  fetch: app.fetch,
  port: PORT,
});
