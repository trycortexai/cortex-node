import {STREAM_PARSERS_TYPES} from '../constants/stream';
import {readSSE} from './api';

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
      throw new Error(`Event is missing in stream for ${type}`);
    }

    resultStream = streamParser?.(resultStream, event, data);

    onStream?.(resultStream as R, event, data);
  });

  return resultStream;
};
