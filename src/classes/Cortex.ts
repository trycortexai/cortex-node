import {APIClient, APIFetchClient, ClientOptions} from '../types/api';
import {createAPIFetchClient} from '../utils/api';

export class Cortex implements APIClient {
  client: APIFetchClient;

  get: APIFetchClient['GET'];
  getPaged: APIFetchClient['GETPaged'];
  post: APIFetchClient['POST'];
  put: APIFetchClient['PUT'];
  delete: APIFetchClient['DELETE'];

  appId: string = '';
  apiKey: string = '';
  baseURL?: string;

  constructor({appId, apiKey, ...options}: ClientOptions) {
    this.appId = appId;
    this.apiKey = apiKey;

    //

    if (!this.appId) {
      throw new Error('App ID is required');
    }

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

    this.get = this.client.GET;
    this.getPaged = this.client.GETPaged;
    this.post = this.client.POST;
    this.put = this.client.PUT;
    this.delete = this.client.DELETE;
  }

  hello() {
    // eslint-disable-next-line
    this.client;
  }
}
