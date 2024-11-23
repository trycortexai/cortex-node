import {APIFetchClient, ClientOptions} from '../types/api';
import {APIMethodParams, APIMethods, createAPI} from '../types/openapi';
import {createAPIFetchClient} from '../utils/api';
import {getObjectProperty} from '../utils/object';

const APP_LESS_PARAM = 'c';

export class Cortex {
  private apiMethods: ReturnType<typeof createAPI>;
  private apiKey: string = '';

  apps: APIMethods['apps'] = null as unknown as APIMethods['apps'];

  client: APIFetchClient;

  baseURL?: string;

  constructor({apiKey, ...options}: ClientOptions) {
    this.apiKey = apiKey;

    //

    if (!this.apiKey) {
      throw new Error('API Key is required');
    }

    //

    this.client = createAPIFetchClient({
      ...options,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        ...options.headers,
      },
    });

    //

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

  private api = async (options: APIMethodParams): Promise<unknown> => {
    const method = this.client[
      options.method.toUpperCase() as keyof APIFetchClient
    ] as (...args: unknown[]) => Promise<unknown>;

    if (!method) {
      throw new Error(
        `Method ${options.method} not found for ${options.endpoint}`,
      );
    }

    const result = await method(options.endpoint, {
      params: {
        path: {
          app_id: APP_LESS_PARAM,
          ...options.params,
        },
        query: options.query,
      },
      body: options.body,
    });

    return result;
  };
}
