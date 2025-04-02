import {
      ClientOptions as FetchClientOptions,
      MaybeOptionalInit,
} from 'openapi-fetch';
import {
      HttpMethod,
      PathsWithMethod,
      RequiredKeysOf,
} from 'openapi-typescript-helpers';

import {createAPIFetchClient} from './fetch';
import {Paths, RunStepOutputSchema} from './openapi';

export type APIFetchClient = ReturnType<typeof createAPIFetchClient>;
export type APIFetchClientOptions = FetchClientOptions;

export type ClientOptions = APIFetchClientOptions & {
      apiKey: string;
};

export type ApiUrl = PathsWithMethod<Paths, 'get'>;

type InitParam<Init> =
      RequiredKeysOf<Init> extends never
            ? [(Init & {[key: string]: unknown})?]
            : [Init & {[key: string]: unknown}];

export type EndpointParams<
      Path extends keyof Paths,
      Method extends HttpMethod,
> = InitParam<MaybeOptionalInit<Paths[Path], Method>>;

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
      pagination: {
            page: number;
            take: number;
            count: number;
      };
};

/**
 * Casted run step output schema with generic output type.
 * @template T Output type (default: unknown)
 * @example `CastRunStepOutputSchema<StepModelOutputSchema>`
 */
export type CastRunStepOutputSchema<T = unknown> = Omit<
      RunStepOutputSchema,
      'output'
> & {
      output: T;
};
