import {STREAM_PARSERS_TYPES} from './constants';
import {CortexStreamError} from './errors';
import {readSSE} from './fetch';
import {StepModelOutputSchema} from './openapi';
import {CastRunStepOutputSchema} from './types';

export interface SSEMessage {
  data: string | object;
  event?: string;
  id?: string;
}

export class HttpStream {
  private _writer: WritableStreamDefaultWriter<Uint8Array>;

  private _readable: ReadableStream;

  textEncoder: InstanceType<typeof TextEncoder>;

  constructor() {
    const {readable, writable} = new TransformStream();

    this._readable = readable;
    this._writer = writable.getWriter();
    this.textEncoder = new TextEncoder();
  }

  getResponse() {
    return new Response(this._readable, {
      headers: {
        'Transfer-Encoding': 'chunked',
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  }

  async write(input: Uint8Array | string) {
    try {
      if (typeof input === 'string') {
        input = this.textEncoder.encode(input);
      }
      await this._writer.write(input);
    } catch (e) {
      if (e) {
        console.warn('Error writing to stream', e?.toString());
      }
    }
    return this;
  }

  async writeln(input: string) {
    await this.write(input + '\n');
    return this;
  }

  async close() {
    try {
      await this._writer.close();
    } catch (e) {
      console.warn('Error closing stream', e?.toString());
    }
  }

  async writeSSE(message: SSEMessage) {
    const parsedData =
      message.data && typeof message.data === 'object'
        ? JSON.stringify(message.data)
        : message.data;

    const data = parsedData
      .split('\n')
      .map(line => {
        return `data: ${line}`;
      })
      .join('\n');

    const sseData =
      [
        message.event && `event: ${message.event}`,
        data,
        message.id && `id: ${message.id}`,
      ]
        .filter(Boolean)
        .join('\n') + '\n\n';

    await this.write(sseData);
  }
}

type StreamParserType = keyof typeof STREAM_PARSERS_TYPES;

export const readStream = async <
  T extends StreamParserType,
  S extends (typeof STREAM_PARSERS_TYPES)[T],
  R extends Parameters<S>[0],
>(
  type: T,
  response: Response,
  onStream?: (stream: R, event: string, data: unknown) => void,
) => {
  const streamParser = STREAM_PARSERS_TYPES[type] as (
    stream: unknown,
    event: string,
    data: unknown,
  ) => unknown;

  let resultStream: unknown = null;

  await readSSE(response, (event, data) => {
    if (!event) {
      throw new CortexStreamError(`Event is missing in stream for ${type}`);
    }

    resultStream = streamParser?.(resultStream, event, data);

    onStream?.(resultStream as R, event, data);
  });

  return resultStream;
};

export const handleStepStream = (
  event: 'step' | 'chunk',
  data: CastRunStepOutputSchema,
  currentOutput: CastRunStepOutputSchema,
) => {
  try {
    switch (event) {
      case 'step': {
        return data;
      }
      case 'chunk': {
        // note: only step `model` supports `chunk` event at the moment

        const output = (data.output ?? {}) as StepModelOutputSchema;

        // loops support
        if (typeof output.index !== 'undefined') {
          const step = currentOutput as CastRunStepOutputSchema<
            StepModelOutputSchema[]
          >;

          const stepOutput = step.output?.find(e => e.index === output.index);

          output.message = `${stepOutput?.message ?? ''}${output.message ?? ''}`;

          if (!step.output) {
            step.output = [];
          }

          step.output = [
            ...step.output.filter(e => e.index !== output.index),
            output,
          ];

          return step;
        } else {
          const step =
            currentOutput as CastRunStepOutputSchema<StepModelOutputSchema>;

          output.message = `${step.output?.message ?? ''}${output?.message ?? ''}`;

          step.output = output;

          return step;
        }
      }
    }
  } catch (e) {
    console.error('HANDLE_STEP_STREAM_ERROR', e);
    return data;
  }
};
