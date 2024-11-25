import {APP_LESS_PARAM} from '../constants/api';
import {STREAM_PARSERS} from '../constants/stream';
import {APIMethodRequest, APIMethods, createAPI} from '../generated/openapi';
import {APIFetchClient, ClientOptions, ErrorResponse} from '../types/api';
import {createAPIFetchClient, readSSE} from '../utils/api';
import {getObjectProperty} from '../utils/object';
import {CortexAPIError} from './CortexAPIError';
import {HttpStream} from './HttpStream';

export class Cortex {
  private readonly apiMethods: APIMethods;
  private readonly apiKey: string;

  apps: APIMethods['apps'] = null as unknown as APIMethods['apps'];

  client: APIFetchClient;

  baseURL?: string;

  constructor({apiKey, ...options}: ClientOptions) {
    this.apiKey = apiKey;

    if (!this.apiKey) {
      throw new Error('API Key is required');
    }

    this.client = createAPIFetchClient({
      ...options,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        ...options.headers,
      },
    });

    this.apiMethods = createAPI(this.api);

    return this.createProxy();
  }

  private createProxy() {
    return new Proxy(this, {
      get: (target, prop, receiver) => {
        return (
          getObjectProperty(this.apiMethods, prop.toString()) ??
          Reflect.get(target, prop, receiver)
        );
      },
    });
  }

  private api = async (
    name: string,
    {endpoint, method, params, body, options}: APIMethodRequest,
  ): Promise<unknown> => {
    const methodUpperCase = method.toUpperCase() as keyof APIFetchClient;

    const {query, onStream, ...requestInit} = options ?? {};

    const isStream = name.startsWith('stream');
    const isPagination = name === 'list';

    const streamParser = isStream
      ? (STREAM_PARSERS[endpoint as keyof typeof STREAM_PARSERS] as (
          stream: unknown,
          event: string,
          data: unknown,
        ) => unknown)
      : null;

    if (isStream && isPagination) {
      throw new Error('Pagination is not supported with stream');
    }

    if (isStream && !streamParser) {
      throw new Error(`Stream is yet available for ${endpoint}`);
    }

    const requestParams = {
      ...(isStream ? {parseAs: 'stream'} : {}),
      params: {
        path: {
          app_id: APP_LESS_PARAM,
          ...params,
        },
        query,
      },
      ...(body
        ? {
            body: {
              ...body,
              ...(isStream ? {stream: true} : {}),
            },
          }
        : {}),
      ...requestInit,
    };

    const clientMethod = (
      isPagination
        ? this.client.GETPaged
        : isStream
          ? this.client.CLIENT[methodUpperCase as 'GET']
          : this.client[methodUpperCase]
    ) as (...args: unknown[]) => Promise<unknown>;

    if (!method) {
      throw new Error(`Method ${method} not found for ${endpoint}`);
    }

    const result = await clientMethod(endpoint, requestParams);

    if (isStream) {
      const {response, error} = result as {
        response: Response;
        error: unknown;
      };

      if (error) {
        throw new CortexAPIError(error as ErrorResponse);
      }

      let resultStream: unknown = null;
      const httpStream = name === 'streamResponse' ? new HttpStream() : null;

      const sse = readSSE(response, (event, data) => {
        if (!event) {
          throw new Error(`Event is missing in stream for ${endpoint}`);
        }

        httpStream?.writeSSE({
          event,
          data: data as object,
        });

        resultStream = streamParser?.(resultStream, event, data);

        onStream?.(resultStream, event, data);
      });

      if (httpStream) {
        (async () => {
          await sse;

          httpStream.close();
        })();

        return httpStream.getResponse();
      }

      await sse;

      return resultStream;
    }

    return result;
  };
}
