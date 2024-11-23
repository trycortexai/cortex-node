import {ClientOptions as FetchClientOptions} from 'openapi-fetch';

import {createAPIFetchClient} from '../utils/api';

export type APIFetchClient = ReturnType<typeof createAPIFetchClient>;
export type APIFetchClientOptions = FetchClientOptions;

export type ClientOptions = APIFetchClientOptions & {
  apiKey: string;
  appId: string;
};

export interface APIClient extends ClientOptions {
  appId: string;
}
