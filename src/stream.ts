import {STREAM_PARSERS_TYPES} from './constants';
import {CortexStreamError} from './errors';
import {readSSE} from './fetch';
import {RunStepOutputSchema, StepModelOutputSchema} from './openapi';
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
  eventType: 'step' | 'chunk',
  data: CastRunStepOutputSchema,
  currentOutput: CastRunStepOutputSchema,
): CastRunStepOutputSchema => {
  try {
    switch (eventType) {
      case 'step': {
        return data;
      }
      case 'chunk': {
        return processStepChunk(data, currentOutput) as CastRunStepOutputSchema;
      }
    }
  } catch (e) {
    console.error('handleStepStream error', e);
    return currentOutput;
  }
};

const processStepChunk = (
  partialOutput: RunStepOutputSchema,
  currentOutput: RunStepOutputSchema,
) => {
  // if the step already finished, assign the output and return
  if (partialOutput.status !== 'RUNNING') {
    Object.assign(currentOutput, partialOutput);
    return {...currentOutput};
  }

  if (!currentOutput) {
    console.debug('handleStepStream: currentOutput is not defined', {
      partialOutput,
      currentOutput,
    });
    return currentOutput;
  }

  const {output, calls, ...rest} = partialOutput as CastRunStepOutputSchema;

  // update rest of the properties
  Object.assign(currentOutput, rest);

  // calls
  if (calls) {
    calls.map(newCall => {
      if (!currentOutput.calls) {
        currentOutput.calls = [];
      }

      const currentCall = currentOutput.calls.find(e => e.id === newCall.id);

      if (currentCall) {
        const updatedOutput = processStepChunk(
          newCall as RunStepOutputSchema,
          currentCall as RunStepOutputSchema,
        );

        currentOutput.calls = currentOutput.calls.map(e =>
          e.id === newCall.id ? updatedOutput : e,
        );
        return;
      }

      currentOutput.calls = [...currentOutput.calls, newCall];
    });
  }

  // model
  if (output && isModelOutput(partialOutput)) {
    const output = partialOutput.output as StepModelOutputSchema;

    // if in a loop
    if (typeof output.index === 'undefined') {
      const castedOutput =
        currentOutput as CastRunStepOutputSchema<StepModelOutputSchema>;

      castedOutput.output = consolidateStepModelOutput(
        output,
        castedOutput.output ?? {},
      );
    } else {
      // if not in a loop
      const castedOutput = currentOutput as CastRunStepOutputSchema<
        StepModelOutputSchema[]
      >;

      if (!castedOutput.output) {
        castedOutput.output = [];
      }

      if (!Array.isArray(castedOutput.output)) {
        castedOutput.output = [castedOutput.output];
      }

      const stepOutput = castedOutput.output?.find(
        e => e.index === output.index,
      );

      if (!stepOutput) {
        castedOutput.output = [...castedOutput.output, output];
      } else {
        const newOutput = consolidateStepModelOutput(output, stepOutput);
        castedOutput.output = castedOutput.output.map(e =>
          e.index === output.index ? newOutput : e,
        );
      }
    }
  }

  return {...currentOutput};
};

export const consolidateStepModelOutput = (
  partialOutput: Partial<StepModelOutputSchema>,
  currentOutput: StepModelOutputSchema,
) => {
  const {message, tool_calls, ...rest} = partialOutput;

  // assign the rest of the properties
  Object.assign(currentOutput, rest);

  // message
  if (message) {
    if (!message) {
      currentOutput.message = '';
    }

    if (typeof message === 'object') {
      currentOutput.message = message;
    }

    if (typeof message === 'string') {
      currentOutput.message = `${currentOutput.message ?? ''}${message}`;
    }
  }

  // tools
  if (tool_calls?.length) {
    tool_calls.forEach(call => {
      if (!currentOutput.tool_calls) {
        currentOutput.tool_calls = [];
      }

      const currentCall = currentOutput.tool_calls.find(e => e.id === call.id);

      if (currentCall) {
        if (typeof call.input === 'object') {
          currentCall.input = call.input;
        }

        if (typeof call.input === 'string') {
          currentCall.input = `${currentCall.input ?? ''}${call.input}`;
        }

        currentOutput.tool_calls = currentOutput.tool_calls.map(e =>
          e.id === call.id ? currentCall : e,
        );
        return;
      }

      currentOutput.tool_calls = [...currentOutput.tool_calls, call];
    });
  }

  return {...currentOutput};
};

export const isModelOutput = (output: RunStepOutputSchema) => {
  const modelOutput = output as CastRunStepOutputSchema<
    StepModelOutputSchema | StepModelOutputSchema[]
  >;

  return (
    (Array.isArray(modelOutput?.output) && !!modelOutput?.output?.[0]?.model) ||
    (!Array.isArray(modelOutput?.output) && !!modelOutput?.output?.model)
  );
};
