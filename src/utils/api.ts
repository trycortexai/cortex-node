import {createParser} from 'eventsource-parser';
import createClient, {ClientOptions} from 'openapi-fetch';
import type {PathsWithMethod} from 'openapi-typescript-helpers';

import {CortexAPIError} from '../classes/CortexAPIError';
import {API_ENDPOINT} from '../constants/api';
import {EndpointParams, ErrorResponse, PaginationResult} from '../types/api';
import type {
  APIMethodRequest,
  AppVariableSchema,
  CollectionSchema,
  CreateCollectionSchema,
  CreateFileSchema,
  CreateRecordSchema,
  CreateRunSchema,
  CreateRunStepSchema,
  CreateWorkflowTestSchema,
  ExtendedCollectionSchema,
  ExtendedRecordSchema,
  FileSchema,
  paths,
  RecordSchema,
  RecordStatusSchema,
  ReplayRunSchema,
  RunRecordSchema,
  RunSchema,
  RunStepSchema,
  RunWorkflowTestSchema,
  UpdateCollectionSchema,
  UpdateRecordSchema,
  UpdateWorkflowTestSchema,
  WorkflowSchema,
  WorkflowTestSchema,
  WorkflowTestStatsSchema,
  WorkflowVersionSchema,
} from '../types/openapi';

