import {
  ClientOptions as FetchClientOptions,
  MaybeOptionalInit,
} from 'openapi-fetch';
import {
  HttpMethod,
  PathsWithMethod,
  RequiredKeysOf,
} from 'openapi-typescript-helpers';

import {paths} from '../generated/openapi';
import {createAPIFetchClient} from '../utils/api';

export type APIFetchClient = ReturnType<typeof createAPIFetchClient>;
export type APIFetchClientOptions = FetchClientOptions;

export type ClientOptions = APIFetchClientOptions & {
  apiKey: string;
};

export type ApiUrl = PathsWithMethod<paths, 'get'>;

type InitParam<Init> =
  RequiredKeysOf<Init> extends never
    ? [(Init & {[key: string]: unknown})?]
    : [Init & {[key: string]: unknown}];

export type EndpointParams<
  Path extends keyof paths,
  Method extends HttpMethod,
> = InitParam<MaybeOptionalInit<paths[Path], Method>>;

export type ErrorItem = {
  validation: string;
  code: string;
  message: string;
  path: string[];
};

export type ErrorResponse = {
  status: number;
  message: string;
  errors?: ErrorItem[];
};

export type PagedParams = {
  page: number;
  take: number;
};

export type PaginationResult<D = unknown> = {
  data: D;
  page: number;
  take: number;
  count: number;
};
