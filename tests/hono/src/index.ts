import {serve} from '@hono/node-server';
import {Hono} from 'hono';

import {testStep} from './cortex.js';

const app = new Hono();

app.get('/', c => {
  return c.text('Playground');
});

const port = 8085;

console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});

testStep();
