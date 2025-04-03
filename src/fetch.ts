import {createParser} from 'eventsource-parser';
import createClient, {ClientOptions} from 'openapi-fetch';
import type {PathsWithMethod} from 'openapi-typescript-helpers';

import {CORTEX_API_URL} from './constants';
import {CortexError} from './errors';
import {logger} from './logger';
import type {Paths} from './openapi';
import {EndpointParams, ErrorResponse, PaginationResult} from './types';

export type APIFetchClient = {
  CLIENT: ReturnType<typeof createClient<Paths>>;
  GET: <
    Path extends PathsWithMethod<Paths, 'get'>,
    Init extends EndpointParams<Path, 'get'>,
  >(
    path: Path,
    ...init: Init
  ) => Promise<NonNullable<any>>;
  POST: <
    Path extends PathsWithMethod<Paths, 'post'>,
    Init extends EndpointParams<Path, 'post'>,
  >(
    path: Path,
    ...init: Init
  ) => Promise<NonNullable<any>>;
  PUT: <
    Path extends PathsWithMethod<Paths, 'put'>,
    Init extends EndpointParams<Path, 'put'>,
  >(
    path: Path,
    ...init: Init
  ) => Promise<NonNullable<any>>;
  DELETE: <
    Path extends PathsWithMethod<Paths, 'delete'>,
    Init extends EndpointParams<Path, 'delete'>,
  >(
    path: Path,
    ...init: Init
  ) => Promise<NonNullable<any>>;
  PATCH: <
    Path extends PathsWithMethod<Paths, 'patch'>,
    Init extends EndpointParams<Path, 'patch'>,
  >(
    path: Path,
    ...init: Init
  ) => Promise<NonNullable<any>>;
  GETPaged: <
    Path extends PathsWithMethod<Paths, 'get'>,
    Init extends EndpointParams<Path, 'get'>,
  >(
    path: Path,
    ...init: Init
  ) => Promise<PaginationResult<NonNullable<any>>>;
};

export const createAPIFetchClient = (
  options: ClientOptions,
): APIFetchClient => {
  const CLIENT = createClient<Paths>({
    credentials: 'include',
    baseUrl: CORTEX_API_URL,
    bodySerializer: body => {
      if (!body) return;

      // handle files
      const containsFile = Object.values(body).some(
        item =>
          (typeof FileList !== 'undefined' && item instanceof FileList) ||
          item instanceof File,
      );

      if (!containsFile) {
        return JSON.stringify(body);
      }

      const formData = new FormData();

      Object.entries(body).forEach(([key, value]) => {
        if (value === undefined) return;

        // parse files
        if (value instanceof File) {
          formData.append(key, value);
          return;
        } else if (value instanceof FileList) {
          for (let i = 0; i < value.length; i++) {
            const file = value.item(i);
            if (file) {
              formData.append(key, file);
            }
          }
          return;
        }

        // parse objects
        if (value !== null && typeof value === 'object') {
          formData.append(key, JSON.stringify(value));
          return;
        }

        // add as normal value
        formData.append(key, value as string);
      });

      return formData;
    },
    ...options,
  });

  const GET = async <
    Path extends PathsWithMethod<Paths, 'get'>,
    Init extends EndpointParams<Path, 'get'>,
  >(
    path: Path,
    ...init: Init
  ) => {
    const {data, error} = await CLIENT.GET(path, ...init);

    if (error) throw new CortexError(error as unknown as ErrorResponse);

    return data as NonNullable<typeof data>;
  };

  const POST = async <
    Path extends PathsWithMethod<Paths, 'post'>,
    Init extends EndpointParams<Path, 'post'>,
  >(
    path: Path,
    ...init: Init
  ) => {
    const {data, error} = await CLIENT.POST(path, ...init);

    if (error) throw new CortexError(error as unknown as ErrorResponse);

    return data as NonNullable<typeof data>;
  };

  const PUT = async <
    Path extends PathsWithMethod<Paths, 'put'>,
    Init extends EndpointParams<Path, 'put'>,
  >(
    path: Path,
    ...init: Init
  ) => {
    const {data, error} = await CLIENT.PUT(path, ...init);

    if (error) throw new CortexError(error as unknown as ErrorResponse);

    return data as NonNullable<typeof data>;
  };

  const DELETE = async <
    Path extends PathsWithMethod<Paths, 'delete'>,
    Init extends EndpointParams<Path, 'delete'>,
  >(
    path: Path,
    ...init: Init
  ) => {
    const {data, error} = await CLIENT.DELETE(path, ...init);

    if (error) throw new CortexError(error as unknown as ErrorResponse);

    return data as NonNullable<typeof data>;
  };

  const PATCH = async <
    Path extends PathsWithMethod<Paths, 'patch'>,
    Init extends EndpointParams<Path, 'patch'>,
  >(
    path: Path,
    ...init: Init
  ) => {
    const {data, error} = await CLIENT.PATCH(path, ...init);

    if (error) throw new CortexError(error as unknown as ErrorResponse);

    return data as NonNullable<typeof data>;
  };

  const GETPaged = async <
    Path extends PathsWithMethod<Paths, 'get'>,
    Init extends EndpointParams<Path, 'get'> = EndpointParams<Path, 'get'>,
  >(
    path: Path,
    ...init: Init
  ) => {
    const {data, error, response} = await CLIENT.GET(path, ...init);

    if (error) throw new CortexError(error as unknown as ErrorResponse);

    return {
      data: data as NonNullable<typeof data>,
      pagination: {
        page: +(response.headers.get('pagination-page') ?? 0),
        take: +(response.headers.get('pagination-take') ?? 0),
        count: +(response.headers.get('pagination-count') ?? 0),
      },
    } satisfies PaginationResult<NonNullable<typeof data>>;
  };

  return {
    CLIENT,
    GET,
    POST,
    PUT,
    DELETE,
    PATCH,
    GETPaged,
  };
};

export const readSSE = async (
  response: Response,
  onData: (eventId: string | undefined, response: unknown) => void,
): Promise<void> => {
  const decoder = new TextDecoder();

  const parser = createParser({
    onEvent: event => {
      onData(event.event ?? 'unknown', JSON.parse(event.data));
    },
    onRetry: retry => {
      logger.warn('reconnect interval %d ms', retry);
    },
  });

  if (!response.body) {
    throw new CortexError({
      status: 0,
      message: 'No stream response body',
    });
  }

  const reader = response.body.getReader();

  async function* readStream() {
    try {
      while (true) {
        const {done, value} = await reader.read();
        if (done) break;
        parser.feed(decoder.decode(value));
        yield value;
      }
    } finally {
      reader.releaseLock();
    }
  }

  // eslint-disable-next-line
  for await (const chunk of readStream()) chunk;
};
