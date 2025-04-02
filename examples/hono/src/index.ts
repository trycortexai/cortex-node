import {Cortex} from '@cortex-ai/sdk';
import {serve} from '@hono/node-server';
import dotenv from 'dotenv';
import {Hono, type Context} from 'hono';
import {env} from 'hono/adapter';

import {stepStreamResponse, worklflowStreamResponse} from './stream.js';

dotenv.config();

const PORT = 8085;

const app = new Hono();

const createCortex = (ctx: Context) => {
      const {CORTEX_API_KEY} = env<{
            CORTEX_API_KEY: string;
      }>(ctx);

      const cortex = new Cortex({
            apiKey: CORTEX_API_KEY,
      });

      return cortex;
};

app.get('/', c => {
      return c.text('Cortex SDK');
});

app.get('/stream/step', async ctx => {
      const cortex = createCortex(ctx);

      const response = await stepStreamResponse(cortex);

      if (response instanceof Response) {
            return response;
      }

      return ctx.text(response);
});

app.get('/stream/workflow', async ctx => {
      const {WORKFLOW_ID} = env<{WORKFLOW_ID: string}>(ctx);

      const cortex = createCortex(ctx);

      const response = await worklflowStreamResponse(cortex, WORKFLOW_ID);

      if (response instanceof Response) {
            return response;
      }

      return ctx.text(response);
});

console.log(`Server is running on http://localhost:${PORT}`);

serve({
      fetch: app.fetch,
      port: PORT,
});
