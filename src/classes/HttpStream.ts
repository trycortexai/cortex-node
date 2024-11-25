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

    //
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