export const createAPIFetchClient = (options: ClientOptions) => {
  const CLIENT = createClient<paths>({
    credentials: 'include',
    baseUrl: API_ENDPOINT,
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
    Path extends PathsWithMethod<paths, 'get'>,
    Init extends EndpointParams<Path, 'get'>,
  >(
    path: Path,
    ...init: Init
  ) => {
    const {data, error} = await CLIENT.GET(path, ...init);

    if (error) throw new CortexAPIError(error as unknown as ErrorResponse);

    return data as NonNullable<typeof data>;
  };

  const POST = async <
    Path extends PathsWithMethod<paths, 'post'>,
    Init extends EndpointParams<Path, 'post'>,
  >(
    path: Path,
    ...init: Init
  ) => {
    const {data, error} = await CLIENT.POST(path, ...init);

    if (error) throw new CortexAPIError(error as unknown as ErrorResponse);

    return data as NonNullable<typeof data>;
  };

  const PUT = async <
    Path extends PathsWithMethod<paths, 'put'>,
    Init extends EndpointParams<Path, 'put'>,
  >(
    path: Path,
    ...init: Init
  ) => {
    const {data, error} = await CLIENT.PUT(path, ...init);

    if (error) throw new CortexAPIError(error as unknown as ErrorResponse);

    return data as NonNullable<typeof data>;
  };

  const DELETE = async <
    Path extends PathsWithMethod<paths, 'delete'>,
    Init extends EndpointParams<Path, 'delete'>,
  >(
    path: Path,
    ...init: Init
  ) => {
    const {data, error} = await CLIENT.DELETE(path, ...init);

    if (error) throw new CortexAPIError(error as unknown as ErrorResponse);

    return data as NonNullable<typeof data>;
  };

  const PATCH = async <
    Path extends PathsWithMethod<paths, 'patch'>,
    Init extends EndpointParams<Path, 'patch'>,
  >(
    path: Path,
    ...init: Init
  ) => {
    const {data, error} = await CLIENT.PATCH(path, ...init);

    if (error) throw new CortexAPIError(error as unknown as ErrorResponse);

    return data as NonNullable<typeof data>;
  };

  const GETPaged = async <
    Path extends PathsWithMethod<paths, 'get'>,
    Init extends EndpointParams<Path, 'get'> = EndpointParams<Path, 'get'>,
  >(
    path: Path,
    ...init: Init
  ) => {
    const {data, error, response} = await CLIENT.GET(path, ...init);

    if (error) throw new CortexAPIError(error as unknown as ErrorResponse);

    return {
      data: data as NonNullable<typeof data>,
      page: +(response.headers.get('pagination-page') ?? 0),
      take: +(response.headers.get('pagination-take') ?? 0),
      count: +(response.headers.get('pagination-count') ?? 0),
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
) => {
  const decoder = new TextDecoder();

  const parser = createParser({
    onEvent: event => {
      onData(event.event ?? 'unknown', JSON.parse(event.data));
    },
    onRetry: retry => {
      console.log('reconnect interval %d ms', retry);
    },
  });

  if (!response.body) {
    throw new CortexAPIError({
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

export const createAPI = (callAPI: (request: APIMethodRequest) => unknown) => ({
  apps: {
    files: {
      list: (
        options?: RequestInit & {
          query?: paths['/apps/{app_id}/files']['get']['parameters']['query'];
        },
      ): Promise<FileSchema[]> => {
        return callAPI({
          method: 'get',
          endpoint: '/apps/{app_id}/files',
          options,
        }) as Promise<FileSchema[]>;
      },
      create: (
        body: CreateFileSchema,
        options?: RequestInit,
      ): Promise<FileSchema> => {
        return callAPI({
          method: 'post',
          endpoint: '/apps/{app_id}/files',
          body,
          options,
        }) as Promise<FileSchema>;
      },
      retrieve: (
        fileId: string,
        options?: RequestInit,
      ): Promise<FileSchema> => {
        return callAPI({
          method: 'get',
          endpoint: '/apps/{app_id}/files/{file_id}',
          params: {file_id: fileId},
          options,
        }) as Promise<FileSchema>;
      },
      delete: (fileId: string, options?: RequestInit): Promise<void> => {
        return callAPI({
          method: 'delete',
          endpoint: '/apps/{app_id}/files/{file_id}',
          params: {file_id: fileId},
          options,
        }) as Promise<void>;
      },
      cancel: (fileId: string, options?: RequestInit): Promise<FileSchema> => {
        return callAPI({
          method: 'post',
          endpoint: '/apps/{app_id}/files/{file_id}/cancel',
          params: {file_id: fileId},
          options,
        }) as Promise<FileSchema>;
      },
    },
    connections: (
      connectionId: string,
      options?: RequestInit,
    ): Promise<void> => {
      return callAPI({
        method: 'delete',
        endpoint: '/apps/{app_id}/connections/{connection_id}',
        params: {connection_id: connectionId},
        options,
      }) as Promise<void>;
    },
    variables: (
      body: AppVariableSchema[],
      options?: RequestInit & {
        query?: paths['/apps/{app_id}/variables']['patch']['parameters']['query'];
      },
    ): Promise<AppVariableSchema[]> => {
      return callAPI({
        method: 'patch',
        endpoint: '/apps/{app_id}/variables',
        body,
        options,
      }) as Promise<AppVariableSchema[]>;
    },
    runs: {
      step: {
        create: (
          body: Omit<CreateRunStepSchema, 'stream'>,
          options?: RequestInit,
        ): Promise<RunStepSchema> => {
          return callAPI({
            method: 'post',
            endpoint: '/apps/{app_id}/runs/step',
            body,
            options,
          }) as Promise<RunStepSchema>;
        },
        stream: (
          body: Omit<CreateRunStepSchema, 'stream'>,
          options?: RequestInit & {
            onStream?: (
              partialResult: RunStepSchema,
              event: unknown,
              data: unknown,
            ) => void;
          },
        ): Promise<RunStepSchema> => {
          return callAPI({
            method: 'post',
            endpoint: '/apps/{app_id}/runs/step',
            body,
            options,
          }) as Promise<RunStepSchema>;
        },
      },
    },
    workflows: {
      discover: {
        list: (
          options?: RequestInit & {
            query?: paths['/apps/{app_id}/workflows/discover']['get']['parameters']['query'];
          },
        ): Promise<WorkflowSchema[]> => {
          return callAPI({
            method: 'get',
            endpoint: '/apps/{app_id}/workflows/discover',
            options,
          }) as Promise<WorkflowSchema[]>;
        },
        retrieve: (
          workflowId: string,
          options?: RequestInit,
        ): Promise<WorkflowSchema> => {
          return callAPI({
            method: 'get',
            endpoint: '/apps/{app_id}/workflows/discover/{workflow_id}',
            params: {workflow_id: workflowId},
            options,
          }) as Promise<WorkflowSchema>;
        },
        versions: (
          workflowId: string,
          versionIdOrVersionNumber: string,
          options?: RequestInit,
        ): Promise<WorkflowVersionSchema> => {
          return callAPI({
            method: 'get',
            endpoint:
              '/apps/{app_id}/workflows/discover/{workflow_id}/versions/{version_id_or_version_number}',
            params: {
              workflow_id: workflowId,
              version_id_or_version_number: versionIdOrVersionNumber,
            },
            options,
          }) as Promise<WorkflowVersionSchema>;
        },
        runs: {
          create: (
            workflowId: string,
            body: Omit<CreateRunSchema, 'stream'>,
            options?: RequestInit & {
              query?: paths['/apps/{app_id}/workflows/discover/{workflow_id}/runs']['post']['parameters']['query'];
            },
          ): Promise<RunSchema> => {
            return callAPI({
              method: 'post',
              endpoint: '/apps/{app_id}/workflows/discover/{workflow_id}/runs',
              params: {workflow_id: workflowId},
              body,
              options,
            }) as Promise<RunSchema>;
          },
          stream: (
            workflowId: string,
            body: Omit<CreateRunSchema, 'stream'>,
            options?: RequestInit & {
              query?: paths['/apps/{app_id}/workflows/discover/{workflow_id}/runs']['post']['parameters']['query'];
              onStream?: (
                partialResult: RunSchema,
                event: unknown,
                data: unknown,
              ) => void;
            },
          ): Promise<RunSchema> => {
            return callAPI({
              method: 'post',
              endpoint: '/apps/{app_id}/workflows/discover/{workflow_id}/runs',
              params: {workflow_id: workflowId},
              body,
              options,
            }) as Promise<RunSchema>;
          },
          cancel: (
            workflowId: string,
            runId: string,
            options?: RequestInit & {
              query?: paths['/apps/{app_id}/workflows/discover/{workflow_id}/runs/{run_id}/cancel']['post']['parameters']['query'];
            },
          ): Promise<RunSchema> => {
            return callAPI({
              method: 'post',
              endpoint:
                '/apps/{app_id}/workflows/discover/{workflow_id}/runs/{run_id}/cancel',
              params: {workflow_id: workflowId, run_id: runId},
              options,
            }) as Promise<RunSchema>;
          },
        },
      },
      list: (
        options?: RequestInit & {
          query?: paths['/apps/{app_id}/workflows']['get']['parameters']['query'];
        },
      ): Promise<WorkflowSchema[]> => {
        return callAPI({
          method: 'get',
          endpoint: '/apps/{app_id}/workflows',
          options,
        }) as Promise<WorkflowSchema[]>;
      },
      retrieve: (
        workflowId: string,
        options?: RequestInit,
      ): Promise<WorkflowSchema> => {
        return callAPI({
          method: 'get',
          endpoint: '/apps/{app_id}/workflows/{workflow_id}',
          params: {workflow_id: workflowId},
          options,
        }) as Promise<WorkflowSchema>;
      },
      runs: {
        list: (
          workflowId: string,
          options?: RequestInit & {
            query?: paths['/apps/{app_id}/workflows/{workflow_id}/runs']['get']['parameters']['query'];
          },
        ): Promise<RunSchema[]> => {
          return callAPI({
            method: 'get',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/runs',
            params: {workflow_id: workflowId},
            options,
          }) as Promise<RunSchema[]>;
        },
        create: (
          workflowId: string,
          body: Omit<CreateRunSchema, 'stream'>,
          options?: RequestInit & {
            query?: paths['/apps/{app_id}/workflows/{workflow_id}/runs']['post']['parameters']['query'];
          },
        ): Promise<RunSchema> => {
          return callAPI({
            method: 'post',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/runs',
            params: {workflow_id: workflowId},
            body,
            options,
          }) as Promise<RunSchema>;
        },
        stream: (
          workflowId: string,
          body: Omit<CreateRunSchema, 'stream'>,
          options?: RequestInit & {
            query?: paths['/apps/{app_id}/workflows/{workflow_id}/runs']['post']['parameters']['query'];
            onStream?: (
              partialResult: RunSchema,
              event: unknown,
              data: unknown,
            ) => void;
          },
        ): Promise<RunSchema> => {
          return callAPI({
            method: 'post',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/runs',
            params: {workflow_id: workflowId},
            body,
            options,
          }) as Promise<RunSchema>;
        },
        replay: {
          create: (
            workflowId: string,
            runId: string,
            body: Omit<ReplayRunSchema, 'stream'>,
            options?: RequestInit & {
              query?: paths['/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}/replay']['post']['parameters']['query'];
            },
          ): Promise<RunSchema> => {
            return callAPI({
              method: 'post',
              endpoint:
                '/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}/replay',
              params: {workflow_id: workflowId, run_id: runId},
              body,
              options,
            }) as Promise<RunSchema>;
          },
          stream: (
            workflowId: string,
            runId: string,
            body: Omit<ReplayRunSchema, 'stream'>,
            options?: RequestInit & {
              query?: paths['/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}/replay']['post']['parameters']['query'];
              onStream?: (
                partialResult: RunSchema,
                event: unknown,
                data: unknown,
              ) => void;
            },
          ): Promise<RunSchema> => {
            return callAPI({
              method: 'post',
              endpoint:
                '/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}/replay',
              params: {workflow_id: workflowId, run_id: runId},
              body,
              options,
            }) as Promise<RunSchema>;
          },
        },
        retrieve: (
          workflowId: string,
          runId: string,
          options?: RequestInit & {
            query?: paths['/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}']['get']['parameters']['query'];
          },
        ): Promise<RunSchema> => {
          return callAPI({
            method: 'get',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}',
            params: {workflow_id: workflowId, run_id: runId},
            options,
          }) as Promise<RunSchema>;
        },
        cancel: (
          workflowId: string,
          runId: string,
          options?: RequestInit & {
            query?: paths['/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}/cancel']['post']['parameters']['query'];
          },
        ): Promise<RunSchema> => {
          return callAPI({
            method: 'post',
            endpoint:
              '/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}/cancel',
            params: {workflow_id: workflowId, run_id: runId},
            options,
          }) as Promise<RunSchema>;
        },
      },
      tests: {
        expectations: (
          workflowId: string,
          expectationId: string,
          options?: RequestInit,
        ): Promise<void> => {
          return callAPI({
            method: 'delete',
            endpoint:
              '/apps/{app_id}/workflows/{workflow_id}/tests/expectations/{expectation_id}',
            params: {workflow_id: workflowId, expectation_id: expectationId},
            options,
          }) as Promise<void>;
        },
        list: (
          workflowId: string,
          options?: RequestInit & {
            query?: paths['/apps/{app_id}/workflows/{workflow_id}/tests']['get']['parameters']['query'];
          },
        ): Promise<WorkflowTestSchema[]> => {
          return callAPI({
            method: 'get',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/tests',
            params: {workflow_id: workflowId},
            options,
          }) as Promise<WorkflowTestSchema[]>;
        },
        create: (
          workflowId: string,
          body: CreateWorkflowTestSchema,
          options?: RequestInit & {
            query?: paths['/apps/{app_id}/workflows/{workflow_id}/tests']['post']['parameters']['query'];
          },
        ): Promise<WorkflowTestSchema> => {
          return callAPI({
            method: 'post',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/tests',
            params: {workflow_id: workflowId},
            body,
            options,
          }) as Promise<WorkflowTestSchema>;
        },
        stats: (
          workflowId: string,
          options?: RequestInit,
        ): Promise<WorkflowTestStatsSchema> => {
          return callAPI({
            method: 'get',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/tests/stats',
            params: {workflow_id: workflowId},
            options,
          }) as Promise<WorkflowTestStatsSchema>;
        },
        retrieve: (
          workflowId: string,
          testId: string,
          options?: RequestInit & {
            query?: paths['/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}']['get']['parameters']['query'];
          },
        ): Promise<WorkflowTestSchema> => {
          return callAPI({
            method: 'get',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}',
            params: {workflow_id: workflowId, test_id: testId},
            options,
          }) as Promise<WorkflowTestSchema>;
        },
        update: (
          workflowId: string,
          testId: string,
          body: UpdateWorkflowTestSchema,
          options?: RequestInit & {
            query?: paths['/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}']['patch']['parameters']['query'];
          },
        ): Promise<WorkflowTestSchema> => {
          return callAPI({
            method: 'patch',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}',
            params: {workflow_id: workflowId, test_id: testId},
            body,
            options,
          }) as Promise<WorkflowTestSchema>;
        },
        delete: (
          workflowId: string,
          testId: string,
          options?: RequestInit,
        ): Promise<void> => {
          return callAPI({
            method: 'delete',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}',
            params: {workflow_id: workflowId, test_id: testId},
            options,
          }) as Promise<void>;
        },
        runs: (
          workflowId: string,
          testId: string,
          body: RunWorkflowTestSchema,
          options?: RequestInit & {
            query?: paths['/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}/runs']['post']['parameters']['query'];
          },
        ): Promise<WorkflowTestSchema> => {
          return callAPI({
            method: 'post',
            endpoint:
              '/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}/runs',
            params: {workflow_id: workflowId, test_id: testId},
            body,
            options,
          }) as Promise<WorkflowTestSchema>;
        },
        cancel: (
          workflowId: string,
          testId: string,
          options?: RequestInit & {
            query?: paths['/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}/cancel']['post']['parameters']['query'];
          },
        ): Promise<WorkflowTestSchema> => {
          return callAPI({
            method: 'post',
            endpoint:
              '/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}/cancel',
            params: {workflow_id: workflowId, test_id: testId},
            options,
          }) as Promise<WorkflowTestSchema>;
        },
      },
      versions: (
        workflowId: string,
        versionIdOrVersionNumber: string,
        options?: RequestInit,
      ): Promise<WorkflowVersionSchema> => {
        return callAPI({
          method: 'get',
          endpoint:
            '/apps/{app_id}/workflows/{workflow_id}/versions/{version_id_or_version_number}',
          params: {
            workflow_id: workflowId,
            version_id_or_version_number: versionIdOrVersionNumber,
          },
          options,
        }) as Promise<WorkflowVersionSchema>;
      },
    },
    collections: {
      list: (
        options?: RequestInit & {
          query?: paths['/apps/{app_id}/collections']['get']['parameters']['query'];
        },
      ): Promise<CollectionSchema[]> => {
        return callAPI({
          method: 'get',
          endpoint: '/apps/{app_id}/collections',
          options,
        }) as Promise<CollectionSchema[]>;
      },
      create: (
        body: CreateCollectionSchema,
        options?: RequestInit,
      ): Promise<ExtendedCollectionSchema> => {
        return callAPI({
          method: 'post',
          endpoint: '/apps/{app_id}/collections',
          body,
          options,
        }) as Promise<ExtendedCollectionSchema>;
      },
      retrieve: (
        collectionId: string,
        options?: RequestInit,
      ): Promise<ExtendedCollectionSchema> => {
        return callAPI({
          method: 'get',
          endpoint: '/apps/{app_id}/collections/{collection_id}',
          params: {collection_id: collectionId},
          options,
        }) as Promise<ExtendedCollectionSchema>;
      },
      update: (
        collectionId: string,
        body: UpdateCollectionSchema,
        options?: RequestInit,
      ): Promise<ExtendedCollectionSchema> => {
        return callAPI({
          method: 'patch',
          endpoint: '/apps/{app_id}/collections/{collection_id}',
          params: {collection_id: collectionId},
          body,
          options,
        }) as Promise<ExtendedCollectionSchema>;
      },
      delete: (collectionId: string, options?: RequestInit): Promise<void> => {
        return callAPI({
          method: 'delete',
          endpoint: '/apps/{app_id}/collections/{collection_id}',
          params: {collection_id: collectionId},
          options,
        }) as Promise<void>;
      },
      records: {
        list: (
          collectionId: string,
          options?: RequestInit & {
            query?: paths['/apps/{app_id}/collections/{collection_id}/records']['get']['parameters']['query'];
          },
        ): Promise<RecordSchema[]> => {
          return callAPI({
            method: 'get',
            endpoint: '/apps/{app_id}/collections/{collection_id}/records',
            params: {collection_id: collectionId},
            options,
          }) as Promise<RecordSchema[]>;
        },
        create: (
          collectionId: string,
          body: CreateRecordSchema,
          options?: RequestInit & {
            query?: paths['/apps/{app_id}/collections/{collection_id}/records']['post']['parameters']['query'];
          },
        ): Promise<ExtendedRecordSchema> => {
          return callAPI({
            method: 'post',
            endpoint: '/apps/{app_id}/collections/{collection_id}/records',
            params: {collection_id: collectionId},
            body,
            options,
          }) as Promise<ExtendedRecordSchema>;
        },
        retrieve: (
          collectionId: string,
          recordId: string,
          options?: RequestInit & {
            query?: paths['/apps/{app_id}/collections/{collection_id}/records/{record_id}']['get']['parameters']['query'];
          },
        ): Promise<ExtendedRecordSchema> => {
          return callAPI({
            method: 'get',
            endpoint:
              '/apps/{app_id}/collections/{collection_id}/records/{record_id}',
            params: {collection_id: collectionId, record_id: recordId},
            options,
          }) as Promise<ExtendedRecordSchema>;
        },
        update: (
          collectionId: string,
          recordId: string,
          body: UpdateRecordSchema,
          options?: RequestInit & {
            query?: paths['/apps/{app_id}/collections/{collection_id}/records/{record_id}']['patch']['parameters']['query'];
          },
        ): Promise<ExtendedRecordSchema> => {
          return callAPI({
            method: 'patch',
            endpoint:
              '/apps/{app_id}/collections/{collection_id}/records/{record_id}',
            params: {collection_id: collectionId, record_id: recordId},
            body,
            options,
          }) as Promise<ExtendedRecordSchema>;
        },
        delete: (
          collectionId: string,
          recordId: string,
          options?: RequestInit,
        ): Promise<void> => {
          return callAPI({
            method: 'delete',
            endpoint:
              '/apps/{app_id}/collections/{collection_id}/records/{record_id}',
            params: {collection_id: collectionId, record_id: recordId},
            options,
          }) as Promise<void>;
        },
        status: (
          collectionId: string,
          recordId: string,
          options?: RequestInit,
        ): Promise<RecordStatusSchema> => {
          return callAPI({
            method: 'get',
            endpoint:
              '/apps/{app_id}/collections/{collection_id}/records/{record_id}/status',
            params: {collection_id: collectionId, record_id: recordId},
            options,
          }) as Promise<RecordStatusSchema>;
        },
        run: (
          collectionId: string,
          recordId: string,
          body: RunRecordSchema,
          options?: RequestInit,
        ): Promise<RecordSchema> => {
          return callAPI({
            method: 'post',
            endpoint:
              '/apps/{app_id}/collections/{collection_id}/records/{record_id}/run',
            params: {collection_id: collectionId, record_id: recordId},
            body,
            options,
          }) as Promise<RecordSchema>;
        },
        cancel: (
          collectionId: string,
          recordId: string,
          options?: RequestInit,
        ): Promise<RecordSchema> => {
          return callAPI({
            method: 'post',
            endpoint:
              '/apps/{app_id}/collections/{collection_id}/records/{record_id}/cancel',
            params: {collection_id: collectionId, record_id: recordId},
            options,
          }) as Promise<RecordSchema>;
        },
        updateRules: (
          collectionId: string,
          recordId: string,
          options?: RequestInit,
        ): Promise<RecordSchema> => {
          return callAPI({
            method: 'post',
            endpoint:
              '/apps/{app_id}/collections/{collection_id}/records/{record_id}/update-rules',
            params: {collection_id: collectionId, record_id: recordId},
            options,
          }) as Promise<RecordSchema>;
        },
        reset: (
          collectionId: string,
          recordId: string,
          options?: RequestInit,
        ): Promise<RecordSchema> => {
          return callAPI({
            method: 'post',
            endpoint:
              '/apps/{app_id}/collections/{collection_id}/records/{record_id}/reset',
            params: {collection_id: collectionId, record_id: recordId},
            options,
          }) as Promise<RecordSchema>;
        },
        download: (
          collectionId: string,
          recordId: string,
          options?: RequestInit,
        ): Promise<void> => {
          return callAPI({
            method: 'get',
            endpoint:
              '/apps/{app_id}/collections/{collection_id}/records/{record_id}/download',
            params: {collection_id: collectionId, record_id: recordId},
            options,
          }) as Promise<void>;
        },
      },
    },
    webhooks: (webhookId: string, options?: RequestInit): Promise<void> => {
      return callAPI({
        method: 'delete',
        endpoint: '/apps/{app_id}/webhooks/{webhook_id}',
        params: {webhook_id: webhookId},
        options,
      }) as Promise<void>;
    },
  },
});
