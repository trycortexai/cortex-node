// This file is auto-generated. Do not edit.

export type APIMethodRequest = {
  method: string;
  endpoint: string;
  params?: Record<string, unknown>;
  body?: unknown;
  options?: RequestInit & {
    query?: Record<string, unknown>;
    onStream?: (partialResult: any, event: unknown, data: unknown) => void;
  };
};
export type APIMethods = ReturnType<typeof createAPI>;
export const createAPI = (
  callAPI: (name: string, request: APIMethodRequest) => unknown,
) => ({
  apps: {
    files: {
      list: (
        options?: RequestInit & {
          query?: Paths['/apps/{app_id}/files']['get']['parameters']['query'];
        },
      ): Promise<{
        data: AppFileSchema[];
        pagination: {
          page: number;
          take: number;
          count: number;
        };
      }> => {
        return callAPI('list', {
          method: 'get',
          endpoint: '/apps/{app_id}/files',
          options,
        }) as Promise<{
          data: AppFileSchema[];
          pagination: {
            page: number;
            take: number;
            count: number;
          };
        }>;
      },
      create: (
        body: CreateAppFileSchema,
        options?: RequestInit,
      ): Promise<AppFileSchema> => {
        return callAPI('create', {
          method: 'post',
          endpoint: '/apps/{app_id}/files',
          body,
          options,
        }) as Promise<AppFileSchema>;
      },
      retrieve: (
        fileId: string,
        options?: RequestInit,
      ): Promise<AppFileSchema> => {
        return callAPI('retrieve', {
          method: 'get',
          endpoint: '/apps/{app_id}/files/{file_id}',
          params: {file_id: fileId},
          options,
        }) as Promise<AppFileSchema>;
      },
      delete: (fileId: string, options?: RequestInit): Promise<void> => {
        return callAPI('delete', {
          method: 'delete',
          endpoint: '/apps/{app_id}/files/{file_id}',
          params: {file_id: fileId},
          options,
        }) as Promise<void>;
      },
      cancel: (
        fileId: string,
        options?: RequestInit,
      ): Promise<AppFileSchema> => {
        return callAPI('create', {
          method: 'post',
          endpoint: '/apps/{app_id}/files/{file_id}/cancel',
          params: {file_id: fileId},
          options,
        }) as Promise<AppFileSchema>;
      },
    },
    variables: (key: string, options?: RequestInit): Promise<void> => {
      return callAPI('delete', {
        method: 'delete',
        endpoint: '/apps/{app_id}/variables/{key}',
        params: {key: key},
        options,
      }) as Promise<void>;
    },
    runs: {
      step: {
        create: (
          body?: Omit<CreateRunStepSchema, 'stream'>,
          options?: RequestInit,
        ): Promise<RunStepSchema> => {
          return callAPI('create', {
            method: 'post',
            endpoint: '/apps/{app_id}/runs/step',
            body,
            options,
          }) as Promise<RunStepSchema>;
        },
        stream: (
          body?: Omit<CreateRunStepSchema, 'stream'>,
          options?: RequestInit & {
            onStream?: (
              partialResult: RunStepSchema,
              event: unknown,
              data: unknown,
            ) => void;
          },
        ): Promise<RunStepSchema> => {
          return callAPI('stream', {
            method: 'post',
            endpoint: '/apps/{app_id}/runs/step',
            body,
            options,
          }) as Promise<RunStepSchema>;
        },
        streamResponse: (
          body?: Omit<CreateRunStepSchema, 'stream'>,
          options?: RequestInit & {
            onStream?: (
              partialResult: RunStepSchema,
              event: unknown,
              data: unknown,
            ) => void;
          },
        ): Promise<Response> => {
          return callAPI('streamResponse', {
            method: 'post',
            endpoint: '/apps/{app_id}/runs/step',
            body,
            options,
          }) as Promise<Response>;
        },
      },
    },
    workflows: {
      discover: {
        list: (
          options?: RequestInit & {
            query?: Paths['/apps/{app_id}/workflows/discover']['get']['parameters']['query'];
          },
        ): Promise<{
          data: WorkflowSchema[];
          pagination: {
            page: number;
            take: number;
            count: number;
          };
        }> => {
          return callAPI('list', {
            method: 'get',
            endpoint: '/apps/{app_id}/workflows/discover',
            options,
          }) as Promise<{
            data: WorkflowSchema[];
            pagination: {
              page: number;
              take: number;
              count: number;
            };
          }>;
        },
        retrieve: (
          workflowId: string,
          options?: RequestInit,
        ): Promise<WorkflowSchema> => {
          return callAPI('retrieve', {
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
          return callAPI('retrieve', {
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
            body?: Omit<CreateDiscoveryRunSchema, 'stream'>,
            options?: RequestInit & {
              query?: Paths['/apps/{app_id}/workflows/discover/{workflow_id}/runs']['post']['parameters']['query'];
            },
          ): Promise<RunSchema> => {
            return callAPI('create', {
              method: 'post',
              endpoint: '/apps/{app_id}/workflows/discover/{workflow_id}/runs',
              params: {workflow_id: workflowId},
              body,
              options,
            }) as Promise<RunSchema>;
          },
          stream: (
            workflowId: string,
            body?: Omit<CreateDiscoveryRunSchema, 'stream'>,
            options?: RequestInit & {
              query?: Paths['/apps/{app_id}/workflows/discover/{workflow_id}/runs']['post']['parameters']['query'];
              onStream?: (
                partialResult: RunSchema,
                event: unknown,
                data: unknown,
              ) => void;
            },
          ): Promise<RunSchema> => {
            return callAPI('stream', {
              method: 'post',
              endpoint: '/apps/{app_id}/workflows/discover/{workflow_id}/runs',
              params: {workflow_id: workflowId},
              body,
              options,
            }) as Promise<RunSchema>;
          },
          streamResponse: (
            workflowId: string,
            body?: Omit<CreateDiscoveryRunSchema, 'stream'>,
            options?: RequestInit & {
              query?: Paths['/apps/{app_id}/workflows/discover/{workflow_id}/runs']['post']['parameters']['query'];
              onStream?: (
                partialResult: RunSchema,
                event: unknown,
                data: unknown,
              ) => void;
            },
          ): Promise<Response> => {
            return callAPI('streamResponse', {
              method: 'post',
              endpoint: '/apps/{app_id}/workflows/discover/{workflow_id}/runs',
              params: {workflow_id: workflowId},
              body,
              options,
            }) as Promise<Response>;
          },
          cancel: (
            workflowId: string,
            runId: string,
            options?: RequestInit & {
              query?: Paths['/apps/{app_id}/workflows/discover/{workflow_id}/runs/{run_id}/cancel']['post']['parameters']['query'];
            },
          ): Promise<RunSchema> => {
            return callAPI('create', {
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
          query?: Paths['/apps/{app_id}/workflows']['get']['parameters']['query'];
        },
      ): Promise<{
        data: WorkflowSchema[];
        pagination: {
          page: number;
          take: number;
          count: number;
        };
      }> => {
        return callAPI('list', {
          method: 'get',
          endpoint: '/apps/{app_id}/workflows',
          options,
        }) as Promise<{
          data: WorkflowSchema[];
          pagination: {
            page: number;
            take: number;
            count: number;
          };
        }>;
      },
      retrieve: (
        workflowId: string,
        options?: RequestInit,
      ): Promise<WorkflowSchema> => {
        return callAPI('retrieve', {
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
            query?: Paths['/apps/{app_id}/workflows/{workflow_id}/runs']['get']['parameters']['query'];
          },
        ): Promise<{
          data: RunSchema[];
          pagination: {
            page: number;
            take: number;
            count: number;
          };
        }> => {
          return callAPI('list', {
            method: 'get',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/runs',
            params: {workflow_id: workflowId},
            options,
          }) as Promise<{
            data: RunSchema[];
            pagination: {
              page: number;
              take: number;
              count: number;
            };
          }>;
        },
        create: (
          workflowId: string,
          body?: Omit<CreateRunSchema, 'stream'>,
          options?: RequestInit & {
            query?: Paths['/apps/{app_id}/workflows/{workflow_id}/runs']['post']['parameters']['query'];
          },
        ): Promise<RunSchema> => {
          return callAPI('create', {
            method: 'post',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/runs',
            params: {workflow_id: workflowId},
            body,
            options,
          }) as Promise<RunSchema>;
        },
        stream: (
          workflowId: string,
          body?: Omit<CreateRunSchema, 'stream'>,
          options?: RequestInit & {
            query?: Paths['/apps/{app_id}/workflows/{workflow_id}/runs']['post']['parameters']['query'];
            onStream?: (
              partialResult: RunSchema,
              event: unknown,
              data: unknown,
            ) => void;
          },
        ): Promise<RunSchema> => {
          return callAPI('stream', {
            method: 'post',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/runs',
            params: {workflow_id: workflowId},
            body,
            options,
          }) as Promise<RunSchema>;
        },
        streamResponse: (
          workflowId: string,
          body?: Omit<CreateRunSchema, 'stream'>,
          options?: RequestInit & {
            query?: Paths['/apps/{app_id}/workflows/{workflow_id}/runs']['post']['parameters']['query'];
            onStream?: (
              partialResult: RunSchema,
              event: unknown,
              data: unknown,
            ) => void;
          },
        ): Promise<Response> => {
          return callAPI('streamResponse', {
            method: 'post',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/runs',
            params: {workflow_id: workflowId},
            body,
            options,
          }) as Promise<Response>;
        },
        replay: {
          create: (
            workflowId: string,
            runId: string,
            body?: Omit<ReplayRunSchema, 'stream'>,
            options?: RequestInit & {
              query?: Paths['/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}/replay']['post']['parameters']['query'];
            },
          ): Promise<RunSchema> => {
            return callAPI('create', {
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
            body?: Omit<ReplayRunSchema, 'stream'>,
            options?: RequestInit & {
              query?: Paths['/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}/replay']['post']['parameters']['query'];
              onStream?: (
                partialResult: RunSchema,
                event: unknown,
                data: unknown,
              ) => void;
            },
          ): Promise<RunSchema> => {
            return callAPI('stream', {
              method: 'post',
              endpoint:
                '/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}/replay',
              params: {workflow_id: workflowId, run_id: runId},
              body,
              options,
            }) as Promise<RunSchema>;
          },
          streamResponse: (
            workflowId: string,
            runId: string,
            body?: Omit<ReplayRunSchema, 'stream'>,
            options?: RequestInit & {
              query?: Paths['/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}/replay']['post']['parameters']['query'];
              onStream?: (
                partialResult: RunSchema,
                event: unknown,
                data: unknown,
              ) => void;
            },
          ): Promise<Response> => {
            return callAPI('streamResponse', {
              method: 'post',
              endpoint:
                '/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}/replay',
              params: {workflow_id: workflowId, run_id: runId},
              body,
              options,
            }) as Promise<Response>;
          },
        },
        retrieve: (
          workflowId: string,
          runId: string,
          options?: RequestInit & {
            query?: Paths['/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}']['get']['parameters']['query'];
          },
        ): Promise<RunSchema> => {
          return callAPI('retrieve', {
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
            query?: Paths['/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}/cancel']['post']['parameters']['query'];
          },
        ): Promise<RunSchema> => {
          return callAPI('create', {
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
          return callAPI('delete', {
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
            query?: Paths['/apps/{app_id}/workflows/{workflow_id}/tests']['get']['parameters']['query'];
          },
        ): Promise<{
          data: WorkflowTestSchema[];
          pagination: {
            page: number;
            take: number;
            count: number;
          };
        }> => {
          return callAPI('list', {
            method: 'get',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/tests',
            params: {workflow_id: workflowId},
            options,
          }) as Promise<{
            data: WorkflowTestSchema[];
            pagination: {
              page: number;
              take: number;
              count: number;
            };
          }>;
        },
        create: (
          workflowId: string,
          body: CreateWorkflowTestSchema,
          options?: RequestInit & {
            query?: Paths['/apps/{app_id}/workflows/{workflow_id}/tests']['post']['parameters']['query'];
          },
        ): Promise<WorkflowTestSchema> => {
          return callAPI('create', {
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
          return callAPI('retrieve', {
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
            query?: Paths['/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}']['get']['parameters']['query'];
          },
        ): Promise<WorkflowTestSchema> => {
          return callAPI('retrieve', {
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
            query?: Paths['/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}']['patch']['parameters']['query'];
          },
        ): Promise<WorkflowTestSchema> => {
          return callAPI('update', {
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
          return callAPI('delete', {
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
            query?: Paths['/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}/runs']['post']['parameters']['query'];
          },
        ): Promise<WorkflowTestSchema> => {
          return callAPI('create', {
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
            query?: Paths['/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}/cancel']['post']['parameters']['query'];
          },
        ): Promise<WorkflowTestSchema> => {
          return callAPI('create', {
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
        return callAPI('retrieve', {
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
          query?: Paths['/apps/{app_id}/collections']['get']['parameters']['query'];
        },
      ): Promise<{
        data: CollectionSchema[];
        pagination: {
          page: number;
          take: number;
          count: number;
        };
      }> => {
        return callAPI('list', {
          method: 'get',
          endpoint: '/apps/{app_id}/collections',
          options,
        }) as Promise<{
          data: CollectionSchema[];
          pagination: {
            page: number;
            take: number;
            count: number;
          };
        }>;
      },
      create: (
        body: CreateCollectionSchema,
        options?: RequestInit,
      ): Promise<ExtendedCollectionSchema> => {
        return callAPI('create', {
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
        return callAPI('retrieve', {
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
        return callAPI('update', {
          method: 'patch',
          endpoint: '/apps/{app_id}/collections/{collection_id}',
          params: {collection_id: collectionId},
          body,
          options,
        }) as Promise<ExtendedCollectionSchema>;
      },
      delete: (collectionId: string, options?: RequestInit): Promise<void> => {
        return callAPI('delete', {
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
            query?: Paths['/apps/{app_id}/collections/{collection_id}/records']['get']['parameters']['query'];
          },
        ): Promise<{
          data: RecordSchema[];
          pagination: {
            page: number;
            take: number;
            count: number;
          };
        }> => {
          return callAPI('list', {
            method: 'get',
            endpoint: '/apps/{app_id}/collections/{collection_id}/records',
            params: {collection_id: collectionId},
            options,
          }) as Promise<{
            data: RecordSchema[];
            pagination: {
              page: number;
              take: number;
              count: number;
            };
          }>;
        },
        create: (
          collectionId: string,
          body: CreateRecordSchema,
          options?: RequestInit & {
            query?: Paths['/apps/{app_id}/collections/{collection_id}/records']['post']['parameters']['query'];
          },
        ): Promise<ExtendedRecordSchema> => {
          return callAPI('create', {
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
            query?: Paths['/apps/{app_id}/collections/{collection_id}/records/{record_id}']['get']['parameters']['query'];
          },
        ): Promise<ExtendedRecordSchema> => {
          return callAPI('retrieve', {
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
            query?: Paths['/apps/{app_id}/collections/{collection_id}/records/{record_id}']['patch']['parameters']['query'];
          },
        ): Promise<ExtendedRecordSchema> => {
          return callAPI('update', {
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
          return callAPI('delete', {
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
          return callAPI('retrieve', {
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
          return callAPI('create', {
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
          return callAPI('create', {
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
          return callAPI('create', {
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
          return callAPI('create', {
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
          return callAPI('retrieve', {
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
      return callAPI('delete', {
        method: 'delete',
        endpoint: '/apps/{app_id}/webhooks/{webhook_id}',
        params: {webhook_id: webhookId},
        options,
      }) as Promise<void>;
    },
  },
});

export type Paths = {
  '/apps/{app_id}/files': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Files
     * @description Retrieve a list of files for a specific app.
     */
    get: {
      parameters: {
        query?: {
          /** @description Page number */
          page?: number;
          /** @description Number of items to take */
          take?: number;
          /** @description Next page token (Only used on special endpoints) */
          next?: string;
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['AppFileSchema'][];
          };
        };
      };
    };
    put?: never;
    /**
     * Create File
     * @description Upload a new file to the app.
     */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
        };
        cookie?: never;
      };
      /** @description File data and options for upload */
      requestBody?: {
        content: {
          'application/json': Components['schemas']['CreateAppFileSchema'];
          'multipart/form-data': Components['schemas']['CreateAppFileSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['AppFileSchema'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/files/{file_id}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get File
     * @description Retrieve details of a specific file.
     */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the file */
          file_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['AppFileSchema'];
          };
        };
      };
    };
    put?: never;
    post?: never;
    /**
     * Delete File
     * @description Delete a specific file from the app.
     */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the file */
          file_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': unknown;
          };
        };
      };
    };
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/files/{file_id}/cancel': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Cancel File Upload
     * @description Cancel the upload processing of a specific file.
     */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the file */
          file_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['AppFileSchema'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/variables': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get App Variables
     * @description Fetch all variables for a specific app.
     */
    get: {
      parameters: {
        query?: {
          /** @description Page number */
          page?: number;
          /** @description Number of items to take */
          take?: number;
          /** @description Next page token (Only used on special endpoints) */
          next?: string;
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description An array of app variables. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['AppVariableSchema'][];
          };
        };
      };
    };
    put?: never;
    /**
     * Create App Variable
     * @description Create a variable for a specific app.
     */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
        };
        cookie?: never;
      };
      /** @description The new variable information. */
      requestBody?: {
        content: {
          'application/json': Components['schemas']['CreateAppVariableSchema'];
          'multipart/form-data': Components['schemas']['CreateAppVariableSchema'];
        };
      };
      responses: {
        /** @description The created app variable. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['AppVariableSchema'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    /**
     * Update App Variables
     * @description Update variables for a specific app.
     */
    patch: {
      parameters: {
        query?: {
          /** @description Page number */
          page?: number;
          /** @description Number of items to take */
          take?: number;
          /** @description Next page token (Only used on special endpoints) */
          next?: string;
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
        };
        cookie?: never;
      };
      /** @description An array of app variables to update. */
      requestBody?: {
        content: {
          'application/json': Components['schemas']['AppVariableSchema'][];
          'multipart/form-data': Components['schemas']['AppVariableSchema'][];
        };
      };
      responses: {
        /** @description An array of updated app variables. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['AppVariableSchema'][];
          };
        };
      };
    };
    trace?: never;
  };
  '/apps/{app_id}/variables/{key}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    /**
     * Delete App Variable
     * @description Delete a variable for a specific app.
     */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The key of the variable to delete. */
          key: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description The deleted app variable. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': unknown;
          };
        };
      };
    };
    options?: never;
    head?: never;
    /**
     * Rename App Variable
     * @description Rename a variable for a specific app.
     */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The key of the variable to rename. */
          key: string;
        };
        cookie?: never;
      };
      /** @description The new variable information. */
      requestBody?: {
        content: {
          'application/json': Components['schemas']['UpdateAppVariableSchema'];
          'multipart/form-data': Components['schemas']['UpdateAppVariableSchema'];
        };
      };
      responses: {
        /** @description The updated app variables. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['AppVariableSchema'];
          };
        };
      };
    };
    trace?: never;
  };
  '/apps/{app_id}/runs/step': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Run a step without a run
     * @description Run a step without a run
     */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          app_id: string;
        };
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': Components['schemas']['CreateRunStepSchema'];
          'multipart/form-data': Components['schemas']['CreateRunStepSchema'];
        };
      };
      responses: {
        /** @description Step run output */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['RunStepSchema'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/workflows/discover': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Discover Workflows
     * @description Retrieve a list of discoverable workflows for a specific app.
     */
    get: {
      parameters: {
        query?: {
          search?: string;
          tags?: string[];
          /** @description Page number */
          page?: number;
          /** @description Number of items to take */
          take?: number;
          /** @description Next page token (Only used on special endpoints) */
          next?: string;
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WorkflowSchema'][];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/workflows/discover/{workflow_id}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Discoverable Workflow
     * @description Retrieve a specific discoverable workflow by its ID.
     */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WorkflowSchema'];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/workflows/discover/{workflow_id}/versions/{version_id_or_version_number}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Discoverable Workflow Version
     * @description Retrieve a specific version of a discoverable workflow by ID or version number.
     */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
          /** @description The ID or version number of the workflow version */
          version_id_or_version_number: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WorkflowVersionSchema'];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/workflows/discover/{workflow_id}/runs': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Run Discoverable Workflow
     * @description Run a specific workflow by its ID.
     */
    post: {
      parameters: {
        query?: {
          verbose?: Components['schemas']['IncludeRunPropsSchema'];
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
        };
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': Components['schemas']['CreateDiscoveryRunSchema'];
          'multipart/form-data': Components['schemas']['CreateDiscoveryRunSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['RunSchema'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/workflows/discover/{workflow_id}/runs/{run_id}/cancel': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Cancel a Discoverable Workflow Run
     * @description Cancel a workflow run that is currently running.
     */
    post: {
      parameters: {
        query?: {
          verbose?: Components['schemas']['IncludeRunPropsSchema'];
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
          /** @description ID of the run to cancel */
          run_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['RunSchema'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/workflows': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Workflows
     * @description Retrieve a list of workflows for a specific app.
     */
    get: {
      parameters: {
        query?: {
          search?: string;
          tags?: string[];
          /** @description Page number */
          page?: number;
          /** @description Number of items to take */
          take?: number;
          /** @description Next page token (Only used on special endpoints) */
          next?: string;
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WorkflowSchema'][];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/workflows/{workflow_id}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get a Workflow
     * @description Retrieve a specific workflow by its ID.
     */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WorkflowSchema'];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/workflows/{workflow_id}/runs': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Workflow Runs
     * @description Retrieve a list of runs for a specific workflow.
     */
    get: {
      parameters: {
        query?: {
          verbose?: Components['schemas']['IncludeRunPropsSchema'];
          origin?:
            | 'ALL'
            | 'WORKFLOW'
            | 'TRIGGER'
            | 'RECORD'
            | 'TEST'
            | 'ENDPOINT';
          status?:
            | 'ALL'
            | 'PENDING'
            | 'RUNNING'
            | 'CANCELLED'
            | 'COMPLETED'
            | 'SKIPPED'
            | 'FAILED';
          /** @description Page number */
          page?: number;
          /** @description Number of items to take */
          take?: number;
          /** @description Next page token (Only used on special endpoints) */
          next?: string;
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['RunSchema'][];
          };
        };
      };
    };
    put?: never;
    /**
     * Run a Workflow
     * @description Run a specific workflow by its ID.
     */
    post: {
      parameters: {
        query?: {
          verbose?: Components['schemas']['IncludeRunPropsSchema'];
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
        };
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': Components['schemas']['CreateRunSchema'];
          'multipart/form-data': Components['schemas']['CreateRunSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['RunSchema'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}/replay': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Replay a Workflow Run
     * @description Replay a specific workflow run.
     */
    post: {
      parameters: {
        query?: {
          verbose?: Components['schemas']['IncludeRunPropsSchema'];
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
          /** @description The ID of the workflow run. */
          run_id: string;
        };
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': Components['schemas']['ReplayRunSchema'];
          'multipart/form-data': Components['schemas']['ReplayRunSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['RunSchema'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get a Workflow Run
     * @description Retrieve details of a specific workflow run.
     */
    get: {
      parameters: {
        query?: {
          verbose?: Components['schemas']['IncludeRunPropsSchema'];
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
          /** @description The ID of the workflow run. */
          run_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['RunSchema'];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}/cancel': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Cancel a Workflow Run
     * @description Cancel a workflow run that is currently running.
     */
    post: {
      parameters: {
        query?: {
          verbose?: Components['schemas']['IncludeRunPropsSchema'];
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
          /** @description The ID of the workflow run. */
          run_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['RunSchema'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/workflows/{workflow_id}/tests/expectations': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Tests Expectations
     * @description Retrieve a list of workflow test expectations for a specific workflow.
     */
    get: {
      parameters: {
        query?: {
          search?: string;
          /** @description Page number */
          page?: number;
          /** @description Number of items to take */
          take?: number;
          /** @description Next page token (Only used on special endpoints) */
          next?: string;
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WorkflowExpectationSchema'][];
          };
        };
      };
    };
    put?: never;
    /**
     * Create a Test Expectation
     * @description Create a new workflow test expectation for a specific workflow.
     */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
        };
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': Components['schemas']['CreateWorkflowExpectationSchema'];
          'multipart/form-data': Components['schemas']['CreateWorkflowExpectationSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WorkflowExpectationSchema'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/workflows/{workflow_id}/tests/expectations/{expectation_id}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Test Expectation
     * @description Retrieve a specific workflow test expectation by its ID.
     */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
          /** @description The ID of the expectation */
          expectation_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WorkflowExpectationSchema'];
          };
        };
      };
    };
    put?: never;
    post?: never;
    /**
     * Delete Test Expectation
     * @description Delete a specific workflow test expectation by its ID.
     */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
          /** @description The ID of the expectation */
          expectation_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': unknown;
          };
        };
      };
    };
    options?: never;
    head?: never;
    /**
     * Update Test Expectation
     * @description Update a specific workflow test expectation by its ID.
     */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
          /** @description The ID of the expectation */
          expectation_id: string;
        };
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': Components['schemas']['UpdateWorkflowExpectationSchema'];
          'multipart/form-data': Components['schemas']['UpdateWorkflowExpectationSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WorkflowExpectationSchema'];
          };
        };
      };
    };
    trace?: never;
  };
  '/apps/{app_id}/workflows/{workflow_id}/tests': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Tests
     * @description Retrieve a list of workflow tests for a specific workflow.
     */
    get: {
      parameters: {
        query?: {
          verbose?: Components['schemas']['IncludeTestPropsSchema'];
          search?: string;
          status?:
            | 'ALL'
            | 'DRAFT'
            | 'CANCELLED'
            | 'RUNNING'
            | 'FAILED'
            | 'PASSED';
          /** @description Page number */
          page?: number;
          /** @description Number of items to take */
          take?: number;
          /** @description Next page token (Only used on special endpoints) */
          next?: string;
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WorkflowTestSchema'][];
          };
        };
      };
    };
    put?: never;
    /**
     * Create a Test
     * @description Create a new workflow test for a specific workflow.
     */
    post: {
      parameters: {
        query?: {
          verbose?: Components['schemas']['IncludeTestPropsSchema'];
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
        };
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': Components['schemas']['CreateWorkflowTestSchema'];
          'multipart/form-data': Components['schemas']['CreateWorkflowTestSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WorkflowTestSchema'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/workflows/{workflow_id}/tests/stats': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Tests Stats
     * @description Retrieve statistics of workflow tests.
     */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WorkflowTestStatsSchema'] &
              unknown;
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Test
     * @description Retrieve a specific workflow test by its ID.
     */
    get: {
      parameters: {
        query?: {
          verbose?: Components['schemas']['IncludeTestPropsSchema'];
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
          /** @description The ID of the test */
          test_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WorkflowTestSchema'];
          };
        };
      };
    };
    put?: never;
    post?: never;
    /**
     * Delete Test
     * @description Delete a specific workflow test by its ID.
     */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
          /** @description The ID of the test */
          test_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': unknown;
          };
        };
      };
    };
    options?: never;
    head?: never;
    /**
     * Update Test
     * @description Update a specific workflow test by its ID.
     */
    patch: {
      parameters: {
        query?: {
          verbose?: Components['schemas']['IncludeTestPropsSchema'];
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
          /** @description The ID of the test */
          test_id: string;
        };
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': Components['schemas']['UpdateWorkflowTestSchema'];
          'multipart/form-data': Components['schemas']['UpdateWorkflowTestSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WorkflowTestSchema'];
          };
        };
      };
    };
    trace?: never;
  };
  '/apps/{app_id}/workflows/{workflow_id}/tests/runs': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Run Tests
     * @description Run all workflow tests for a specific workflow.
     */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
        };
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': Components['schemas']['RunWorkflowTestsSchema'];
          'multipart/form-data': Components['schemas']['RunWorkflowTestsSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': unknown;
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/workflows/{workflow_id}/tests/cancel': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Cancel Tests
     * @description Cancel all running workflow tests for a specific workflow.
     */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': unknown;
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}/cancel': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Cancel Test
     * @description Cancel a running workflow test by its ID.
     */
    post: {
      parameters: {
        query?: {
          verbose?: Components['schemas']['IncludeTestPropsSchema'];
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
          /** @description The ID of the test */
          test_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WorkflowTestSchema'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}/runs': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Run Test
     * @description Run a specific workflow test by its ID.
     */
    post: {
      parameters: {
        query?: {
          verbose?: Components['schemas']['IncludeTestPropsSchema'];
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
          /** @description The ID of the test */
          test_id: string;
        };
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': Components['schemas']['RunWorkflowTestSchema'];
          'multipart/form-data': Components['schemas']['RunWorkflowTestSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WorkflowTestSchema'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/workflows/{workflow_id}/versions': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Workflow Versions
     * @description Retrieve a list of workflow versions for a specific workflow.
     */
    get: {
      parameters: {
        query?: {
          /** @description Page number */
          page?: number;
          /** @description Number of items to take */
          take?: number;
          /** @description Next page token (Only used on special endpoints) */
          next?: string;
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description An array of workflow versions. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WorkflowVersionSchema'][];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/workflows/{workflow_id}/versions/{version_id_or_version_number}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get a Workflow Version
     * @description Retrieve a specific workflow version by ID or version number.
     */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the workflow */
          workflow_id: string;
          /** @description The ID or version number of the workflow version */
          version_id_or_version_number: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description The requested workflow version. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WorkflowVersionSchema'];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/collections': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Collections
     * @description Get a list of all collections of your app.
     */
    get: {
      parameters: {
        query?: {
          search?: string;
          tags?: string[];
          /** @description Page number */
          page?: number;
          /** @description Number of items to take */
          take?: number;
          /** @description Next page token (Only used on special endpoints) */
          next?: string;
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description You'll receive an array of collections. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['CollectionSchema'][];
          };
        };
      };
    };
    put?: never;
    /**
     * Create a Collection
     * @description Create a new collection for your app.
     */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
        };
        cookie?: never;
      };
      /** @description Provide the necessary info to create the collection. */
      requestBody?: {
        content: {
          'application/json': Components['schemas']['CreateCollectionSchema'];
          'multipart/form-data': Components['schemas']['CreateCollectionSchema'];
        };
      };
      responses: {
        /** @description You'll receive the newly created collection details. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['ExtendedCollectionSchema'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/collections/{collection_id}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get a Collection
     * @description Fetch detailed information about a specific collection.
     */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the collection */
          collection_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description You'll get the full details of the requested collection. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['ExtendedCollectionSchema'];
          };
        };
      };
    };
    put?: never;
    post?: never;
    /**
     * Delete a Collection
     * @description Remove a collection from your app.
     */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the collection */
          collection_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns null if the deletion was successful. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': unknown;
          };
        };
      };
    };
    options?: never;
    head?: never;
    /**
     * Update a Collection
     * @description Modify an existing collection.
     */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the collection */
          collection_id: string;
        };
        cookie?: never;
      };
      /** @description Specify the changes you want to make to the collection. */
      requestBody?: {
        content: {
          'application/json': Components['schemas']['UpdateCollectionSchema'];
          'multipart/form-data': Components['schemas']['UpdateCollectionSchema'];
        };
      };
      responses: {
        /** @description You'll receive the updated collection details. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['ExtendedCollectionSchema'];
          };
        };
      };
    };
    trace?: never;
  };
  '/apps/{app_id}/collections/{collection_id}/records': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Records
     * @description Retrieve a list of records of a specific collection.
     */
    get: {
      parameters: {
        query?: {
          verbose?: Components['schemas']['IncludeRecordPropsSchema'];
          search?: string;
          status?:
            | 'ALL'
            | 'DRAFT'
            | 'QUEUED'
            | 'RUNNING'
            | 'CANCELLED'
            | 'COMPLETED'
            | 'FAILED';
          tags?: string[];
          /** @description Page number */
          page?: number;
          /** @description Number of items to take */
          take?: number;
          /** @description Next page token (Only used on special endpoints) */
          next?: string;
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the collection */
          collection_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['RecordSchema'][];
          };
        };
      };
    };
    put?: never;
    /**
     * Create a Record
     * @description Create a new record in the specified collection.
     */
    post: {
      parameters: {
        query?: {
          verbose?: Components['schemas']['IncludeRecordPropsSchema'];
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the collection */
          collection_id: string;
        };
        cookie?: never;
      };
      /** @description Provide the necessary info to create the record. */
      requestBody?: {
        content: {
          'application/json': Components['schemas']['CreateRecordSchema'];
          'multipart/form-data': Components['schemas']['CreateRecordSchema'];
        };
      };
      responses: {
        /** @description You will receive the newly created record details. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['ExtendedRecordSchema'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/collections/{collection_id}/records/{record_id}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get a Record
     * @description Retrieve a specific record by its ID.
     */
    get: {
      parameters: {
        query?: {
          verbose?: Components['schemas']['IncludeRecordPropsSchema'];
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the collection */
          collection_id: string;
          /** @description The ID of the record */
          record_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['ExtendedRecordSchema'];
          };
        };
      };
    };
    put?: never;
    post?: never;
    /**
     * Delete a Record
     * @description Delete a specific record by its ID.
     */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the collection */
          collection_id: string;
          /** @description The ID of the record */
          record_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': unknown;
          };
        };
      };
    };
    options?: never;
    head?: never;
    /**
     * Update a Record
     * @description Update an existing record by its ID.
     */
    patch: {
      parameters: {
        query?: {
          verbose?: Components['schemas']['IncludeRecordPropsSchema'];
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the collection */
          collection_id: string;
          /** @description The ID of the record */
          record_id: string;
        };
        cookie?: never;
      };
      /** @description Provide the changes you want to make to the record. */
      requestBody?: {
        content: {
          'application/json': Components['schemas']['UpdateRecordSchema'];
          'multipart/form-data': Components['schemas']['UpdateRecordSchema'];
        };
      };
      responses: {
        /** @description You will receive the updated record details. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['ExtendedRecordSchema'];
          };
        };
      };
    };
    trace?: never;
  };
  '/apps/{app_id}/collections/{collection_id}/records/{record_id}/status': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Record Status
     * @description Retrieve the current status of a specific record.
     */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the collection */
          collection_id: string;
          /** @description The ID of the record */
          record_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['RecordStatusSchema'];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/collections/{collection_id}/records/{record_id}/run': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Run a Record
     * @description Execute the rules associated with a specific record and get the report.
     */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the collection */
          collection_id: string;
          /** @description The ID of the record */
          record_id: string;
        };
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': Components['schemas']['RunRecordSchema'];
          'multipart/form-data': Components['schemas']['RunRecordSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['RecordSchema'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/collections/{collection_id}/records/{record_id}/cancel': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Cancel a Record Run
     * @description Cancel the ongoing execution of a record.
     */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the collection */
          collection_id: string;
          /** @description The ID of the record */
          record_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['RecordSchema'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/collections/{collection_id}/records/{record_id}/update-rules': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Update Record Rules
     * @description Update the rules associated with a specific record.
     */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the collection */
          collection_id: string;
          /** @description The ID of the record */
          record_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['RecordSchema'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/collections/{collection_id}/records/{record_id}/reset': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Reset Record
     * @description Reset the record status and rules.
     */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the collection */
          collection_id: string;
          /** @description The ID of the record */
          record_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['RecordSchema'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/collections/{collection_id}/records/{record_id}/download': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Download Record Report
     * @description Generate and download a PDF report of a specific record.
     */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the collection */
          collection_id: string;
          /** @description The ID of the record */
          record_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': unknown;
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/webhooks': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Webhooks
     * @description Retrieve a list of webhooks for a specific app.
     */
    get: {
      parameters: {
        query?: {
          /** @description Page number */
          page?: number;
          /** @description Number of items to take */
          take?: number;
          /** @description Next page token (Only used on special endpoints) */
          next?: string;
        };
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description An array of webhooks. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WebhookSchema'][];
          };
        };
      };
    };
    put?: never;
    /**
     * Create a Webhook
     * @description Create a new webhook for a specific app.
     */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
        };
        cookie?: never;
      };
      /** @description The webhook to create. */
      requestBody?: {
        content: {
          'application/json': Components['schemas']['CreateWebhookSchema'];
          'multipart/form-data': Components['schemas']['CreateWebhookSchema'];
        };
      };
      responses: {
        /** @description The created webhook. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WebhookSchema'];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/apps/{app_id}/webhooks/{webhook_id}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    /**
     * Delete a Webhook
     * @description Delete an existing webhook for a specific app.
     */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the webhook */
          webhook_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': unknown;
          };
        };
      };
    };
    options?: never;
    head?: never;
    /**
     * Update Webhook
     * @description Update an existing webhook for a specific app.
     */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the webhook */
          webhook_id: string;
        };
        cookie?: never;
      };
      /** @description The new webhook data. */
      requestBody?: {
        content: {
          'application/json': Components['schemas']['UpdateWebhookSchema'];
          'multipart/form-data': Components['schemas']['UpdateWebhookSchema'];
        };
      };
      responses: {
        /** @description The updated webhook. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': Components['schemas']['WebhookSchema'];
          };
        };
      };
    };
    trace?: never;
  };
};
export type webhooks = Record<string, never>;
export type Components = {
  schemas: {
    QueryWorkflowsDiscoverSchema: {
      search?: string;
      tags?: string[];
    };
    IncludeRunPropsSchema: 'all'[];
    IncludeRunSchema: {
      verbose?: Components['schemas']['IncludeRunPropsSchema'];
    };
    QueryWorkflowsSchema: {
      search?: string;
      tags?: string[];
    };
    QueryRunSchema: Components['schemas']['IncludeRunSchema'] & {
      /** @enum {string} */
      origin?: 'ALL' | 'WORKFLOW' | 'TRIGGER' | 'RECORD' | 'TEST' | 'ENDPOINT';
      /** @enum {string} */
      status?:
        | 'ALL'
        | 'PENDING'
        | 'RUNNING'
        | 'CANCELLED'
        | 'COMPLETED'
        | 'SKIPPED'
        | 'FAILED';
    };
    QueryWorkflowExpectationsSchema: {
      search?: string;
    };
    IncludeTestPropsSchema: 'all'[];
    IncludeTestSchema: {
      verbose?: Components['schemas']['IncludeTestPropsSchema'];
    };
    QueryWorkflowTestsSchema: Components['schemas']['IncludeTestSchema'] & {
      search?: string;
      /** @enum {string} */
      status?: 'ALL' | 'DRAFT' | 'CANCELLED' | 'RUNNING' | 'FAILED' | 'PASSED';
    };
    QueryCollectionsSchema: {
      /** @description What you want to search for in collections */
      search?: string;
      /**
       * @description Tags to filter collections by (you can use up to 20)
       * @example [
       *       "tag_xxx",
       *       "tag_yyy"
       *     ]
       */
      tags?: string[];
    };
    /**
     * @description Properties to include in the record response
     * @example [
     *       "all"
     *     ]
     */
    IncludeRecordPropsSchema: 'all'[];
    /**
     * @description Options for including additional record properties
     * @example {
     *       "verbose": [
     *         "all"
     *       ]
     *     }
     */
    IncludeRecordSchema: {
      verbose?: Components['schemas']['IncludeRecordPropsSchema'];
    };
    /**
     * @description Options for including additional record properties
     * @example {
     *       "verbose": [
     *         "all"
     *       ]
     *     }
     */
    QueryRecordsSchema: Components['schemas']['IncludeRecordSchema'] & {
      search?: string;
      /** @enum {string} */
      status?:
        | 'ALL'
        | 'DRAFT'
        | 'QUEUED'
        | 'RUNNING'
        | 'CANCELLED'
        | 'COMPLETED'
        | 'FAILED';
      tags?: string[];
    };
    /** @description Detailed information about the content of a document */
    DocumentContentSchema: {
      /** @description Unique identifier for the content */
      id: number;
      /**
       * @description Type of the content element
       * @enum {string}
       */
      type:
        | 'TITLE'
        | 'TEXT'
        | 'UNTEXT'
        | 'NARRATIVETEXT'
        | 'BULLETEDTEXT'
        | 'ABSTRACT'
        | 'THREADING'
        | 'FORM'
        | 'FIELD-NAME'
        | 'VALUE'
        | 'LINK'
        | 'COMPOSITEELEMENT'
        | 'IMAGE'
        | 'PICTURE'
        | 'FIGURECAPTION'
        | 'FIGURE'
        | 'CAPTION'
        | 'LIST'
        | 'LISTITEM'
        | 'LIST-ITEM'
        | 'CHECKED'
        | 'UNCHECKED'
        | 'ADDRESS'
        | 'EMAILADDRESS'
        | 'PAGEBREAK'
        | 'FORMULA'
        | 'TABLE'
        | 'HEADER'
        | 'HEADLINE'
        | 'SUBHEADLINE'
        | 'PAGE-HEADER'
        | 'SECTION-HEADER'
        | 'FOOTER'
        | 'FOOTNOTE'
        | 'PAGE-FOOTER';
      /** @description Content text */
      content: string;
      /** @description Content text in HTML format */
      content_as_html?: string;
      /** @description Page number where the content is located in the document */
      page: number;
      /** @description Parent content identifier */
      parent?: number;
    };
    /** @description Detailed information about an image in a document */
    DocumentImageSchema: {
      /** @description Unique identifier for the image */
      id: string;
      /** @description File identifier associated with the image */
      file_id: string;
      /** @description URL of the image */
      image_url: string;
      /** @description Type of the image */
      type: string;
      /** @description Page number where the image is located in the document */
      page: number;
      /** @description Height of the image */
      height: number;
      /** @description Width of the image */
      width: number;
    };
    /** @description Document data associated with the file */
    DocumentSchema: {
      /** @description Name of the document file */
      filename: string;
      /** @description Type of the document file */
      filetype: string;
      /** @description Array of document contents (only available if extract_contents is true) */
      contents: Components['schemas']['DocumentContentSchema'][];
      /** @description Array of document images (only available if extract_images is true) */
      images: Components['schemas']['DocumentImageSchema'][];
      /** @description Extracted pages from the document (only available if extract_pages is true) */
      extracted_pages?: string;
      /** @description Time taken to process the document */
      time?: number;
    };
    /** @description Detailed information about a file */
    AppFileSchema: {
      /** @description Unique identifier for the file */
      id: string;
      /** @description File identifier used in the storage system */
      file_id: string;
      /**
       * @description Name of the file
       * @example document.pdf
       */
      file_filename: string;
      /**
       * @description Size of the file in bytes
       * @example 1024
       */
      file_size: number;
      /**
       * @description MIME type of the file
       * @example application/pdf
       */
      file_mimetype: string;
      /** @description URL to access the file */
      file_url: string;
      /**
       * @description Format of the file
       * @example DOCUMENT
       * @enum {string|null}
       */
      file_format: 'DOCUMENT' | null;
      /**
       * @description Current status of the file
       * @example PROCESSED
       * @enum {string}
       */
      file_status?: 'PROCESSING' | 'PROCESSED' | 'FAILED';
      /** @description Status message providing additional information about the file status */
      file_status_message?: string;
      document?: Components['schemas']['DocumentSchema'];
      /** @description Flag indicating whether to extract contents from the document */
      document_extract_contents: boolean;
      /** @description Flag indicating whether to extract images from the document */
      document_extract_images: boolean;
      /** @description Flag indicating whether to extract pages from the document */
      document_extract_pages: boolean;
      /**
       * @description Array of page numbers to extract from the document
       * @example [
       *       1,
       *       2,
       *       3
       *     ]
       */
      document_pages?: number[];
      /** @description Progress of the document extraction process */
      document_progress?: number;
      /**
       * Format: date
       * @description Timestamp when the file was created
       */
      created_at: string | null;
    };
    /** @description Data payload for creating a file */
    FileDataSchema: {
      /**
       * @description URL, Raw or Base64 encoded file data.
       * @example SGVsbG8sIHdvcmxkIQ==
       */
      data: string;
      /**
       * @description Mime type of the file, if not provided it will be inferred.
       * @example application/pdf
       */
      type?: string;
      /**
       * @description Name of the file.
       * @example document.pdf
       */
      name?: string;
      /**
       * @description Encoding of the file data when it's a direct input, by default base64 is expected.
       * @example base64
       * @enum {string}
       */
      encoding?: 'base64' | 'raw';
    };
    CreateAppFileSchema: {
      /** @description File to be uploaded. It can be a file object, a base64 encoded string, or a file data object containing base64 data, name, and type. */
      file?:
        | (File | Blob | string)
        | Components['schemas']['FileDataSchema']
        | string;
      /**
       * @description URL of the file to be uploaded
       * @example https://example.com/files/document.pdf
       */
      file_url?: string;
      /** @description The allowed mime types for the file field (e.g. image/*, application/pdf) */
      allowed_types?: string[];
      /**
       * @description Flag indicating whether to extract contents from the document
       * @example true
       */
      document_extract_contents?: boolean;
      /**
       * @description Flag indicating whether to extract images from the document
       * @example false
       */
      document_extract_images?: boolean;
      /**
       * @description Flag indicating whether to extract pages from the document
       * @example true
       */
      document_extract_pages?: boolean;
      /**
       * @description Array of page numbers to extract from the document
       * @example [
       *       1,
       *       2,
       *       3
       *     ]
       */
      document_pages?: number[];
      /**
       * @description Maximum number of pages to extract from the document
       * @example 10
       */
      document_max_pages?: number;
      /**
       * @description If the file should be public or private, by default is private and the file url is signed
       * @example PRIVATE
       * @enum {string}
       */
      visibility?: 'PUBLIC' | 'PRIVATE';
    };
    /** @description Detailed information about a variable in your app */
    AppVariableSchema: {
      /** @description The key of the app variable */
      key: string;
      /** @description The value of the app variable */
      value?: string;
      /**
       * @description Indicates if the variable is a secret
       * @example true
       */
      secret?: boolean;
    };
    /** @description Detailed information about a variable in your app */
    CreateAppVariableSchema: {
      /** @description The key of the app variable */
      key: string;
      /** @description The value of the app variable */
      value?: string;
      /**
       * @description Indicates if the variable is a secret
       * @example true
       */
      secret?: boolean;
    };
    /** @description Detailed information about a variable in your app */
    UpdateAppVariableSchema: {
      /** @description The key of the app variable */
      key?: string;
      /** @description The value of the app variable */
      value?: string;
      /**
       * @description Indicates if the variable is a secret
       * @example true
       */
      secret?: boolean;
    };
    CreditsCallUsageSchema: {
      id: string;
      total: number;
      calls?: Components['schemas']['CreditsUsageSchema'][];
    };
    CreditsUsageSchema: {
      total: number;
      calls?: Components['schemas']['CreditsCallUsageSchema'][];
    };
    /** @description Credits usage of the step run */
    CreditsRunUsageSchema: Components['schemas']['CreditsUsageSchema'] & {
      steps: {
        [key: string]: Components['schemas']['CreditsUsageSchema'];
      };
    };
    /** @description Result of the workflow step run */
    RunResultSchema: unknown;
    StepWorkflowOutputSchema: {
      /** @description ID of the workflow run that ran this step */
      run_id: string;
      /** @description ID of the app that this step belongs to */
      app_id: string;
      /** @description ID of the workflow */
      workflow_id: string;
      /** @description ID of the app that the workflow belongs to */
      workflow_app_id: string;
      /**
       * @description Status of the step run
       * @example COMPLETED
       * @enum {string}
       */
      status:
        | 'PENDING'
        | 'RUNNING'
        | 'CANCELLED'
        | 'COMPLETED'
        | 'SKIPPED'
        | 'FAILED';
      /**
       * @description Origin of the step run
       * @example RECORD
       * @enum {string}
       */
      origin: 'WORKFLOW' | 'TRIGGER' | 'RECORD' | 'TEST' | 'ENDPOINT';
      /** @description Error message if the step run failed */
      error: string | null;
      usage?: Components['schemas']['CreditsRunUsageSchema'];
      result?: Components['schemas']['RunResultSchema'];
      /** @description Output of the workflow step run */
      output?: unknown;
    };
    StepWorkflowRecordOutputSchema: {
      /** @description Name of the record that ran this run */
      name: string | null;
      /** @description ID of the record that ran this run */
      record_id: string;
      /** @description ID of the collection that the record belongs to */
      collection_id: string;
    };
    /** @description The output of the branch condition */
    StepBranchConditionOutputSchema: {
      [key: string]: unknown;
    };
    /** @description The output of the code step */
    StepCodeOutputSchema: unknown;
    ModelToolCallSchema: {
      /** @description Unique identifier for the tool call */
      id: string;
      /** @description The name of the tool to call */
      name: string;
      /** @description The input of the tool call */
      input?:
        | {
            [key: string]: unknown;
          }
        | string
        | unknown;
      disable_variables?: boolean;
    };
    ModelToolResultSchema: {
      /** @description Unique identifier for the tool call */
      id: string;
      /** @description The name of the tool called */
      name: string;
      /** @description The output of the tool call */
      output?:
        | {
            [key: string]: unknown;
          }
        | string
        | unknown;
    };
    /** @description The output of the model */
    StepModelOutputSchema: {
      /** @description The provider of the model */
      provider?: string;
      /** @description The model ran */
      model: string;
      /** @description The message output of the model, can be a string or an object based on the response_format. */
      message?:
        | {
            [key: string]: unknown;
          }
        | string
        | unknown;
      /** @description The tools called by the model */
      tool_calls?: Components['schemas']['ModelToolCallSchema'][];
      /** @description The results of the tools called by the model */
      tool_results?: Components['schemas']['ModelToolResultSchema'][];
      /** @description The refusal message if the model refused to run */
      refusal?: string;
      /** @description The index of the loop when running in a loop */
      index?: number;
      /** @description The index of the tool when part of a tool call */
      tool_index?: number;
      /** @description The raw output of the model provider */
      raw?: {
        [key: string]: unknown;
      };
    };
    /** @description The output of the HTTP request step */
    StepHttpRequestOutputSchema: {
      /** @description Whether the request was successful */
      ok: boolean;
      /** @description The status code of the response */
      status: number;
      /** @description The headers of the response */
      headers: {
        [key: string]: string;
      };
      /** @description The body of the response */
      body?: unknown;
      /** @description Error message if the request failed */
      error?: string;
    };
    /** @description The output of the browser step */
    StepBrowserOutputSchema: {
      /** @description Whether the request was successful */
      ok: boolean;
      /** @description The status code of the response */
      status: number;
      /** @description The headers of the response */
      headers: {
        [key: string]: string;
      };
      /** @description The body of the response */
      body?: unknown;
    };
    StepServiceOutputSchema: unknown;
    StepOutputSchema:
      | Components['schemas']['StepWorkflowOutputSchema']
      | Components['schemas']['StepWorkflowRecordOutputSchema']
      | Components['schemas']['StepBranchConditionOutputSchema']
      | Components['schemas']['StepCodeOutputSchema']
      | Components['schemas']['StepModelOutputSchema']
      | Components['schemas']['StepHttpRequestOutputSchema']
      | Components['schemas']['StepBrowserOutputSchema']
      | Components['schemas']['StepServiceOutputSchema']
      | unknown;
    /** @description Step run output */
    RunStepSchema: {
      output?:
        | Components['schemas']['StepWorkflowOutputSchema']
        | Components['schemas']['StepWorkflowRecordOutputSchema']
        | Components['schemas']['StepBranchConditionOutputSchema']
        | Components['schemas']['StepCodeOutputSchema']
        | Components['schemas']['StepModelOutputSchema']
        | Components['schemas']['StepHttpRequestOutputSchema']
        | Components['schemas']['StepBrowserOutputSchema']
        | Components['schemas']['StepServiceOutputSchema']
        | Components['schemas']['StepOutputSchema'][]
        | unknown;
    };
    /** @description A unique key for the step */
    StepKeySchema: string;
    /** @description Auto configuration for the step */
    StepAutoConfigSchema: {
      /** @description Model provider name */
      provider?: string;
      /** @description Model name */
      model?: string;
      /** @description Model temperature */
      temperature?: number;
    };
    /** @description A step that displays as a note on the canvas */
    StepNoteSchema: {
      /**
       * @description The type of the step (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'note';
      key: Components['schemas']['StepKeySchema'];
      /** @description A condition to determine if the step should run */
      conditional?: string;
      /** @description A loop condition for the step to repeat running until the condition is met */
      loop?: string;
      /** @description Whether to throw an error if the step fails */
      throw_on_error?: boolean;
      /** @description Whether the step is connected to the input */
      input_connected?: boolean;
      /** @description The step keys that this step connects to */
      destinations?: Components['schemas']['StepKeySchema'][];
      /** @description The position of the step on the canvas */
      position?: [number, number];
      /** @description The size of the step on the canvas */
      size?: [number, number];
      auto?: Components['schemas']['StepAutoConfigSchema'];
      /** @description The note content (markdown supported) */
      note: string;
    };
    /**
     * @description Controls how the label and input field are arranged (inline or stacked)
     * @enum {string}
     */
    InputFieldLayoutSchema: 'inline' | 'stacked';
    /**
     * @description Controls how the field container behaves in terms of width and positioning
     * @enum {string}
     */
    InputContainerSchema: 'grid' | 'full' | 'center';
    /** @description Display options for the input field */
    InputDisplaySchema: {
      field?: Components['schemas']['InputFieldLayoutSchema'];
      container?: Components['schemas']['InputContainerSchema'];
      /** @description Indicates whether the input field is hidden from the UI */
      hidden?: boolean;
    };
    /** @description Display options for the file field */
    FieldFileDisplaySchema: Components['schemas']['InputDisplaySchema'] & {
      /**
       * @description The render type of the file field
       * @enum {string}
       */
      render?: 'button' | 'dropzone';
    };
    /** @description The file type allows users to upload files */
    FieldFileSchema: {
      /**
       * @description The type of the input field (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'file';
      /** @description The name of the input field */
      name?: string;
      /** @description The description of the input field */
      desc?: string;
      /** @description Indicates whether the input field is optional */
      optional?: boolean;
      /** @description Indicates whether the input field can contain multiple values */
      array?: boolean;
      /** @description The placeholder of the input field */
      placeholder?: string;
      display?: Components['schemas']['FieldFileDisplaySchema'];
      /** @description The order of the input field relative to other fields in the form */
      order?: number;
      /** @description Whether to make the field a configuration field (only visible in the configuration tab) */
      config?: boolean;
      /** @description The link to the documentation for the input field */
      link?: string;
      /** @description Allowed mime types for the file field (e.g. image/*, application/pdf) */
      allowed_types?: string[];
      /** @description Flag to extract contents from the file */
      extract_contents?: boolean;
      /** @description Flag to extract images from the file */
      extract_images?: boolean;
    };
    /** @description The key of the input field */
    InputFieldKeySchema: string;
    /** @description Configuration for fields that fetch their data from a remote connection list action */
    InputListSchema: {
      /** @description The connection list action path used to show autocomplete options */
      path?: string;
      /** @description Fields that must be filled before the list can be fetched */
      requires?: Components['schemas']['InputFieldKeySchema'][];
    };
    /** @description The number field allows users to input numbers */
    FieldNumberSchema: {
      /**
       * @description The type of the input field (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'number';
      /** @description The name of the input field */
      name?: string;
      /** @description The description of the input field */
      desc?: string;
      /** @description Indicates whether the input field is optional */
      optional?: boolean;
      /** @description Indicates whether the input field can contain multiple values */
      array?: boolean;
      /** @description The placeholder of the input field */
      placeholder?: string;
      display?: Components['schemas']['InputDisplaySchema'];
      /** @description The order of the input field relative to other fields in the form */
      order?: number;
      /** @description Whether to make the field a configuration field (only visible in the configuration tab) */
      config?: boolean;
      /** @description The link to the documentation for the input field */
      link?: string;
      /** @description The default value of the number field */
      default?: number;
      list?: Components['schemas']['InputListSchema'];
    };
    /** @description Display options for the string field */
    FieldStringDisplaySchema: Components['schemas']['InputDisplaySchema'] & {
      /**
       * @description The render type of the string field, text is a single line input, textarea is a multi-line input
       * @enum {string}
       */
      render?: 'text' | 'textarea' | 'password';
    };
    /** @description The string field allows users to input text */
    FieldStringSchema: {
      /**
       * @description The type of the input field (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'string';
      /** @description The name of the input field */
      name?: string;
      /** @description The description of the input field */
      desc?: string;
      /** @description Indicates whether the input field is optional */
      optional?: boolean;
      /** @description Indicates whether the input field can contain multiple values */
      array?: boolean;
      /** @description The placeholder of the input field */
      placeholder?: string;
      display?: Components['schemas']['FieldStringDisplaySchema'];
      /** @description The order of the input field relative to other fields in the form */
      order?: number;
      /** @description Whether to make the field a configuration field (only visible in the configuration tab) */
      config?: boolean;
      /** @description The link to the documentation for the input field */
      link?: string;
      /** @description The default value of the string field */
      default?: string;
      list?: Components['schemas']['InputListSchema'];
    };
    /** @description The boolean field allows users mark a field as true or false */
    FieldBooleanSchema: {
      /**
       * @description The type of the input field (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'boolean';
      /** @description The name of the input field */
      name?: string;
      /** @description The description of the input field */
      desc?: string;
      /** @description Indicates whether the input field is optional */
      optional?: boolean;
      /** @description Indicates whether the input field can contain multiple values */
      array?: boolean;
      /** @description The placeholder of the input field */
      placeholder?: string;
      display?: Components['schemas']['InputDisplaySchema'];
      /** @description The order of the input field relative to other fields in the form */
      order?: number;
      /** @description Whether to make the field a configuration field (only visible in the configuration tab) */
      config?: boolean;
      /** @description The link to the documentation for the input field */
      link?: string;
    };
    /** @description The date field allows users to select a date */
    FieldDateSchema: {
      /**
       * @description The type of the input field (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'date';
      /** @description The name of the input field */
      name?: string;
      /** @description The description of the input field */
      desc?: string;
      /** @description Indicates whether the input field is optional */
      optional?: boolean;
      /** @description Indicates whether the input field can contain multiple values */
      array?: boolean;
      /** @description The placeholder of the input field */
      placeholder?: string;
      display?: Components['schemas']['InputDisplaySchema'];
      /** @description The order of the input field relative to other fields in the form */
      order?: number;
      /** @description Whether to make the field a configuration field (only visible in the configuration tab) */
      config?: boolean;
      /** @description The link to the documentation for the input field */
      link?: string;
    };
    /** @description Display options for the select field */
    FieldSelectDisplaySchema: Components['schemas']['InputDisplaySchema'] & {
      /**
       * @description The render type of the select field
       * @enum {string}
       */
      render?: 'dropdown' | 'inline';
    };
    /** @description The select option */
    FieldSelectOptionSchema: {
      /** @description Label of the select option */
      label: string;
      /** @description Value of the select option */
      value: string;
      /** @description Icon of the selected option */
      icon?: string;
    };
    /**
     * @description Indicates the mode of the selector, auto will allow AI to determine the value, manual will allow the user to manually input a value
     * @enum {string}
     */
    FieldSelectorModeSchema: 'all' | 'auto' | 'manual';
    /** @description The select field used to select from a list of options */
    FieldSelectSchema: {
      /**
       * @description The type of the input field (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'select';
      /** @description The name of the input field */
      name?: string;
      /** @description The description of the input field */
      desc?: string;
      /** @description Indicates whether the input field is optional */
      optional?: boolean;
      /** @description Indicates whether the input field can contain multiple values */
      array?: boolean;
      /** @description The placeholder of the input field */
      placeholder?: string;
      display?: Components['schemas']['FieldSelectDisplaySchema'];
      /** @description The order of the input field relative to other fields in the form */
      order?: number;
      /** @description Whether to make the field a configuration field (only visible in the configuration tab) */
      config?: boolean;
      /** @description The link to the documentation for the input field */
      link?: string;
      /** @description The default value of the select field */
      default?: string;
      /** @description The options for the select field (min 1) */
      options: [
        Components['schemas']['FieldSelectOptionSchema'],
        ...Components['schemas']['FieldSelectOptionSchema'][],
      ];
      list?: Components['schemas']['InputListSchema'];
      allowed_modes?: Components['schemas']['FieldSelectorModeSchema'][];
      /** @description Indicates if multiple selections are allowed */
      multiple?: boolean;
      /** @description Indicates whether additional unlisted options are allowed */
      additional_options?: boolean;
    };
    /** @description The content field used to display markdown content */
    FieldContentSchema: {
      /**
       * @description The type of the input field (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'content';
      /** @description The name of the input field */
      name?: string;
      /** @description The description of the input field */
      desc?: string;
      /** @description Indicates whether the input field is optional */
      optional?: boolean;
      /** @description Indicates whether the input field can contain multiple values */
      array?: boolean;
      /** @description The placeholder of the input field */
      placeholder?: string;
      display?: Components['schemas']['InputDisplaySchema'];
      /** @description The order of the input field relative to other fields in the form */
      order?: number;
      /** @description Whether to make the field a configuration field (only visible in the configuration tab) */
      config?: boolean;
      /** @description The link to the documentation for the input field */
      link?: string;
      /** @description Any markdown content */
      content?: string;
    };
    /**
     * @description Allowed connection types, if not provided all are allowed
     * @example SLACK
     * @enum {string}
     */
    FieldConnectionTypesSchema:
      | 'SCHEDULER'
      | 'TOOLS'
      | 'FILES'
      | 'OAUTH'
      | 'GOOGLE_SHEETS'
      | 'GMAIL'
      | 'SLACK'
      | 'ENCOMPASS'
      | 'PERSONA'
      | 'NOTION';
    /** @description The connection field used to select a connection */
    FieldConnectionSchema: {
      /**
       * @description The type of the input field (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'connection';
      /** @description The name of the input field */
      name?: string;
      /** @description The description of the input field */
      desc?: string;
      /** @description Indicates whether the input field is optional */
      optional?: boolean;
      /** @description Indicates whether the input field can contain multiple values */
      array?: boolean;
      /** @description The placeholder of the input field */
      placeholder?: string;
      display?: Components['schemas']['InputDisplaySchema'];
      /** @description The order of the input field relative to other fields in the form */
      order?: number;
      /** @description Whether to make the field a configuration field (only visible in the configuration tab) */
      config?: boolean;
      /** @description The link to the documentation for the input field */
      link?: string;
      allowed_types?: Components['schemas']['FieldConnectionTypesSchema'];
    };
    /** @description The object field that can contain other fields, including nested objects */
    FieldObjectSchema: {
      /**
       * @description The type of the input field (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'object';
      /** @description The name of the input field */
      name?: string;
      /** @description The description of the input field */
      desc?: string;
      /** @description Indicates whether the input field is optional */
      optional?: boolean;
      /** @description Indicates whether the input field can contain multiple values */
      array?: boolean;
      /** @description The placeholder of the input field */
      placeholder?: string;
      display?: Components['schemas']['InputDisplaySchema'];
      /** @description The order of the input field relative to other fields in the form */
      order?: number;
      /** @description Whether to make the field a configuration field (only visible in the configuration tab) */
      config?: boolean;
      /** @description The link to the documentation for the input field */
      link?: string;
      /** @description A record of fields that can be of various types including object fields */
      fields: {
        [key: string]: Components['schemas']['InputSchema'];
      };
      /** @description Indicates whether additional fields are allowed */
      additional_fields?: Components['schemas']['InputListSchema'] | boolean;
    };
    InputSchema:
      | Components['schemas']['FieldFileSchema']
      | Components['schemas']['FieldNumberSchema']
      | Components['schemas']['FieldStringSchema']
      | Components['schemas']['FieldBooleanSchema']
      | Components['schemas']['FieldDateSchema']
      | Components['schemas']['FieldSelectSchema']
      | Components['schemas']['FieldContentSchema']
      | Components['schemas']['FieldConnectionSchema']
      | Components['schemas']['FieldObjectSchema'];
    /** @description The definition of the input fields */
    InputDefinitionSchema: {
      [key: string]: Components['schemas']['InputSchema'];
    };
    /** @description A step that provides input values for the workflow */
    StepInputSchema: {
      /**
       * @description The type of the step (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'input';
      key: Components['schemas']['StepKeySchema'];
      /** @description A condition to determine if the step should run */
      conditional?: string;
      /** @description A loop condition for the step to repeat running until the condition is met */
      loop?: string;
      /** @description Whether to throw an error if the step fails */
      throw_on_error?: boolean;
      /** @description Whether the step is connected to the input */
      input_connected?: boolean;
      /** @description The step keys that this step connects to */
      destinations?: Components['schemas']['StepKeySchema'][];
      /** @description The position of the step on the canvas */
      position?: [number, number];
      /** @description The size of the step on the canvas */
      size?: [number, number];
      auto?: Components['schemas']['StepAutoConfigSchema'];
      input: Components['schemas']['InputDefinitionSchema'];
    };
    /** @description A condition to evaluate for branching */
    StepBranchConditionSchema: {
      /** @description The condition to evaluate */
      condition?: string;
      /** @description The step keys that this branch connects to */
      destinations: Components['schemas']['StepKeySchema'][];
      /** @description The order of the branch condition */
      order: number;
    };
    /** @description A step that allows branching based on one or more conditions */
    StepBranchSchema: {
      /**
       * @description The type of the step (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'branch';
      key: Components['schemas']['StepKeySchema'];
      /** @description A condition to determine if the step should run */
      conditional?: string;
      /** @description A loop condition for the step to repeat running until the condition is met */
      loop?: string;
      /** @description Whether to throw an error if the step fails */
      throw_on_error?: boolean;
      /** @description Whether the step is connected to the input */
      input_connected?: boolean;
      /** @description The step keys that this step connects to */
      destinations?: Components['schemas']['StepKeySchema'][];
      /** @description The position of the step on the canvas */
      position?: [number, number];
      /** @description The size of the step on the canvas */
      size?: [number, number];
      auto?: Components['schemas']['StepAutoConfigSchema'];
      conditions: {
        [key: string]: Components['schemas']['StepBranchConditionSchema'];
      };
      /** @description The step keys that the branch should connect to if none of the conditions are met */
      else?: Components['schemas']['StepKeySchema'][];
    };
    /** @description A step that executes a code block */
    StepCodeSchema: {
      /**
       * @description The type of the step (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'code';
      key: Components['schemas']['StepKeySchema'];
      /** @description A condition to determine if the step should run */
      conditional?: string;
      /** @description A loop condition for the step to repeat running until the condition is met */
      loop?: string;
      /** @description Whether to throw an error if the step fails */
      throw_on_error?: boolean;
      /** @description Whether the step is connected to the input */
      input_connected?: boolean;
      /** @description The step keys that this step connects to */
      destinations?: Components['schemas']['StepKeySchema'][];
      /** @description The position of the step on the canvas */
      position?: [number, number];
      /** @description The size of the step on the canvas */
      size?: [number, number];
      auto?: Components['schemas']['StepAutoConfigSchema'];
      /** @description The code to be executed in this step */
      code: string;
    };
    /** @description System message */
    ModelSystemMessageSchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      role: 'system';
      content: string;
      disable_variables?: boolean;
    };
    ModelMessageTextSchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      type: 'text';
      text: string;
      disable_variables?: boolean;
    };
    /** @description Assistant message */
    ModelAssistantMessageSchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      role: 'assistant';
      content: string | Components['schemas']['ModelMessageTextSchema'][];
      tools?: Components['schemas']['ModelToolCallSchema'][];
      disable_variables?: boolean;
    };
    ModelMessageFileSchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      type: 'file';
      url: string;
      disable_variables?: boolean;
    };
    ModelMessageImageSchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      type: 'image';
      url: string;
      disable_variables?: boolean;
    };
    /** @description User message */
    ModelUserMessageSchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      role: 'user';
      content:
        | string
        | (
            | Components['schemas']['ModelMessageTextSchema']
            | Components['schemas']['ModelMessageFileSchema']
            | Components['schemas']['ModelMessageImageSchema']
          )[];
      disable_variables?: boolean;
    };
    ModelMessageToolResultSchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      type: 'tool_result';
      /** @description Unique identifier for the tool call */
      id: string;
      /** @description The name of the tool called */
      name: string;
      /** @description The output of the tool call */
      output?:
        | {
            [key: string]: unknown;
          }
        | string
        | unknown;
      disable_variables?: boolean;
    };
    /** @description Tool message */
    ModelToolMessageSchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      role: 'tool';
      content: Components['schemas']['ModelMessageToolResultSchema'][];
      disable_variables?: boolean;
    };
    ModelMessageSchema:
      | Components['schemas']['ModelSystemMessageSchema']
      | Components['schemas']['ModelAssistantMessageSchema']
      | Components['schemas']['ModelUserMessageSchema']
      | Components['schemas']['ModelToolMessageSchema'];
    /** @description List of model messages */
    ModelMessagesListSchema: Components['schemas']['ModelMessageSchema'][];
    /**
     * @description Response format
     * @enum {string}
     */
    ModelResponseFormatSchema: 'text' | 'json';
    ModelToolSchema: {
      /** @description Name of the tool to called, can be a step key or an external name prefixed with `external:` */
      name: string;
      /** @description Description of the tool */
      description?: string;
      input?: Components['schemas']['InputDefinitionSchema'] & unknown;
    };
    /**
     * @description Controls which (if any) tool is called by the model. `none` means the model will not call any tool and instead generates a message. `auto` means the model can pick between generating a message or calling one or more tools. `required` means the model must call one or more tools.
     * @enum {string}
     */
    ModelToolsModeSchema: 'auto' | 'required' | 'none';
    /** @description Model features */
    ModelFeaturesSchema: {
      web_search?: Record<string, unknown>;
    };
    /** @description The model provider configuration */
    ModelProviderSchema: {
      /** @description Provider name */
      provider: string;
      /** @description Model name */
      model: string;
      messages: Components['schemas']['ModelMessagesListSchema'] | string;
      /** @description Model temperature */
      temperature?: number;
      response_format?: Components['schemas']['ModelResponseFormatSchema'];
      /** @description Maximum tokens to generate */
      max_tokens?: number;
      /** @description List of tools to call */
      tools?: (string | Components['schemas']['ModelToolSchema'])[];
      /** @description Whether to call tools in parallel */
      tools_parallel?: boolean;
      tools_mode?: Components['schemas']['ModelToolsModeSchema'];
      /** @description Maximum number of iterations for the model when using tools or reasoning */
      max_iterations?: number;
      features?: Components['schemas']['ModelFeaturesSchema'];
    };
    /** @description A step that configures and runs a machine learning model */
    StepModelSchema: {
      /**
       * @description The type of the step (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'model';
      key: Components['schemas']['StepKeySchema'];
      /** @description A condition to determine if the step should run */
      conditional?: string;
      /** @description A loop condition for the step to repeat running until the condition is met */
      loop?: string;
      /** @description Whether to throw an error if the step fails */
      throw_on_error?: boolean;
      /** @description Whether the step is connected to the input */
      input_connected?: boolean;
      /** @description The step keys that this step connects to */
      destinations?: Components['schemas']['StepKeySchema'][];
      /** @description The position of the step on the canvas */
      position?: [number, number];
      /** @description The size of the step on the canvas */
      size?: [number, number];
      auto?: Components['schemas']['StepAutoConfigSchema'];
      provider: Components['schemas']['ModelProviderSchema'];
    };
    /** @description A step that makes an HTTP request */
    StepHttpRequestSchema: {
      /**
       * @description The type of the step (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'http_request';
      key: Components['schemas']['StepKeySchema'];
      /** @description A condition to determine if the step should run */
      conditional?: string;
      /** @description A loop condition for the step to repeat running until the condition is met */
      loop?: string;
      /** @description Whether to throw an error if the step fails */
      throw_on_error?: boolean;
      /** @description Whether the step is connected to the input */
      input_connected?: boolean;
      /** @description The step keys that this step connects to */
      destinations?: Components['schemas']['StepKeySchema'][];
      /** @description The position of the step on the canvas */
      position?: [number, number];
      /** @description The size of the step on the canvas */
      size?: [number, number];
      auto?: Components['schemas']['StepAutoConfigSchema'];
      /** @description The URL for the HTTP request, e.g. https://example.com */
      url: string;
      /**
       * @description HTTP method
       * @enum {string}
       */
      method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
      /** @description Headers to include in the HTTP request in key-value pairs */
      headers?: {
        [key: string]: string;
      };
      /** @description The body string of the HTTP request (E.g. JSON string) */
      body?: string;
    };
    /** @description A step that interacts with a browser */
    StepBrowserSchema: {
      /**
       * @description The type of the step (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'browser';
      key: Components['schemas']['StepKeySchema'];
      /** @description A condition to determine if the step should run */
      conditional?: string;
      /** @description A loop condition for the step to repeat running until the condition is met */
      loop?: string;
      /** @description Whether to throw an error if the step fails */
      throw_on_error?: boolean;
      /** @description Whether the step is connected to the input */
      input_connected?: boolean;
      /** @description The step keys that this step connects to */
      destinations?: Components['schemas']['StepKeySchema'][];
      /** @description The position of the step on the canvas */
      position?: [number, number];
      /** @description The size of the step on the canvas */
      size?: [number, number];
      auto?: Components['schemas']['StepAutoConfigSchema'];
      /** @description The URL to be scraped, e.g. https://example.com */
      url: string;
      /** @description Whether to strip HTML from the page content */
      strip_html?: boolean;
      /** @description A CSS selector to wait for before proceeding */
      wait_for_selector?: string;
    };
    /** @description Input values for the workflow */
    WorkflowInputValuesSchema:
      | {
          [key: string]: unknown;
        }
      | string
      | unknown;
    /**
     * @description ID of the workflow version. Also you can use "latest", "draft" or "version number" to use a specific version
     * @example latest
     */
    WorkflowVersionIdSchema: ('draft' | 'latest') | string | number;
    StepWorkflowSchema: {
      /**
       * @description The type of the step (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'workflow';
      key: Components['schemas']['StepKeySchema'];
      /** @description A condition to determine if the step should run */
      conditional?: string;
      /** @description A loop condition for the step to repeat running until the condition is met */
      loop?: string;
      /** @description Whether to throw an error if the step fails */
      throw_on_error?: boolean;
      /** @description Whether the step is connected to the input */
      input_connected?: boolean;
      /** @description The step keys that this step connects to */
      destinations?: Components['schemas']['StepKeySchema'][];
      /** @description The position of the step on the canvas */
      position?: [number, number];
      /** @description The size of the step on the canvas */
      size?: [number, number];
      auto?: Components['schemas']['StepAutoConfigSchema'];
      input: Components['schemas']['WorkflowInputValuesSchema'];
      /** @description The key of the input step to run */
      step_key?: string | null;
      /** @description The ID of the associated workflow */
      workflow_id?: string;
      workflow_version_id?: Components['schemas']['WorkflowVersionIdSchema'];
    };
    /** @description The dynamic fields input definitions */
    DynamicFieldsInputDefinition: {
      path: string;
      definition: Components['schemas']['InputDefinitionSchema'];
    };
    /** @description The input for ON_SCHEDULE */
    SchedulerOnScheduleActionServiceInputSchema: {
      /**
       * @description The interval (seconds) or cron expression
       * @enum {string}
       */
      schedule?:
        | '60'
        | '300'
        | '900'
        | '1800'
        | '3600'
        | '86400'
        | '604800'
        | '2592000'
        | '0 0 * * 1'
        | '0 0 * * 2'
        | '0 0 * * 3'
        | '0 0 * * 4'
        | '0 0 * * 5'
        | '0 0 * * 6'
        | '0 0 * * 0'
        | '0 0 * * 1-5'
        | '0 0 * * 6,0';
      /** @description The timezone to use for the schedule */
      timezone?: string | null;
    };
    /** @description The ON_SCHEDULE service */
    SchedulerOnScheduleActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'SCHEDULER';
      /** @enum {string} */
      action: 'ON_SCHEDULE';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['SchedulerOnScheduleActionServiceInputSchema']
        | string;
    };
    /** @description The input for WEB_SEARCH */
    ToolsWebSearchActionServiceInputSchema: {
      /**
       * @description The search engine to be used for the search
       * @enum {string}
       */
      engine?:
        | 'google'
        | 'bing'
        | 'youtube'
        | 'apple_app_store'
        | 'google_play'
        | 'google_images'
        | 'google_videos'
        | 'google_maps'
        | 'google_trends'
        | 'google_news'
        | 'google_finance'
        | 'google_shopping'
        | 'google_hotels'
        | 'google_events'
        | 'google_scholar'
        | 'google_jobs'
        | 'ebay'
        | 'baidu'
        | 'yandex'
        | 'naver';
      /** @description The search query to be used for the search */
      query?: string | null;
    };
    /** @description The WEB_SEARCH service */
    ToolsWebSearchActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'TOOLS';
      /** @enum {string} */
      action: 'WEB_SEARCH';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['ToolsWebSearchActionServiceInputSchema']
        | string;
    };
    /** @description The input for DOWNLOAD_FILE */
    FilesDownloadFileActionServiceInputSchema: {
      /** @description File URL */
      file?: string | null;
      /**
       * @description Persistent storage will keep the file even after the run finishes. Temporary storage will delete the file after 24 hours
       * @enum {string}
       */
      storage?: 'PERSISTENT' | 'TEMPORARY';
    };
    /** @description The DOWNLOAD_FILE service */
    FilesDownloadFileActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'FILES';
      /** @enum {string} */
      action: 'DOWNLOAD_FILE';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['FilesDownloadFileActionServiceInputSchema']
        | string;
    };
    /** @description The input for UPLOAD_FILE */
    FilesUploadFileActionServiceInputSchema: {
      /** @description Use an URL to download a file or plain text to create a new file with its content */
      file?: string | null;
      /** @description A custom name for the file */
      name?: string | null;
      /**
       * @description MIME type of the file, by default it will be auto-detected
       * @enum {string}
       */
      mime_type?:
        | 'auto'
        | 'text/plain'
        | 'text/csv'
        | 'text/html'
        | 'application/json'
        | 'application/xml';
      /**
       * @description Persistent storage will keep the file even after the run finishes. Temporary storage will delete the file after 24 hours
       * @enum {string}
       */
      storage?: 'PERSISTENT' | 'TEMPORARY';
    };
    /** @description The UPLOAD_FILE service */
    FilesUploadFileActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'FILES';
      /** @enum {string} */
      action: 'UPLOAD_FILE';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['FilesUploadFileActionServiceInputSchema']
        | string;
    };
    /** @description The input for EXTRACT_PAGES */
    FilesExtractPagesActionServiceInputSchema: {
      /** @description PDF Document to extract pages from */
      file?: string | null;
      /** @description A custom name for the file */
      name?: string | null;
      /** @description Page numbers to extract */
      pages?: string | null;
      /**
       * @description Persistent storage will keep the file even after the run finishes. Temporary storage will delete the file after 24 hours
       * @enum {string}
       */
      storage?: 'PERSISTENT' | 'TEMPORARY';
    };
    /** @description The EXTRACT_PAGES service */
    FilesExtractPagesActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'FILES';
      /** @enum {string} */
      action: 'EXTRACT_PAGES';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['FilesExtractPagesActionServiceInputSchema']
        | string;
    };
    /** @description The input for EXTRACT_CONTENTS */
    FilesExtractContentsActionServiceInputSchema: {
      /** @description Document or image to extract contents from */
      file?: string | null;
      /**
       * @description Persistent storage will keep the file even after the run finishes. Temporary storage will delete the file after 24 hours
       * @enum {string}
       */
      storage?: 'PERSISTENT' | 'TEMPORARY';
    };
    /** @description The EXTRACT_CONTENTS service */
    FilesExtractContentsActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'FILES';
      /** @enum {string} */
      action: 'EXTRACT_CONTENTS';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['FilesExtractContentsActionServiceInputSchema']
        | string;
    };
    /** @description The input for EXTRACT_IMAGES */
    FilesExtractImagesActionServiceInputSchema: {
      /** @description Document to extract images from */
      file?: string | null;
      /**
       * @description Persistent storage will keep the file even after the run finishes. Temporary storage will delete the file after 24 hours
       * @enum {string}
       */
      storage?: 'PERSISTENT' | 'TEMPORARY';
    };
    /** @description The EXTRACT_IMAGES service */
    FilesExtractImagesActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'FILES';
      /** @enum {string} */
      action: 'EXTRACT_IMAGES';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['FilesExtractImagesActionServiceInputSchema']
        | string;
    };
    /** @description The input for SPREADSHEETS_LIST */
    GoogleSheetsSpreadsheetsListActionServiceInputSchema: Record<
      string,
      unknown
    >;
    /** @description The SPREADSHEETS_LIST service */
    GoogleSheetsSpreadsheetsListActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'GOOGLE_SHEETS';
      /** @enum {string} */
      action: 'SPREADSHEETS_LIST';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['GoogleSheetsSpreadsheetsListActionServiceInputSchema']
        | string;
      /** @description ID of the connection integration */
      connection_id?: string;
    };
    /** @description The input for SPREADSHEETS_APPEND_ROW */
    GoogleSheetsSpreadsheetsAppendRowActionServiceInputSchema: {
      /** @description Spreadsheet */
      spreadsheet_id?: string | null;
      /** @description Worksheet to append the row to. Defaults to the first sheet */
      worksheet?: string | null;
      /** @description Values to append to the row to each column */
      values?: unknown;
    };
    /** @description The SPREADSHEETS_APPEND_ROW service */
    GoogleSheetsSpreadsheetsAppendRowActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'GOOGLE_SHEETS';
      /** @enum {string} */
      action: 'SPREADSHEETS_APPEND_ROW';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['GoogleSheetsSpreadsheetsAppendRowActionServiceInputSchema']
        | string;
      /** @description ID of the connection integration */
      connection_id?: string;
    };
    /** @description The input for WORKSHEETS_LIST */
    GoogleSheetsWorksheetsListActionServiceInputSchema: {
      /** @description Spreadsheet */
      spreadsheet_id?: string | null;
    };
    /** @description The WORKSHEETS_LIST service */
    GoogleSheetsWorksheetsListActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'GOOGLE_SHEETS';
      /** @enum {string} */
      action: 'WORKSHEETS_LIST';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['GoogleSheetsWorksheetsListActionServiceInputSchema']
        | string;
      /** @description ID of the connection integration */
      connection_id?: string;
    };
    /** @description The input for SEND_EMAIL */
    GmailSendEmailActionServiceInputSchema: {
      /** @description Email addresses of the recipients, separated by commas */
      recipients?: string | null;
      /** @description Subject */
      subject?: string | null;
      /** @description Body */
      body?: string | null;
    };
    /** @description The SEND_EMAIL service */
    GmailSendEmailActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'GMAIL';
      /** @enum {string} */
      action: 'SEND_EMAIL';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['GmailSendEmailActionServiceInputSchema']
        | string;
      /** @description ID of the connection integration */
      connection_id?: string;
    };
    /** @description The input for CHANNELS_SEND_MESSAGE */
    SlackChannelsSendMessageActionServiceInputSchema: {
      /** @description Channel name or ID where the message will be sent, make sure the bot is a member of private channels. */
      channel?: string | null;
      /** @description Message */
      message?: string | null;
      /** @description URLs of the files to upload */
      file_urls?: string[] | null;
    };
    /** @description The CHANNELS_SEND_MESSAGE service */
    SlackChannelsSendMessageActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'SLACK';
      /** @enum {string} */
      action: 'CHANNELS_SEND_MESSAGE';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['SlackChannelsSendMessageActionServiceInputSchema']
        | string;
      /** @description ID of the connection integration */
      connection_id?: string;
    };
    /** @description The input for PAGES_CREATE */
    NotionPagesCreateActionServiceInputSchema: {
      /** @description Parent page where will be created the new page */
      parent_id?: string | null;
      /** @description Title of the new page */
      title?: string | null;
      /** @description Content text, markdown or JSON objects representing Notion blocks */
      content_blocks?: string[] | null;
    };
    /** @description The PAGES_CREATE service */
    NotionPagesCreateActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'NOTION';
      /** @enum {string} */
      action: 'PAGES_CREATE';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['NotionPagesCreateActionServiceInputSchema']
        | string;
      /** @description ID of the connection integration */
      connection_id?: string;
    };
    /** @description The input for CASES_GET */
    EncompassCasesGetActionServiceInputSchema: {
      /** @description The ID of the case to retrieve */
      case_id?: string | null;
    };
    /** @description The CASES_GET service */
    EncompassCasesGetActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'ENCOMPASS';
      /** @enum {string} */
      action: 'CASES_GET';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['EncompassCasesGetActionServiceInputSchema']
        | string;
      /** @description ID of the connection integration */
      connection_id?: string;
    };
    /** @description The input for CASES_UPDATE */
    EncompassCasesUpdateActionServiceInputSchema: {
      /** @description The ID of the case to update */
      case_id?: string | null;
      /** @description The partial application data to update stringified as JSON */
      data?: string | null;
    };
    /** @description The CASES_UPDATE service */
    EncompassCasesUpdateActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'ENCOMPASS';
      /** @enum {string} */
      action: 'CASES_UPDATE';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['EncompassCasesUpdateActionServiceInputSchema']
        | string;
      /** @description ID of the connection integration */
      connection_id?: string;
    };
    /** @description The input for DOCUMENTS_LIST */
    EncompassDocumentsListActionServiceInputSchema: {
      /** @description Optional: List documents for a specific case only */
      case_id?: string | null;
    };
    /** @description The DOCUMENTS_LIST service */
    EncompassDocumentsListActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'ENCOMPASS';
      /** @enum {string} */
      action: 'DOCUMENTS_LIST';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['EncompassDocumentsListActionServiceInputSchema']
        | string;
      /** @description ID of the connection integration */
      connection_id?: string;
    };
    /** @description The input for DOCUMENTS_CREATE */
    EncompassDocumentsCreateActionServiceInputSchema: {
      /** @description The case to create the document in */
      case_id?: string | null;
      /** @description Name for the new document placeholder */
      document_name?: string | null;
      /** @description ID of the borrower application to associate with the document */
      application_id?: string | null;
    };
    /** @description The DOCUMENTS_CREATE service */
    EncompassDocumentsCreateActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'ENCOMPASS';
      /** @enum {string} */
      action: 'DOCUMENTS_CREATE';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['EncompassDocumentsCreateActionServiceInputSchema']
        | string;
      /** @description ID of the connection integration */
      connection_id?: string;
    };
    /** @description The input for DOCUMENTS_DELETE */
    EncompassDocumentsDeleteActionServiceInputSchema: {
      /** @description The case containing the document */
      case_id?: string | null;
      /** @description ID of the document to delete */
      document_id?: string | null;
    };
    /** @description The DOCUMENTS_DELETE service */
    EncompassDocumentsDeleteActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'ENCOMPASS';
      /** @enum {string} */
      action: 'DOCUMENTS_DELETE';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['EncompassDocumentsDeleteActionServiceInputSchema']
        | string;
      /** @description ID of the connection integration */
      connection_id?: string;
    };
    /** @description The input for DOCUMENTS_ATTACHMENTS_LIST */
    EncompassDocumentsAttachmentsListActionServiceInputSchema: {
      /** @description The case containing the document */
      case_id?: string | null;
      /** @description The document to list attachments for */
      document_id?: string | null;
    };
    /** @description The DOCUMENTS_ATTACHMENTS_LIST service */
    EncompassDocumentsAttachmentsListActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'ENCOMPASS';
      /** @enum {string} */
      action: 'DOCUMENTS_ATTACHMENTS_LIST';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['EncompassDocumentsAttachmentsListActionServiceInputSchema']
        | string;
      /** @description ID of the connection integration */
      connection_id?: string;
    };
    /** @description The input for DOCUMENTS_ASSIGN_ATTACHMENTS */
    EncompassDocumentsAssignAttachmentsActionServiceInputSchema: {
      /** @description The case containing the document */
      case_id?: string | null;
      /** @description The document to assign files to */
      document_id?: string | null;
      /** @description IDs of the attachments to assign to this document */
      attachment_ids?: string[] | null;
    };
    /** @description The DOCUMENTS_ASSIGN_ATTACHMENTS service */
    EncompassDocumentsAssignAttachmentsActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'ENCOMPASS';
      /** @enum {string} */
      action: 'DOCUMENTS_ASSIGN_ATTACHMENTS';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['EncompassDocumentsAssignAttachmentsActionServiceInputSchema']
        | string;
      /** @description ID of the connection integration */
      connection_id?: string;
    };
    /** @description The input for DOCUMENTS_UNASSIGN_ATTACHMENTS */
    EncompassDocumentsUnassignAttachmentsActionServiceInputSchema: {
      /** @description The case containing the document */
      case_id?: string | null;
      /** @description IDs of the attachments to unassign from this document */
      attachment_ids?: string[] | null;
      /** @description The document to unassign attachments from */
      document_id?: string | null;
    };
    /** @description The DOCUMENTS_UNASSIGN_ATTACHMENTS service */
    EncompassDocumentsUnassignAttachmentsActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'ENCOMPASS';
      /** @enum {string} */
      action: 'DOCUMENTS_UNASSIGN_ATTACHMENTS';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['EncompassDocumentsUnassignAttachmentsActionServiceInputSchema']
        | string;
      /** @description ID of the connection integration */
      connection_id?: string;
    };
    /** @description The input for ATTACHMENTS_LIST */
    EncompassAttachmentsListActionServiceInputSchema: {
      /** @description Case ID to filter attachments by */
      case_id?: string | null;
    };
    /** @description The ATTACHMENTS_LIST service */
    EncompassAttachmentsListActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'ENCOMPASS';
      /** @enum {string} */
      action: 'ATTACHMENTS_LIST';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['EncompassAttachmentsListActionServiceInputSchema']
        | string;
      /** @description ID of the connection integration */
      connection_id?: string;
    };
    /** @description The input for ATTACHMENTS_UPLOAD */
    EncompassAttachmentsUploadActionServiceInputSchema: {
      /** @description The case containing the document */
      case_id?: string | null;
      /** @description The document to attach files to */
      document_id?: string | null;
      /** @description URLs of the files to upload */
      file_urls?: string[] | null;
    };
    /** @description The ATTACHMENTS_UPLOAD service */
    EncompassAttachmentsUploadActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'ENCOMPASS';
      /** @enum {string} */
      action: 'ATTACHMENTS_UPLOAD';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['EncompassAttachmentsUploadActionServiceInputSchema']
        | string;
      /** @description ID of the connection integration */
      connection_id?: string;
    };
    /** @description The input for ATTACHMENTS_DELETE */
    EncompassAttachmentsDeleteActionServiceInputSchema: {
      /** @description Case ID to delete attachments from */
      case_id?: string | null;
      /** @description IDs of the attachments to delete */
      attachment_ids?: string[] | null;
    };
    /** @description The ATTACHMENTS_DELETE service */
    EncompassAttachmentsDeleteActionServiceSchema: {
      /**
       * @description The type of the service
       * @enum {string}
       */
      type: 'ENCOMPASS';
      /** @enum {string} */
      action: 'ATTACHMENTS_DELETE';
      /** @description List of dynamic fields definitions */
      definitions?: Components['schemas']['DynamicFieldsInputDefinition'][];
      input:
        | Components['schemas']['EncompassAttachmentsDeleteActionServiceInputSchema']
        | string;
      /** @description ID of the connection integration */
      connection_id?: string;
    };
    /** @description The service configuration for the step */
    ServiceSchema:
      | Components['schemas']['SchedulerOnScheduleActionServiceSchema']
      | Components['schemas']['ToolsWebSearchActionServiceSchema']
      | Components['schemas']['FilesDownloadFileActionServiceSchema']
      | Components['schemas']['FilesUploadFileActionServiceSchema']
      | Components['schemas']['FilesExtractPagesActionServiceSchema']
      | Components['schemas']['FilesExtractContentsActionServiceSchema']
      | Components['schemas']['FilesExtractImagesActionServiceSchema']
      | Components['schemas']['GoogleSheetsSpreadsheetsListActionServiceSchema']
      | Components['schemas']['GoogleSheetsSpreadsheetsAppendRowActionServiceSchema']
      | Components['schemas']['GoogleSheetsWorksheetsListActionServiceSchema']
      | Components['schemas']['GmailSendEmailActionServiceSchema']
      | Components['schemas']['SlackChannelsSendMessageActionServiceSchema']
      | Components['schemas']['NotionPagesCreateActionServiceSchema']
      | Components['schemas']['EncompassCasesGetActionServiceSchema']
      | Components['schemas']['EncompassCasesUpdateActionServiceSchema']
      | Components['schemas']['EncompassDocumentsListActionServiceSchema']
      | Components['schemas']['EncompassDocumentsCreateActionServiceSchema']
      | Components['schemas']['EncompassDocumentsDeleteActionServiceSchema']
      | Components['schemas']['EncompassDocumentsAttachmentsListActionServiceSchema']
      | Components['schemas']['EncompassDocumentsAssignAttachmentsActionServiceSchema']
      | Components['schemas']['EncompassDocumentsUnassignAttachmentsActionServiceSchema']
      | Components['schemas']['EncompassAttachmentsListActionServiceSchema']
      | Components['schemas']['EncompassAttachmentsUploadActionServiceSchema']
      | Components['schemas']['EncompassAttachmentsDeleteActionServiceSchema'];
    /** @description A step that runs a service integration, like a file upload or a third-party service */
    StepServiceSchema: {
      /**
       * @description The type of the step (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'service';
      key: Components['schemas']['StepKeySchema'];
      /** @description A condition to determine if the step should run */
      conditional?: string;
      /** @description A loop condition for the step to repeat running until the condition is met */
      loop?: string;
      /** @description Whether to throw an error if the step fails */
      throw_on_error?: boolean;
      /** @description Whether the step is connected to the input */
      input_connected?: boolean;
      /** @description The step keys that this step connects to */
      destinations?: Components['schemas']['StepKeySchema'][];
      /** @description The position of the step on the canvas */
      position?: [number, number];
      /** @description The size of the step on the canvas */
      size?: [number, number];
      auto?: Components['schemas']['StepAutoConfigSchema'];
      service: Components['schemas']['ServiceSchema'];
    };
    StepSchema:
      | Components['schemas']['StepNoteSchema']
      | Components['schemas']['StepInputSchema']
      | Components['schemas']['StepBranchSchema']
      | Components['schemas']['StepCodeSchema']
      | Components['schemas']['StepModelSchema']
      | Components['schemas']['StepHttpRequestSchema']
      | Components['schemas']['StepBrowserSchema']
      | Components['schemas']['StepWorkflowSchema']
      | Components['schemas']['StepServiceSchema'];
    /** @description Step run input */
    CreateRunStepSchema: {
      step: Components['schemas']['StepSchema'];
      stream?: boolean;
    };
    /** @description Associated app with the workflow */
    AppPublicSchema: {
      /** @description Unique identifier for the app */
      id: string;
      /** @description Name of the app */
      name: string;
      /** @description Verification status of the app */
      verified: boolean;
    };
    /** @description User who deployed the version */
    UserPublicSchema: {
      id: string;
      name: string | null;
    };
    /** @description Default config input values of the workflow */
    InputValuesSchema: {
      [key: string]: unknown;
    } | null;
    /** @description Display options for the input fields */
    InputOptionsDisplaySchema: {
      field?: Components['schemas']['InputFieldLayoutSchema'];
      container?: Components['schemas']['InputContainerSchema'];
      /** @description Indicates whether the input field is hidden from the UI */
      hidden?: boolean;
    };
    /** @description Input options of the workflow */
    InputOptionsSchema: {
      display?: Components['schemas']['InputOptionsDisplaySchema'];
    } | null;
    /** @description Detailed information about an app tag (which can be attached to records, workflows, etc.) */
    TagSchema: {
      /** @description Unique identifier for the tag */
      id: string;
      /** @description Name of the tag */
      name: string;
      /** @description Color associated with the tag */
      color: string | null;
      /** @description Identifier for the associated app */
      app_id: string;
      /**
       * Format: date
       * @description Timestamp when the tag was created
       */
      created_at: string | null;
      /**
       * Format: date
       * @description Timestamp when the tag was last updated
       */
      updated_at: string | null;
    };
    /** @description Statistics of the workflow tests */
    WorkflowTestStatsSchema: {
      /** @description Total number of workflow tests */
      total_count: number;
      /** @description Number of running workflow tests */
      running_count: number;
      /** @description Number of cancelled workflow tests */
      cancelled_count: number;
      /** @description Number of passing workflow tests */
      passing_count: number;
      /** @description Number of failing workflow tests */
      failing_count: number;
      /** @description Number of expectations failing in workflow tests */
      expectations_failing_count: number;
      /** @description Number of expectations passing in workflow tests */
      expectations_passing_count: number;
    } | null;
    /** @description Detailed information about a workflow */
    WorkflowSchema: {
      /** @description Unique identifier for the workflow */
      id: string;
      /** @description Name of the workflow */
      name: string;
      /** @description Description of the workflow */
      description: string | null;
      app: Components['schemas']['AppPublicSchema'];
      /** @description Current version of the workflow */
      version: {
        /** @description Unique identifier for the workflow version */
        id: string;
        /** @description App id where the workflow version belongs to */
        app_id: string;
        /** @description Workflow id where the version belongs to */
        workflow_id: string;
        /** @description Description of the workflow at the time this version was deployed */
        description: string | null;
        /** @description Version number */
        version: number;
        /** @description Version number from which this version was rolled back */
        rollback_version?: number;
        /** @description Release notes */
        notes: string | null;
        created_by?: Components['schemas']['UserPublicSchema'];
        /**
         * Format: date
         * @description Date when the version was deployed
         */
        created_at: string | null;
        /** @description Unique key for the workflow version */
        key: string;
        input: Components['schemas']['InputDefinitionSchema'] & unknown;
        input_default: Components['schemas']['InputValuesSchema'];
        input_options: Components['schemas']['InputOptionsSchema'];
        /** @description Steps of the workflow at the time this version was deployed */
        steps: Components['schemas']['StepSchema'][];
      } | null;
      /** @description Tags associated with the workflow */
      tags: Components['schemas']['TagSchema'][];
      tests_stats?: Components['schemas']['WorkflowTestStatsSchema'];
      /** @description Unique identifier for the template */
      template_id: string | null;
      /**
       * @description Number of runs of the workflow
       * @example 0
       */
      runs_count: number;
      /**
       * @description Indicates if the workflow is enabled
       * @example true
       */
      enabled: boolean;
      /**
       * @description Indicates if the workflow is deleted
       * @example false
       */
      deleted: boolean;
      /**
       * Format: date
       * @description Creation date of the workflow
       */
      created_at: string | null;
      /**
       * Format: date
       * @description Last update date of the workflow
       */
      updated_at: string | null;
      /** @description Unique key for the workflow version */
      key: string;
      input: Components['schemas']['InputDefinitionSchema'] & unknown;
      input_default: Components['schemas']['InputValuesSchema'];
      input_options: Components['schemas']['InputOptionsSchema'];
      /** @description Steps of the workflow at the time this version was deployed */
      steps: Components['schemas']['StepSchema'][];
    };
    /** @description Information about the workflow version */
    WorkflowVersionSchema: {
      /** @description Unique identifier for the workflow version */
      id: string;
      /** @description App id where the workflow version belongs to */
      app_id: string;
      /** @description Workflow id where the version belongs to */
      workflow_id: string;
      /** @description Description of the workflow at the time this version was deployed */
      description: string | null;
      /** @description Version number */
      version: number;
      /** @description Version number from which this version was rolled back */
      rollback_version?: number;
      /** @description Release notes */
      notes: string | null;
      created_by?: Components['schemas']['UserPublicSchema'];
      /**
       * Format: date
       * @description Date when the version was deployed
       */
      created_at: string | null;
      /** @description Unique key for the workflow version */
      key: string;
      input: Components['schemas']['InputDefinitionSchema'] & unknown;
      input_default: Components['schemas']['InputValuesSchema'];
      input_options: Components['schemas']['InputOptionsSchema'];
      /** @description Steps of the workflow at the time this version was deployed */
      steps: Components['schemas']['StepSchema'][];
    };
    /**
     * @description Step type
     * @enum {string}
     */
    StepTypeSchema:
      | 'note'
      | 'branch'
      | 'code'
      | 'model'
      | 'http_request'
      | 'browser'
      | 'workflow'
      | 'service'
      | 'input';
    RuntimeLogs: unknown[];
    RunStepOutputCallSchema: {
      /** @description Unique identifier for the call */
      id?: string;
      /**
       * @description Status of the call
       * @enum {string}
       */
      status:
        | 'PENDING'
        | 'RUNNING'
        | 'CANCELLED'
        | 'COMPLETED'
        | 'SKIPPED'
        | 'FAILED';
      index?: number;
      /**
       * @description Key of the step run
       * @example STEP_1
       */
      key: string;
      type?: Components['schemas']['StepTypeSchema'];
      /** @description Output of the step run */
      output?:
        | Components['schemas']['StepWorkflowOutputSchema']
        | Components['schemas']['StepWorkflowRecordOutputSchema']
        | Components['schemas']['StepBranchConditionOutputSchema']
        | Components['schemas']['StepCodeOutputSchema']
        | Components['schemas']['StepModelOutputSchema']
        | Components['schemas']['StepHttpRequestOutputSchema']
        | Components['schemas']['StepBrowserOutputSchema']
        | Components['schemas']['StepServiceOutputSchema']
        | Components['schemas']['StepOutputSchema'][]
        | unknown;
      logs?: Components['schemas']['RuntimeLogs'];
      /** @description Timestamp of when the step run started */
      start: number;
      /** @description Timestamp of when the step run ended */
      end?: number;
      /** @description Error message if the step run failed */
      error?: string;
    };
    RunStepOutputCallsSchema: Components['schemas']['RunStepOutputCallSchema'][];
    RunStepRunningOutputSchema: {
      /**
       * @description Status of the step run, must be RUNNING (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      status: 'RUNNING';
      type?: Components['schemas']['StepTypeSchema'];
      /**
       * @description Key of the step run
       * @example STEP_1
       */
      key: string;
      /** @description Output of the step run */
      output?:
        | Components['schemas']['StepWorkflowOutputSchema']
        | Components['schemas']['StepWorkflowRecordOutputSchema']
        | Components['schemas']['StepBranchConditionOutputSchema']
        | Components['schemas']['StepCodeOutputSchema']
        | Components['schemas']['StepModelOutputSchema']
        | Components['schemas']['StepHttpRequestOutputSchema']
        | Components['schemas']['StepBrowserOutputSchema']
        | Components['schemas']['StepServiceOutputSchema']
        | Components['schemas']['StepOutputSchema'][]
        | unknown;
      logs?: Components['schemas']['RuntimeLogs'];
      calls?: Components['schemas']['RunStepOutputCallsSchema'];
      /** @description Timestamp of when the step run started */
      start: number;
    };
    RunStepCancelledOutputSchema: {
      /**
       * @description Status of the step run, must be CANCELLED (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      status: 'CANCELLED';
      type?: Components['schemas']['StepTypeSchema'];
      /**
       * @description Key of the step run
       * @example STEP_1
       */
      key: string;
      /** @description Output of the step run */
      output?:
        | Components['schemas']['StepWorkflowOutputSchema']
        | Components['schemas']['StepWorkflowRecordOutputSchema']
        | Components['schemas']['StepBranchConditionOutputSchema']
        | Components['schemas']['StepCodeOutputSchema']
        | Components['schemas']['StepModelOutputSchema']
        | Components['schemas']['StepHttpRequestOutputSchema']
        | Components['schemas']['StepBrowserOutputSchema']
        | Components['schemas']['StepServiceOutputSchema']
        | Components['schemas']['StepOutputSchema'][]
        | unknown;
      logs?: Components['schemas']['RuntimeLogs'];
      calls?: Components['schemas']['RunStepOutputCallsSchema'];
      /** @description Timestamp of when the step run started */
      start: number;
      /** @description Timestamp of when the step run ended */
      end?: number;
      /** @description Error message if the step run failed */
      error?: string;
    };
    RunStepSkippedOutputSchema: {
      /**
       * @description Status of the step run, must be SKIPPED (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      status: 'SKIPPED';
      type?: Components['schemas']['StepTypeSchema'];
      /**
       * @description Key of the step run
       * @example STEP_1
       */
      key: string;
      /** @description Output of the step run */
      output?:
        | Components['schemas']['StepWorkflowOutputSchema']
        | Components['schemas']['StepWorkflowRecordOutputSchema']
        | Components['schemas']['StepBranchConditionOutputSchema']
        | Components['schemas']['StepCodeOutputSchema']
        | Components['schemas']['StepModelOutputSchema']
        | Components['schemas']['StepHttpRequestOutputSchema']
        | Components['schemas']['StepBrowserOutputSchema']
        | Components['schemas']['StepServiceOutputSchema']
        | Components['schemas']['StepOutputSchema'][]
        | unknown;
      logs?: Components['schemas']['RuntimeLogs'];
      calls?: Components['schemas']['RunStepOutputCallsSchema'];
      /** @description Timestamp of when the step run started */
      start: number;
      /** @description Timestamp of when the step run ended */
      end?: number;
    };
    RunStepCompletedOutputSchema: {
      /**
       * @description Status of the step run, must be COMPLETED (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      status: 'COMPLETED';
      type?: Components['schemas']['StepTypeSchema'];
      /**
       * @description Key of the step run
       * @example STEP_1
       */
      key: string;
      /** @description Output of the step run */
      output?:
        | Components['schemas']['StepWorkflowOutputSchema']
        | Components['schemas']['StepWorkflowRecordOutputSchema']
        | Components['schemas']['StepBranchConditionOutputSchema']
        | Components['schemas']['StepCodeOutputSchema']
        | Components['schemas']['StepModelOutputSchema']
        | Components['schemas']['StepHttpRequestOutputSchema']
        | Components['schemas']['StepBrowserOutputSchema']
        | Components['schemas']['StepServiceOutputSchema']
        | Components['schemas']['StepOutputSchema'][]
        | unknown;
      logs?: Components['schemas']['RuntimeLogs'];
      calls?: Components['schemas']['RunStepOutputCallsSchema'];
      /** @description Timestamp of when the step run started */
      start: number;
      /** @description Timestamp of when the step run ended */
      end?: number;
    };
    RunStepFailedOutputSchema: {
      /**
       * @description Status of the step run, must be FAILED (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      status: 'FAILED';
      type?: Components['schemas']['StepTypeSchema'];
      /**
       * @description Key of the step run
       * @example STEP_1
       */
      key: string;
      /** @description Output of the step run */
      output?:
        | Components['schemas']['StepWorkflowOutputSchema']
        | Components['schemas']['StepWorkflowRecordOutputSchema']
        | Components['schemas']['StepBranchConditionOutputSchema']
        | Components['schemas']['StepCodeOutputSchema']
        | Components['schemas']['StepModelOutputSchema']
        | Components['schemas']['StepHttpRequestOutputSchema']
        | Components['schemas']['StepBrowserOutputSchema']
        | Components['schemas']['StepServiceOutputSchema']
        | Components['schemas']['StepOutputSchema'][]
        | unknown;
      logs?: Components['schemas']['RuntimeLogs'];
      calls?: Components['schemas']['RunStepOutputCallsSchema'];
      /** @description Timestamp of when the step run started */
      start: number;
      /** @description Timestamp of when the step run ended */
      end?: number;
      /** @description Error message if the step run failed */
      error?: string;
    };
    /** @description Detailed information about the step run */
    RunStepOutputSchema:
      | Components['schemas']['RunStepRunningOutputSchema']
      | Components['schemas']['RunStepCancelledOutputSchema']
      | Components['schemas']['RunStepSkippedOutputSchema']
      | Components['schemas']['RunStepCompletedOutputSchema']
      | Components['schemas']['RunStepFailedOutputSchema'];
    /** @description Output of the run */
    RunOutputSchema: {
      [key: string]: Components['schemas']['RunStepOutputSchema'];
    };
    /**
     * @description Status of the run
     * @example RUNNING
     * @enum {string}
     */
    RunStatusSchema:
      | 'PENDING'
      | 'RUNNING'
      | 'CANCELLED'
      | 'COMPLETED'
      | 'SKIPPED'
      | 'FAILED';
    RunSchema: {
      /** @description Unique identifier for the run */
      id: string;
      result?: Components['schemas']['RunResultSchema'] & unknown;
      input: Components['schemas']['InputValuesSchema'] & unknown;
      output: Components['schemas']['RunOutputSchema'];
      status: Components['schemas']['RunStatusSchema'];
      /**
       * @description Origin of the run
       * @example WORKFLOW
       * @enum {string}
       */
      origin: 'WORKFLOW' | 'TRIGGER' | 'RECORD' | 'TEST' | 'ENDPOINT';
      /** @description Error message if the run failed */
      error?: string;
      /**
       * Format: date
       * @description Timestamp of when the run started
       */
      started_at: string | null;
      /**
       * Format: date
       * @description Timestamp of when the run ended
       */
      ended_at: string | null;
      /** @description ID of the associated app where the run was triggered from */
      app_id: string;
      /** @description ID of the associated app where the workflow belongs to */
      workflow_app_id: string;
      /** @description ID of the associated workflow */
      workflow_id: string;
      /** @description Draft version of the workflow */
      workflow_version_draft: {
        /** @description Unique key for the workflow version */
        key: string;
        input: Components['schemas']['InputDefinitionSchema'] & unknown;
        input_default: Components['schemas']['InputValuesSchema'];
        input_options: Components['schemas']['InputOptionsSchema'];
        /** @description Steps of the workflow at the time this version was deployed */
        steps: Components['schemas']['StepSchema'][];
      } | null;
      /** @description Details of the workflow version used for the run */
      workflow_version: {
        /** @description Unique identifier for the workflow version */
        id: string;
        /** @description App id where the workflow version belongs to */
        app_id: string;
        /** @description Workflow id where the version belongs to */
        workflow_id: string;
        /** @description Description of the workflow at the time this version was deployed */
        description: string | null;
        /** @description Version number */
        version: number;
        /** @description Version number from which this version was rolled back */
        rollback_version?: number;
        /** @description Release notes */
        notes: string | null;
        created_by?: Components['schemas']['UserPublicSchema'];
        /**
         * Format: date
         * @description Date when the version was deployed
         */
        created_at: string | null;
        /** @description Unique key for the workflow version */
        key: string;
        input: Components['schemas']['InputDefinitionSchema'] & unknown;
        input_default: Components['schemas']['InputValuesSchema'];
        input_options: Components['schemas']['InputOptionsSchema'];
        /** @description Steps of the workflow at the time this version was deployed */
        steps: Components['schemas']['StepSchema'][];
      } | null;
      /** @description ID of the associated collection */
      collection_id?: string;
      /** @description ID of the associated record */
      record_id?: string;
      /** @description Version number of the workflow */
      version?: number;
      usage?: Components['schemas']['CreditsRunUsageSchema'] & unknown;
      /**
       * Format: date
       * @description Timestamp of when the run was created
       */
      created_at: string | null;
      /**
       * Format: date
       * @description Timestamp of when the run was last updated
       */
      updated_at: string | null;
    };
    /** @description Data to create a new run */
    CreateDiscoveryRunSchema: {
      input?: Components['schemas']['InputValuesSchema'] & unknown;
      /** @description Indicates if the run should stream output to the client as it becomes available via SSE (Server-Sent Events) */
      stream?: boolean;
      /** @description Indicates if the run should be executed in the background and return the run information immediately */
      background?: boolean;
      /** @description Step key to start the run from */
      from_step_key?: string | null;
      workflow_version_id?: Components['schemas']['WorkflowVersionIdSchema'];
    };
    /** @description Data to replay a workflow step */
    ReplayRunSchema: {
      /** @description Key of the workflow step to replay */
      stepKey: string;
      /** @description Indicates if the step should stream output to the client as it becomes available via SSE (Server-Sent Events) */
      stream?: boolean;
      /** @description Indicates if the step should be executed in the background and return the run information immediately */
      background?: boolean;
      /** @description Temporary WebSocket identifier used to track replay status before creation completes */
      identifier?: string;
    };
    /** @description Data to create a new run */
    CreateRunSchema: {
      input?: Components['schemas']['InputValuesSchema'] & unknown;
      /** @description Indicates if the run should stream output to the client as it becomes available via SSE (Server-Sent Events) */
      stream?: boolean;
      /** @description Indicates if the run should be executed in the background and return the run information immediately */
      background?: boolean;
      workflow_version_id?: Components['schemas']['WorkflowVersionIdSchema'];
      /** @description Step key to start the run from */
      from_step_key?: string | null;
      /** @description Temporary WebSocket identifier used to track run status before creation completes */
      identifier?: string;
    };
    /** @description Detailed information about an expectation within a workflow */
    WorkflowExpectationSchema: {
      /** @description Unique identifier for the expectation */
      id: string;
      /** @description Name of the expectation (max 256 characters) */
      name: string;
      /** @description JavaScript code that results in a boolean value determining if the expectation passed or failed */
      script: string;
      /**
       * Format: date
       * @description Creation date of the expectation
       */
      created_at: string | null;
      /**
       * Format: date
       * @description Last update date of the expectation
       */
      updated_at: string | null;
    };
    /** @description Detailed information about an expectation within a workflow */
    CreateWorkflowExpectationSchema: {
      /** @description Name of the expectation (max 256 characters) */
      name: string;
      /** @description JavaScript code that results in a boolean value determining if the expectation passed or failed */
      script: string;
    };
    /** @description Detailed information about an expectation within a workflow */
    UpdateWorkflowExpectationSchema: {
      /** @description Name of the expectation (max 256 characters) */
      name?: string;
      /** @description JavaScript code that results in a boolean value determining if the expectation passed or failed */
      script?: string;
    };
    /** @description Detailed information about an expectation within a workflow test */
    WorkflowTestExpectationItemSchema: {
      /** @description Unique key for the expectation (max 256 characters) */
      key: string;
      /** @description Name of the expectation (max 256 characters) */
      name: string;
      /** @description Unique identifier for the expectation */
      expectation_id?: string;
      /** @description JavaScript code that results in a boolean value determining if the expectation passed or failed */
      script?: string;
      /** @description Output of the expectation */
      output?: unknown;
      logs?: Components['schemas']['RuntimeLogs'];
      /**
       * @description Status of the expectation
       * @example PASSED
       * @enum {string}
       */
      status?: 'PASSED' | 'FAILED';
    };
    /** @description Detailed information about a workflow test */
    WorkflowTestSchema: {
      /** @description Unique identifier for the workflow test */
      id: string;
      /** @description Name of the workflow test */
      name: string;
      /**
       * @description Status of the workflow test
       * @example PASSED
       * @enum {string}
       */
      status: 'DRAFT' | 'CANCELLED' | 'RUNNING' | 'FAILED' | 'PASSED';
      input?: Components['schemas']['InputValuesSchema'] & unknown;
      input_default?: Components['schemas']['InputValuesSchema'] & unknown;
      input_context?: Components['schemas']['InputValuesSchema'] & unknown;
      /** @description Starting step key for the workflow test */
      step_key: string | null;
      /** @description List of expectations that will be executed for the workflow test */
      expectations?: Components['schemas']['WorkflowTestExpectationItemSchema'][];
      /** @description Number of passing expectations */
      expectations_passing_count: number;
      /** @description Number of failing expectations */
      expectations_failing_count: number;
      /** @description Identifier of the associated workflow */
      workflow_id: string;
      run: Components['schemas']['RunSchema'] & unknown;
      /**
       * Format: date
       * @description Creation date of the workflow test
       */
      created_at: string | null;
      /**
       * Format: date
       * @description Last update date of the workflow test
       */
      updated_at: string | null;
    };
    /** @description Data to create a new workflow test */
    CreateWorkflowTestSchema: {
      /** @description Name of the workflow test to be created (max 256 characters) */
      name: string;
    };
    /** @description Data to run multiple workflow tests */
    RunWorkflowTestsSchema: {
      /** @description Version number of the workflow on which to run the test */
      workflow_version_number?: number;
      /** @description Flag to execute only the failed workflow tests */
      execute_failed_only?: boolean;
    };
    /** @description Data to update an existing workflow test */
    UpdateWorkflowTestSchema: {
      /** @description Name of the workflow test to be created (max 256 characters) */
      name?: string;
      input?: Components['schemas']['InputValuesSchema'] & unknown;
      input_default?: Components['schemas']['InputValuesSchema'] & unknown;
      input_context?: Components['schemas']['InputValuesSchema'] & unknown;
      /** @description Updated list of expectations for the workflow test */
      expectations?: Components['schemas']['WorkflowTestExpectationItemSchema'][];
      /** @description Updated starting step key for the workflow test */
      step_key?: string | null;
    };
    /** @description Data to run a workflow test */
    RunWorkflowTestSchema: {
      /** @description Version number of the workflow on which to run the test */
      workflow_version_number?: number;
      /** @description Flag to execute the workflow test asynchronously */
      execute_async?: boolean;
      /** @description Flag to execute only the expectations using the already executed workflow run result, without running the workflow again. */
      execute_expectations_only?: boolean;
    };
    /** @description Detailed information about a rule */
    RuleSchema: {
      /**
       * @description Name of the rule
       * @example Check Business Name
       */
      name: string;
      /**
       * @description Unique key of the rule within the collection
       * @example CHECK_BUSINESS_NAME
       */
      key: string;
      /**
       * @description When to run this rule compared to others
       * @example before-all
       */
      execution_order?: string;
      /**
       * @description Action to take if the rule passes
       * @example PASS
       * @enum {string}
       */
      on_success: 'PASS' | 'FAIL' | 'WARN';
      /**
       * @description Action to take if the rule fails
       * @example WARN
       * @enum {string}
       */
      on_fail: 'PASS' | 'FAIL' | 'WARN';
      /** @description Step key to run the rule on */
      step_key?: string | null;
      /**
       * @description Unique identifier of the linked workflow
       * @example work_xxx
       */
      workflow_id: string;
      /**
       * @description Unique identifier of the specific workflow version to use
       * @example workv_xxx
       */
      workflow_version_id: string;
      /**
       * @description Should the rule use the latest version of the workflow?
       * @example true
       */
      workflow_use_latest: boolean;
      workflow_input_default?: Components['schemas']['InputValuesSchema'] &
        unknown;
      /**
       * @description Whether the rule is disabled
       * @example false
       */
      disabled?: boolean;
    };
    /** @description Mapping of a source field to multiple destination fields */
    CollectionConfigMappingSchema: {
      /**
       * @description Path to the source input field
       * @example LOAN_APPLICATION:income
       */
      source_path: string;
      /**
       * @description Paths to the destination input fields to map to
       * @example [
       *       "MONTHLY_INCOME:amount",
       *       "ANNUAL_INCOME:amount"
       *     ]
       */
      destination_Paths: string[];
    };
    /** @description Detailed information about a document mapping field */
    MappingFieldDocumentSchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      type: 'document';
      name?: string;
      entity_path: string;
      input_path: string[];
    };
    /** @description Detailed information about a property mapping field */
    MappingFieldPropertySchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      type: 'property';
      name?: string;
      entity_path: string;
      input_path: string[];
    };
    /** @description Detailed information about a trigger mapping */
    TriggerMappingSchema:
      | Components['schemas']['MappingFieldDocumentSchema']
      | Components['schemas']['MappingFieldPropertySchema'];
    /** @description Configuration for an Encompass trigger */
    TriggerEncompassConfigSchema: {
      /**
       * @description Type of the trigger connection (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'ENCOMPASS';
      /** @description Mappings of the trigger */
      mappings?: Components['schemas']['TriggerMappingSchema'][];
      /**
       * @description Milestones to pull from Encompass
       * @example [
       *       "Application Received",
       *       "Underwriting Complete",
       *       "Clear to Close"
       *     ]
       */
      pull_on_millestones?:
        | []
        | [string]
        | [string, string]
        | [string, string, string]
        | [string, string, string, string]
        | [string, string, string, string, string];
      /**
       * @description Folders to pull from Encompass
       * @example [
       *       "Loan Folder",
       *       "Document Folder",
       *       "Underwriting Folder"
       *     ]
       */
      pull_on_folders?:
        | []
        | [string]
        | [string, string]
        | [string, string, string]
        | [string, string, string, string]
        | [string, string, string, string, string];
    };
    /** @description Configuration for a Persona trigger */
    TriggerPersonaConfigSchema: {
      /**
       * @description Type of the trigger connection (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'PERSONA';
      /** @description Mappings of the trigger */
      mappings?: Components['schemas']['TriggerMappingSchema'][];
    };
    /** @description Configuration of the trigger */
    TriggerConfigSchema:
      | Components['schemas']['TriggerEncompassConfigSchema']
      | Components['schemas']['TriggerPersonaConfigSchema'];
    /** @description Detailed information about a trigger */
    TriggerSchema: {
      /** @description Unique identifier for the trigger */
      id: string;
      /**
       * @description Service that the trigger is connected to
       * @example ENCOMPASS
       * @enum {string}
       */
      type: 'ENCOMPASS' | 'PERSONA';
      /**
       * @description Name of the trigger
       * @example My Encompass Trigger
       */
      name: string | null;
      config: Components['schemas']['TriggerConfigSchema'];
      /** @description Whether the trigger is enabled or not */
      enabled: boolean;
      /**
       * @description Unique identifier of the connected service
       * @example con_xxx
       */
      connection_id: string | null;
      /** @description Unique identifier of the collection this trigger belongs to */
      collection_id: string;
      /**
       * Format: date
       * @description Creation date of the trigger
       */
      created_at: string | null;
      /**
       * Format: date
       * @description Last update date of the trigger
       */
      updated_at: string | null;
    };
    /** @description Detailed information about a collection */
    CollectionSchema: {
      /** @description Unique identifier for the collection */
      id: string;
      /** @description Name of the collection */
      name: string;
      /** @description Description of the collection */
      description: string | null;
      app: Components['schemas']['AppPublicSchema'] & unknown;
      /** @description Configuration of the collection. Including rules, triggers, etc. */
      config: {
        /** @description Unique identifier for the collection configuration */
        id: string;
        /** @description List of rules associated with the collection */
        rules: Components['schemas']['RuleSchema'][];
        /** @description List of input field mappings of the collection */
        mappings: Components['schemas']['CollectionConfigMappingSchema'][];
        /**
         * Format: date
         * @description Timestamp when the configuration was created
         */
        created_at: string | null;
        /**
         * Format: date
         * @description Timestamp when the configuration was last updated
         */
        updated_at: string | null;
      } | null;
      /** @description Tags attached to this collection */
      tags: Components['schemas']['TagSchema'][];
      /** @description How many records are in the collection */
      records_count: number;
      /** @description Has the collection been deleted */
      deleted: boolean;
      /** @description Triggers associated with the collection */
      triggers: Components['schemas']['TriggerSchema'][];
      /**
       * Format: date
       * @description Timestamp when the collection was created
       */
      created_at: string | null;
      /**
       * Format: date
       * @description Timestamp when the collection was last updated
       */
      updated_at: string | null;
    };
    /** @description Detailed information about a rule with workflow details */
    ExtendedRuleSchema: Components['schemas']['RuleSchema'] & {
      workflow: Components['schemas']['WorkflowSchema'];
      workflow_version: Components['schemas']['WorkflowVersionSchema'];
    };
    /** @description Detailed information about a collection including its config (rules, triggers, etc.) */
    ExtendedCollectionSchema: {
      /** @description Unique identifier for the collection */
      id: string;
      /** @description Name of the collection */
      name: string;
      /** @description Description of the collection */
      description: string | null;
      app: Components['schemas']['AppPublicSchema'] & unknown;
      /** @description Tags attached to this collection */
      tags: Components['schemas']['TagSchema'][];
      /** @description How many records are in the collection */
      records_count: number;
      /** @description Has the collection been deleted */
      deleted: boolean;
      /** @description Triggers associated with the collection */
      triggers: Components['schemas']['TriggerSchema'][];
      /**
       * Format: date
       * @description Timestamp when the collection was created
       */
      created_at: string | null;
      /**
       * Format: date
       * @description Timestamp when the collection was last updated
       */
      updated_at: string | null;
      config: {
        /** @description Unique identifier for the collection configuration */
        id: string;
        /** @description List of input field mappings of the collection */
        mappings: Components['schemas']['CollectionConfigMappingSchema'][];
        /**
         * Format: date
         * @description Timestamp when the configuration was created
         */
        created_at: string | null;
        /**
         * Format: date
         * @description Timestamp when the configuration was last updated
         */
        updated_at: string | null;
        /** @description List of rules associated with the collection with workflow details */
        rules: Components['schemas']['ExtendedRuleSchema'][];
      } | null;
    };
    CreateCollectionSchema: {
      /**
       * @description What you want to call your new collection (keep it under 64 characters)
       * @example My New Collection
       */
      name: string;
      /**
       * @description A short blurb about your collection (up to 1024 characters)
       * @example This is a description of my new collection
       */
      description?: string | null;
      /**
       * @description Want to copy another collection? Put its ID here
       * @example col_xxx
       */
      from_collection_id?: string;
      /**
       * @description Tags you want to add to your collection (up to 20)
       * @example [
       *       "tag_xxx",
       *       "tag_yyy"
       *     ]
       */
      tags_ids?: string[];
    };
    /**
     * @description How you want to change your collection
     * @example {
     *       "name": "Updated Collection Name",
     *       "description": "Updated collection description",
     *       "tags_ids": [
     *         "tag_xxx",
     *         "tag_yyy"
     *       ]
     *     }
     */
    UpdateCollectionSchema: {
      /**
       * @description What you want to call your new collection (keep it under 64 characters)
       * @example My New Collection
       */
      name?: string;
      /**
       * @description A short blurb about your collection (up to 1024 characters)
       * @example This is a description of my new collection
       */
      description?: string | null;
      /**
       * @description Tags you want to add to your collection (up to 20)
       * @example [
       *       "tag_xxx",
       *       "tag_yyy"
       *     ]
       */
      tags_ids?: string[];
    };
    /** @description Credit usage information of the record */
    CreditsRecordUsageSchema: Components['schemas']['CreditsUsageSchema'] & {
      rules: {
        [key: string]: Components['schemas']['CreditsRunUsageSchema'];
      };
    };
    IncludeRecordRulePropsSchema: 'all'[];
    IncludeRecordRuleSchema: {
      verbose?: Components['schemas']['IncludeRecordRulePropsSchema'];
    };
    /** @description Detailed information about a record rule */
    RecordRuleSchema: Components['schemas']['IncludeRecordRuleSchema'] & {
      /**
       * @description Current status of the record rule
       * @example PASSED
       * @enum {string}
       */
      status: 'DRAFT' | 'RUNNING' | 'PASSED' | 'FAILED' | 'WARN';
      /**
       * @description Unique key of the rule within the collection
       * @example CHECK_BUSINESS_NAME
       */
      key: string;
      result?: Components['schemas']['RunResultSchema'] & unknown;
      /**
       * @description Error message if the rule execution failed
       * @example Invalid input data
       */
      error?: string;
      input: Components['schemas']['InputValuesSchema'] & unknown;
      /** @description Details of the rule execution workflow run */
      run: {
        /** @description Unique identifier for the run */
        id: string;
        result?: Components['schemas']['RunResultSchema'] & unknown;
        input: Components['schemas']['InputValuesSchema'] & unknown;
        output: Components['schemas']['RunOutputSchema'];
        status: Components['schemas']['RunStatusSchema'];
        /**
         * @description Origin of the run
         * @example WORKFLOW
         * @enum {string}
         */
        origin: 'WORKFLOW' | 'TRIGGER' | 'RECORD' | 'TEST' | 'ENDPOINT';
        /** @description Error message if the run failed */
        error?: string;
        /**
         * Format: date
         * @description Timestamp of when the run started
         */
        started_at: string | null;
        /**
         * Format: date
         * @description Timestamp of when the run ended
         */
        ended_at: string | null;
        /** @description ID of the associated app where the run was triggered from */
        app_id: string;
        /** @description ID of the associated app where the workflow belongs to */
        workflow_app_id: string;
        /** @description ID of the associated workflow */
        workflow_id: string;
        /** @description Draft version of the workflow */
        workflow_version_draft: {
          /** @description Unique key for the workflow version */
          key: string;
          input: Components['schemas']['InputDefinitionSchema'] & unknown;
          input_default: Components['schemas']['InputValuesSchema'];
          input_options: Components['schemas']['InputOptionsSchema'];
          /** @description Steps of the workflow at the time this version was deployed */
          steps: Components['schemas']['StepSchema'][];
        } | null;
        /** @description Details of the workflow version used for the run */
        workflow_version: {
          /** @description Unique identifier for the workflow version */
          id: string;
          /** @description App id where the workflow version belongs to */
          app_id: string;
          /** @description Workflow id where the version belongs to */
          workflow_id: string;
          /** @description Description of the workflow at the time this version was deployed */
          description: string | null;
          /** @description Version number */
          version: number;
          /** @description Version number from which this version was rolled back */
          rollback_version?: number;
          /** @description Release notes */
          notes: string | null;
          created_by?: Components['schemas']['UserPublicSchema'];
          /**
           * Format: date
           * @description Date when the version was deployed
           */
          created_at: string | null;
          /** @description Unique key for the workflow version */
          key: string;
          input: Components['schemas']['InputDefinitionSchema'] & unknown;
          input_default: Components['schemas']['InputValuesSchema'];
          input_options: Components['schemas']['InputOptionsSchema'];
          /** @description Steps of the workflow at the time this version was deployed */
          steps: Components['schemas']['StepSchema'][];
        } | null;
        /** @description ID of the associated collection */
        collection_id?: string;
        /** @description ID of the associated record */
        record_id?: string;
        /** @description Version number of the workflow */
        version?: number;
        usage?: Components['schemas']['CreditsRunUsageSchema'] & unknown;
        /**
         * Format: date
         * @description Timestamp of when the run was created
         */
        created_at: string | null;
        /**
         * Format: date
         * @description Timestamp of when the run was last updated
         */
        updated_at: string | null;
      } | null;
      /**
       * Format: date
       * @description Timestamp when the record rule was created
       */
      created_at: string | null;
      /**
       * Format: date
       * @description Timestamp when the record rule was last updated
       */
      updated_at: string | null;
    };
    /** @description Configuration of the collection this record belongs to */
    CollectionConfigSchema: {
      /** @description Unique identifier for the collection configuration */
      id: string;
      /** @description List of rules associated with the collection */
      rules: Components['schemas']['RuleSchema'][];
      /** @description List of input field mappings of the collection */
      mappings: Components['schemas']['CollectionConfigMappingSchema'][];
      /**
       * Format: date
       * @description Timestamp when the configuration was created
       */
      created_at: string | null;
      /**
       * Format: date
       * @description Timestamp when the configuration was last updated
       */
      updated_at: string | null;
    };
    /** @description Entity associated with this record */
    LimitedTriggerEntitySchema: {
      id: string;
      entity_id: string;
      /** @enum {string} */
      status: 'SYNCED' | 'SYNCING';
      /** @enum {string} */
      type: 'ENCOMPASS' | 'PERSONA';
      trigger_id: string | null;
      record_id: string | null;
      /** Format: date */
      created_at: string | null;
      /** Format: date */
      updated_at: string | null;
    } | null;
    /** @description Detailed information about a record */
    RecordSchema: {
      /** @description Unique identifier for the record */
      id: string;
      /**
       * @description Name of the record
       * @example Important Record
       */
      name: string | null;
      /**
       * @description Current status of the record
       * @example COMPLETED
       * @enum {string}
       */
      status:
        | 'DRAFT'
        | 'QUEUED'
        | 'RUNNING'
        | 'CANCELLED'
        | 'COMPLETED'
        | 'FAILED';
      /**
       * @description Source from which the record was created
       * @example API
       * @enum {string}
       */
      source: 'APP' | 'API' | 'TRIGGER';
      usage?: Components['schemas']['CreditsRecordUsageSchema'];
      /** @description Total number of rules of this record */
      rules_count: number;
      /** @description Number of passed rules */
      rules_pass_count: number;
      /** @description Number of failed rules */
      rules_fail_count: number;
      /** @description Number of rules with warnings */
      rules_warn_count: number;
      /** @description Rules associated with this record */
      rules: {
        [key: string]: Components['schemas']['RecordRuleSchema'];
      };
      config: Components['schemas']['CollectionConfigSchema'];
      /** @description Name of the collection this record belongs to */
      collection_name: string;
      /**
       * @description Unique identifier of the collection this record belongs to
       * @example col_xxx
       */
      collection_id: string;
      created_by: Components['schemas']['UserPublicSchema'] & unknown;
      entity: Components['schemas']['LimitedTriggerEntitySchema'];
      /** @description Tags associated with this record */
      tags: Components['schemas']['TagSchema'][];
      /**
       * Format: date
       * @description Timestamp when the record was created
       */
      created_at: string | null;
      /**
       * Format: date
       * @description Timestamp when the record was last updated
       */
      updated_at: string | null;
    };
    ExtendedCollectionConfigSchema: {
      /** @description Unique identifier for the collection configuration */
      id: string;
      /** @description List of input field mappings of the collection */
      mappings: Components['schemas']['CollectionConfigMappingSchema'][];
      /**
       * Format: date
       * @description Timestamp when the configuration was created
       */
      created_at: string | null;
      /**
       * Format: date
       * @description Timestamp when the configuration was last updated
       */
      updated_at: string | null;
      /** @description List of rules associated with the collection with workflow details */
      rules: Components['schemas']['ExtendedRuleSchema'][];
    };
    /** @description Data associated with the trigger entity */
    TriggerEntityDataSchema: Record<string, unknown>;
    /** @description Detailed information about a trigger entity */
    TriggerEntitySchema: {
      /** @description Unique identifier for the trigger entity */
      id: string;
      /** @description Unique identifier of the external source in the connected service */
      entity_id: string;
      /**
       * @description Current status of the trigger entity
       * @example SYNCED
       * @enum {string}
       */
      status: 'SYNCED' | 'SYNCING';
      /**
       * @description Type of the trigger
       * @example ENCOMPASS
       * @enum {string}
       */
      type: 'ENCOMPASS' | 'PERSONA';
      /** @description Unique identifier of the associated trigger */
      trigger_id: string | null;
      /** @description Unique identifier of the record associated with the trigger entity */
      record_id: string | null;
      data: Components['schemas']['TriggerEntityDataSchema'];
      /**
       * Format: date
       * @description Timestamp of when the trigger entity was created
       */
      created_at: string | null;
      /**
       * Format: date
       * @description Timestamp of when the trigger entity was last updated
       */
      updated_at: string | null;
    } | null;
    /** @description Detailed information about a record with the details of the trigger entity and collection configuration */
    ExtendedRecordSchema: {
      /** @description Unique identifier for the record */
      id: string;
      /**
       * @description Name of the record
       * @example Important Record
       */
      name: string | null;
      /**
       * @description Current status of the record
       * @example COMPLETED
       * @enum {string}
       */
      status:
        | 'DRAFT'
        | 'QUEUED'
        | 'RUNNING'
        | 'CANCELLED'
        | 'COMPLETED'
        | 'FAILED';
      /**
       * @description Source from which the record was created
       * @example API
       * @enum {string}
       */
      source: 'APP' | 'API' | 'TRIGGER';
      usage?: Components['schemas']['CreditsRecordUsageSchema'];
      /** @description Total number of rules of this record */
      rules_count: number;
      /** @description Number of passed rules */
      rules_pass_count: number;
      /** @description Number of failed rules */
      rules_fail_count: number;
      /** @description Number of rules with warnings */
      rules_warn_count: number;
      /** @description Rules associated with this record */
      rules: {
        [key: string]: Components['schemas']['RecordRuleSchema'];
      };
      /** @description Name of the collection this record belongs to */
      collection_name: string;
      /**
       * @description Unique identifier of the collection this record belongs to
       * @example col_xxx
       */
      collection_id: string;
      created_by: Components['schemas']['UserPublicSchema'] & unknown;
      /** @description Tags associated with this record */
      tags: Components['schemas']['TagSchema'][];
      /**
       * Format: date
       * @description Timestamp when the record was created
       */
      created_at: string | null;
      /**
       * Format: date
       * @description Timestamp when the record was last updated
       */
      updated_at: string | null;
      config: Components['schemas']['ExtendedCollectionConfigSchema'];
      entity: Components['schemas']['TriggerEntitySchema'];
    };
    /** @description The rules to be applied to the record */
    UpdateRecordRulesSchema: {
      [key: string]: Components['schemas']['InputValuesSchema'] & unknown;
    };
    CreateRecordSchema: {
      /**
       * @description Name of the record (up to 128 characters)
       * @example New Important Record
       */
      name?: string | null;
      rules?: Components['schemas']['UpdateRecordRulesSchema'];
      /**
       * @description When running the record, specify whether all rules should be executed or only the changed ones
       * @example changed
       * @enum {string}
       */
      run?: 'all' | 'changed';
      /**
       * @description Tags to associate with the record (up to 20)
       * @example [
       *       "tag_xxx",
       *       "tag_yyy"
       *     ]
       */
      tags_ids?: string[];
    };
    UpdateRecordSchema: {
      /**
       * @description Name of the record (up to 128 characters)
       * @example New Important Record
       */
      name?: string | null;
      rules?: Components['schemas']['UpdateRecordRulesSchema'];
      /**
       * @description When running the record, specify whether all rules should be executed or only the changed ones
       * @example changed
       * @enum {string}
       */
      run?: 'all' | 'changed';
      /**
       * @description Tags to associate with the record (up to 20)
       * @example [
       *       "tag_xxx",
       *       "tag_yyy"
       *     ]
       */
      tags_ids?: string[];
    };
    /** @description Detailed information about a rule execution error */
    RecordRuleErrorSchema: {
      message: string;
      errors: {
        code: string;
        expected: string;
        received: string;
        path: string[];
        message: string;
      }[];
      key: string;
    };
    /** @description Status information of a record, including any validation errors */
    RecordStatusSchema: {
      /**
       * @description Current status of the record
       * @example FAILED
       * @enum {string}
       */
      status:
        | 'DRAFT'
        | 'QUEUED'
        | 'RUNNING'
        | 'CANCELLED'
        | 'COMPLETED'
        | 'FAILED';
      /** @description List of errors if the record failed validation */
      errors?: Components['schemas']['RecordRuleErrorSchema'][];
    };
    RunRecordSchema: {
      /**
       * @description Specifies which rules to run
       * @example changed
       * @enum {string}
       */
      mode: 'all' | 'changed';
    };
    /** @description Detailed information about a webhook */
    WebhookSchema: {
      /** @description Unique identifier for the webhook */
      id: string;
      /**
       * Format: uri
       * @description URL to which the webhook will send POST requests
       * @example https://example.com/webhook
       */
      url: string;
      /**
       * Format: date
       * @description Timestamp when the webhook was created
       */
      created_at: string | null;
      /**
       * Format: date
       * @description Timestamp when the webhook was last updated
       */
      updated_at: string | null;
      /**
       * @description List of events that trigger the webhook
       * @example [
       *       "record.created",
       *       "record.completed"
       *     ]
       */
      events: (
        | 'record.created'
        | 'record.running'
        | 'record.completed'
        | 'record.failed'
      )[];
    };
    /** @description Data to create a new webhook */
    CreateWebhookSchema: {
      /**
       * Format: uri
       * @description URL to which the webhook will send POST requests
       * @example https://example.com/webhook
       */
      url: string;
      /**
       * @description List of events that trigger the webhook
       * @example [
       *       "record.created",
       *       "record.completed"
       *     ]
       */
      events: (
        | 'record.created'
        | 'record.running'
        | 'record.completed'
        | 'record.failed'
      )[];
    };
    /** @description Data to update an existing webhook */
    UpdateWebhookSchema: {
      /**
       * Format: uri
       * @description URL to which the webhook will send POST requests
       * @example https://example.com/webhook
       */
      url?: string;
      /**
       * @description List of events that trigger the webhook
       * @example [
       *       "record.created",
       *       "record.completed"
       *     ]
       */
      events?: (
        | 'record.created'
        | 'record.running'
        | 'record.completed'
        | 'record.failed'
      )[];
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
};
export type QueryWorkflowsDiscoverSchema =
  Components['schemas']['QueryWorkflowsDiscoverSchema'];
export type IncludeRunPropsSchema =
  Components['schemas']['IncludeRunPropsSchema'];
export type IncludeRunSchema = Components['schemas']['IncludeRunSchema'];
export type QueryWorkflowsSchema =
  Components['schemas']['QueryWorkflowsSchema'];
export type QueryRunSchema = Components['schemas']['QueryRunSchema'];
export type QueryWorkflowExpectationsSchema =
  Components['schemas']['QueryWorkflowExpectationsSchema'];
export type IncludeTestPropsSchema =
  Components['schemas']['IncludeTestPropsSchema'];
export type IncludeTestSchema = Components['schemas']['IncludeTestSchema'];
export type QueryWorkflowTestsSchema =
  Components['schemas']['QueryWorkflowTestsSchema'];
export type QueryCollectionsSchema =
  Components['schemas']['QueryCollectionsSchema'];
export type IncludeRecordPropsSchema =
  Components['schemas']['IncludeRecordPropsSchema'];
export type IncludeRecordSchema = Components['schemas']['IncludeRecordSchema'];
export type QueryRecordsSchema = Components['schemas']['QueryRecordsSchema'];
export type DocumentContentSchema =
  Components['schemas']['DocumentContentSchema'];
export type DocumentImageSchema = Components['schemas']['DocumentImageSchema'];
export type DocumentSchema = Components['schemas']['DocumentSchema'];
export type AppFileSchema = Components['schemas']['AppFileSchema'];
export type FileDataSchema = Components['schemas']['FileDataSchema'];
export type CreateAppFileSchema = Components['schemas']['CreateAppFileSchema'];
export type AppVariableSchema = Components['schemas']['AppVariableSchema'];
export type CreateAppVariableSchema =
  Components['schemas']['CreateAppVariableSchema'];
export type UpdateAppVariableSchema =
  Components['schemas']['UpdateAppVariableSchema'];
export type CreditsCallUsageSchema =
  Components['schemas']['CreditsCallUsageSchema'];
export type CreditsUsageSchema = Components['schemas']['CreditsUsageSchema'];
export type CreditsRunUsageSchema =
  Components['schemas']['CreditsRunUsageSchema'];
export type RunResultSchema = Components['schemas']['RunResultSchema'];
export type StepWorkflowOutputSchema =
  Components['schemas']['StepWorkflowOutputSchema'];
export type StepWorkflowRecordOutputSchema =
  Components['schemas']['StepWorkflowRecordOutputSchema'];
export type StepBranchConditionOutputSchema =
  Components['schemas']['StepBranchConditionOutputSchema'];
export type StepCodeOutputSchema =
  Components['schemas']['StepCodeOutputSchema'];
export type ModelToolCallSchema = Components['schemas']['ModelToolCallSchema'];
export type ModelToolResultSchema =
  Components['schemas']['ModelToolResultSchema'];
export type StepModelOutputSchema =
  Components['schemas']['StepModelOutputSchema'];
export type StepHttpRequestOutputSchema =
  Components['schemas']['StepHttpRequestOutputSchema'];
export type StepBrowserOutputSchema =
  Components['schemas']['StepBrowserOutputSchema'];
export type StepServiceOutputSchema =
  Components['schemas']['StepServiceOutputSchema'];
export type StepOutputSchema = Components['schemas']['StepOutputSchema'];
export type RunStepSchema = Components['schemas']['RunStepSchema'];
export type StepKeySchema = Components['schemas']['StepKeySchema'];
export type StepAutoConfigSchema =
  Components['schemas']['StepAutoConfigSchema'];
export type StepNoteSchema = Components['schemas']['StepNoteSchema'];
export type InputFieldLayoutSchema =
  Components['schemas']['InputFieldLayoutSchema'];
export type InputContainerSchema =
  Components['schemas']['InputContainerSchema'];
export type InputDisplaySchema = Components['schemas']['InputDisplaySchema'];
export type FieldFileDisplaySchema =
  Components['schemas']['FieldFileDisplaySchema'];
export type FieldFileSchema = Components['schemas']['FieldFileSchema'];
export type InputFieldKeySchema = Components['schemas']['InputFieldKeySchema'];
export type InputListSchema = Components['schemas']['InputListSchema'];
export type FieldNumberSchema = Components['schemas']['FieldNumberSchema'];
export type FieldStringDisplaySchema =
  Components['schemas']['FieldStringDisplaySchema'];
export type FieldStringSchema = Components['schemas']['FieldStringSchema'];
export type FieldBooleanSchema = Components['schemas']['FieldBooleanSchema'];
export type FieldDateSchema = Components['schemas']['FieldDateSchema'];
export type FieldSelectDisplaySchema =
  Components['schemas']['FieldSelectDisplaySchema'];
export type FieldSelectOptionSchema =
  Components['schemas']['FieldSelectOptionSchema'];
export type FieldSelectorModeSchema =
  Components['schemas']['FieldSelectorModeSchema'];
export type FieldSelectSchema = Components['schemas']['FieldSelectSchema'];
export type FieldContentSchema = Components['schemas']['FieldContentSchema'];
export type FieldConnectionTypesSchema =
  Components['schemas']['FieldConnectionTypesSchema'];
export type FieldConnectionSchema =
  Components['schemas']['FieldConnectionSchema'];
export type FieldObjectSchema = Components['schemas']['FieldObjectSchema'];
export type InputSchema = Components['schemas']['InputSchema'];
export type InputDefinitionSchema =
  Components['schemas']['InputDefinitionSchema'];
export type StepInputSchema = Components['schemas']['StepInputSchema'];
export type StepBranchConditionSchema =
  Components['schemas']['StepBranchConditionSchema'];
export type StepBranchSchema = Components['schemas']['StepBranchSchema'];
export type StepCodeSchema = Components['schemas']['StepCodeSchema'];
export type ModelSystemMessageSchema =
  Components['schemas']['ModelSystemMessageSchema'];
export type ModelMessageTextSchema =
  Components['schemas']['ModelMessageTextSchema'];
export type ModelAssistantMessageSchema =
  Components['schemas']['ModelAssistantMessageSchema'];
export type ModelMessageFileSchema =
  Components['schemas']['ModelMessageFileSchema'];
export type ModelMessageImageSchema =
  Components['schemas']['ModelMessageImageSchema'];
export type ModelUserMessageSchema =
  Components['schemas']['ModelUserMessageSchema'];
export type ModelMessageToolResultSchema =
  Components['schemas']['ModelMessageToolResultSchema'];
export type ModelToolMessageSchema =
  Components['schemas']['ModelToolMessageSchema'];
export type ModelMessageSchema = Components['schemas']['ModelMessageSchema'];
export type ModelMessagesListSchema =
  Components['schemas']['ModelMessagesListSchema'];
export type ModelResponseFormatSchema =
  Components['schemas']['ModelResponseFormatSchema'];
export type ModelToolSchema = Components['schemas']['ModelToolSchema'];
export type ModelToolsModeSchema =
  Components['schemas']['ModelToolsModeSchema'];
export type ModelFeaturesSchema = Components['schemas']['ModelFeaturesSchema'];
export type ModelProviderSchema = Components['schemas']['ModelProviderSchema'];
export type StepModelSchema = Components['schemas']['StepModelSchema'];
export type StepHttpRequestSchema =
  Components['schemas']['StepHttpRequestSchema'];
export type StepBrowserSchema = Components['schemas']['StepBrowserSchema'];
export type WorkflowInputValuesSchema =
  Components['schemas']['WorkflowInputValuesSchema'];
export type WorkflowVersionIdSchema =
  Components['schemas']['WorkflowVersionIdSchema'];
export type StepWorkflowSchema = Components['schemas']['StepWorkflowSchema'];
export type DynamicFieldsInputDefinition =
  Components['schemas']['DynamicFieldsInputDefinition'];
export type SchedulerOnScheduleActionServiceInputSchema =
  Components['schemas']['SchedulerOnScheduleActionServiceInputSchema'];
export type SchedulerOnScheduleActionServiceSchema =
  Components['schemas']['SchedulerOnScheduleActionServiceSchema'];
export type ToolsWebSearchActionServiceInputSchema =
  Components['schemas']['ToolsWebSearchActionServiceInputSchema'];
export type ToolsWebSearchActionServiceSchema =
  Components['schemas']['ToolsWebSearchActionServiceSchema'];
export type FilesDownloadFileActionServiceInputSchema =
  Components['schemas']['FilesDownloadFileActionServiceInputSchema'];
export type FilesDownloadFileActionServiceSchema =
  Components['schemas']['FilesDownloadFileActionServiceSchema'];
export type FilesUploadFileActionServiceInputSchema =
  Components['schemas']['FilesUploadFileActionServiceInputSchema'];
export type FilesUploadFileActionServiceSchema =
  Components['schemas']['FilesUploadFileActionServiceSchema'];
export type FilesExtractPagesActionServiceInputSchema =
  Components['schemas']['FilesExtractPagesActionServiceInputSchema'];
export type FilesExtractPagesActionServiceSchema =
  Components['schemas']['FilesExtractPagesActionServiceSchema'];
export type FilesExtractContentsActionServiceInputSchema =
  Components['schemas']['FilesExtractContentsActionServiceInputSchema'];
export type FilesExtractContentsActionServiceSchema =
  Components['schemas']['FilesExtractContentsActionServiceSchema'];
export type FilesExtractImagesActionServiceInputSchema =
  Components['schemas']['FilesExtractImagesActionServiceInputSchema'];
export type FilesExtractImagesActionServiceSchema =
  Components['schemas']['FilesExtractImagesActionServiceSchema'];
export type GoogleSheetsSpreadsheetsListActionServiceInputSchema =
  Components['schemas']['GoogleSheetsSpreadsheetsListActionServiceInputSchema'];
export type GoogleSheetsSpreadsheetsListActionServiceSchema =
  Components['schemas']['GoogleSheetsSpreadsheetsListActionServiceSchema'];
export type GoogleSheetsSpreadsheetsAppendRowActionServiceInputSchema =
  Components['schemas']['GoogleSheetsSpreadsheetsAppendRowActionServiceInputSchema'];
export type GoogleSheetsSpreadsheetsAppendRowActionServiceSchema =
  Components['schemas']['GoogleSheetsSpreadsheetsAppendRowActionServiceSchema'];
export type GoogleSheetsWorksheetsListActionServiceInputSchema =
  Components['schemas']['GoogleSheetsWorksheetsListActionServiceInputSchema'];
export type GoogleSheetsWorksheetsListActionServiceSchema =
  Components['schemas']['GoogleSheetsWorksheetsListActionServiceSchema'];
export type GmailSendEmailActionServiceInputSchema =
  Components['schemas']['GmailSendEmailActionServiceInputSchema'];
export type GmailSendEmailActionServiceSchema =
  Components['schemas']['GmailSendEmailActionServiceSchema'];
export type SlackChannelsSendMessageActionServiceInputSchema =
  Components['schemas']['SlackChannelsSendMessageActionServiceInputSchema'];
export type SlackChannelsSendMessageActionServiceSchema =
  Components['schemas']['SlackChannelsSendMessageActionServiceSchema'];
export type NotionPagesCreateActionServiceInputSchema =
  Components['schemas']['NotionPagesCreateActionServiceInputSchema'];
export type NotionPagesCreateActionServiceSchema =
  Components['schemas']['NotionPagesCreateActionServiceSchema'];
export type EncompassCasesGetActionServiceInputSchema =
  Components['schemas']['EncompassCasesGetActionServiceInputSchema'];
export type EncompassCasesGetActionServiceSchema =
  Components['schemas']['EncompassCasesGetActionServiceSchema'];
export type EncompassCasesUpdateActionServiceInputSchema =
  Components['schemas']['EncompassCasesUpdateActionServiceInputSchema'];
export type EncompassCasesUpdateActionServiceSchema =
  Components['schemas']['EncompassCasesUpdateActionServiceSchema'];
export type EncompassDocumentsListActionServiceInputSchema =
  Components['schemas']['EncompassDocumentsListActionServiceInputSchema'];
export type EncompassDocumentsListActionServiceSchema =
  Components['schemas']['EncompassDocumentsListActionServiceSchema'];
export type EncompassDocumentsCreateActionServiceInputSchema =
  Components['schemas']['EncompassDocumentsCreateActionServiceInputSchema'];
export type EncompassDocumentsCreateActionServiceSchema =
  Components['schemas']['EncompassDocumentsCreateActionServiceSchema'];
export type EncompassDocumentsDeleteActionServiceInputSchema =
  Components['schemas']['EncompassDocumentsDeleteActionServiceInputSchema'];
export type EncompassDocumentsDeleteActionServiceSchema =
  Components['schemas']['EncompassDocumentsDeleteActionServiceSchema'];
export type EncompassDocumentsAttachmentsListActionServiceInputSchema =
  Components['schemas']['EncompassDocumentsAttachmentsListActionServiceInputSchema'];
export type EncompassDocumentsAttachmentsListActionServiceSchema =
  Components['schemas']['EncompassDocumentsAttachmentsListActionServiceSchema'];
export type EncompassDocumentsAssignAttachmentsActionServiceInputSchema =
  Components['schemas']['EncompassDocumentsAssignAttachmentsActionServiceInputSchema'];
export type EncompassDocumentsAssignAttachmentsActionServiceSchema =
  Components['schemas']['EncompassDocumentsAssignAttachmentsActionServiceSchema'];
export type EncompassDocumentsUnassignAttachmentsActionServiceInputSchema =
  Components['schemas']['EncompassDocumentsUnassignAttachmentsActionServiceInputSchema'];
export type EncompassDocumentsUnassignAttachmentsActionServiceSchema =
  Components['schemas']['EncompassDocumentsUnassignAttachmentsActionServiceSchema'];
export type EncompassAttachmentsListActionServiceInputSchema =
  Components['schemas']['EncompassAttachmentsListActionServiceInputSchema'];
export type EncompassAttachmentsListActionServiceSchema =
  Components['schemas']['EncompassAttachmentsListActionServiceSchema'];
export type EncompassAttachmentsUploadActionServiceInputSchema =
  Components['schemas']['EncompassAttachmentsUploadActionServiceInputSchema'];
export type EncompassAttachmentsUploadActionServiceSchema =
  Components['schemas']['EncompassAttachmentsUploadActionServiceSchema'];
export type EncompassAttachmentsDeleteActionServiceInputSchema =
  Components['schemas']['EncompassAttachmentsDeleteActionServiceInputSchema'];
export type EncompassAttachmentsDeleteActionServiceSchema =
  Components['schemas']['EncompassAttachmentsDeleteActionServiceSchema'];
export type ServiceSchema = Components['schemas']['ServiceSchema'];
export type StepServiceSchema = Components['schemas']['StepServiceSchema'];
export type StepSchema = Components['schemas']['StepSchema'];
export type CreateRunStepSchema = Components['schemas']['CreateRunStepSchema'];
export type AppPublicSchema = Components['schemas']['AppPublicSchema'];
export type UserPublicSchema = Components['schemas']['UserPublicSchema'];
export type InputValuesSchema = Components['schemas']['InputValuesSchema'];
export type InputOptionsDisplaySchema =
  Components['schemas']['InputOptionsDisplaySchema'];
export type InputOptionsSchema = Components['schemas']['InputOptionsSchema'];
export type TagSchema = Components['schemas']['TagSchema'];
export type WorkflowTestStatsSchema =
  Components['schemas']['WorkflowTestStatsSchema'];
export type WorkflowSchema = Components['schemas']['WorkflowSchema'];
export type WorkflowVersionSchema =
  Components['schemas']['WorkflowVersionSchema'];
export type StepTypeSchema = Components['schemas']['StepTypeSchema'];
export type RuntimeLogs = Components['schemas']['RuntimeLogs'];
export type RunStepOutputCallSchema =
  Components['schemas']['RunStepOutputCallSchema'];
export type RunStepOutputCallsSchema =
  Components['schemas']['RunStepOutputCallsSchema'];
export type RunStepRunningOutputSchema =
  Components['schemas']['RunStepRunningOutputSchema'];
export type RunStepCancelledOutputSchema =
  Components['schemas']['RunStepCancelledOutputSchema'];
export type RunStepSkippedOutputSchema =
  Components['schemas']['RunStepSkippedOutputSchema'];
export type RunStepCompletedOutputSchema =
  Components['schemas']['RunStepCompletedOutputSchema'];
export type RunStepFailedOutputSchema =
  Components['schemas']['RunStepFailedOutputSchema'];
export type RunStepOutputSchema = Components['schemas']['RunStepOutputSchema'];
export type RunOutputSchema = Components['schemas']['RunOutputSchema'];
export type RunStatusSchema = Components['schemas']['RunStatusSchema'];
export type RunSchema = Components['schemas']['RunSchema'];
export type CreateDiscoveryRunSchema =
  Components['schemas']['CreateDiscoveryRunSchema'];
export type ReplayRunSchema = Components['schemas']['ReplayRunSchema'];
export type CreateRunSchema = Components['schemas']['CreateRunSchema'];
export type WorkflowExpectationSchema =
  Components['schemas']['WorkflowExpectationSchema'];
export type CreateWorkflowExpectationSchema =
  Components['schemas']['CreateWorkflowExpectationSchema'];
export type UpdateWorkflowExpectationSchema =
  Components['schemas']['UpdateWorkflowExpectationSchema'];
export type WorkflowTestExpectationItemSchema =
  Components['schemas']['WorkflowTestExpectationItemSchema'];
export type WorkflowTestSchema = Components['schemas']['WorkflowTestSchema'];
export type CreateWorkflowTestSchema =
  Components['schemas']['CreateWorkflowTestSchema'];
export type RunWorkflowTestsSchema =
  Components['schemas']['RunWorkflowTestsSchema'];
export type UpdateWorkflowTestSchema =
  Components['schemas']['UpdateWorkflowTestSchema'];
export type RunWorkflowTestSchema =
  Components['schemas']['RunWorkflowTestSchema'];
export type RuleSchema = Components['schemas']['RuleSchema'];
export type CollectionConfigMappingSchema =
  Components['schemas']['CollectionConfigMappingSchema'];
export type MappingFieldDocumentSchema =
  Components['schemas']['MappingFieldDocumentSchema'];
export type MappingFieldPropertySchema =
  Components['schemas']['MappingFieldPropertySchema'];
export type TriggerMappingSchema =
  Components['schemas']['TriggerMappingSchema'];
export type TriggerEncompassConfigSchema =
  Components['schemas']['TriggerEncompassConfigSchema'];
export type TriggerPersonaConfigSchema =
  Components['schemas']['TriggerPersonaConfigSchema'];
export type TriggerConfigSchema = Components['schemas']['TriggerConfigSchema'];
export type TriggerSchema = Components['schemas']['TriggerSchema'];
export type CollectionSchema = Components['schemas']['CollectionSchema'];
export type ExtendedRuleSchema = Components['schemas']['ExtendedRuleSchema'];
export type ExtendedCollectionSchema =
  Components['schemas']['ExtendedCollectionSchema'];
export type CreateCollectionSchema =
  Components['schemas']['CreateCollectionSchema'];
export type UpdateCollectionSchema =
  Components['schemas']['UpdateCollectionSchema'];
export type CreditsRecordUsageSchema =
  Components['schemas']['CreditsRecordUsageSchema'];
export type IncludeRecordRulePropsSchema =
  Components['schemas']['IncludeRecordRulePropsSchema'];
export type IncludeRecordRuleSchema =
  Components['schemas']['IncludeRecordRuleSchema'];
export type RecordRuleSchema = Components['schemas']['RecordRuleSchema'];
export type CollectionConfigSchema =
  Components['schemas']['CollectionConfigSchema'];
export type LimitedTriggerEntitySchema =
  Components['schemas']['LimitedTriggerEntitySchema'];
export type RecordSchema = Components['schemas']['RecordSchema'];
export type ExtendedCollectionConfigSchema =
  Components['schemas']['ExtendedCollectionConfigSchema'];
export type TriggerEntityDataSchema =
  Components['schemas']['TriggerEntityDataSchema'];
export type TriggerEntitySchema = Components['schemas']['TriggerEntitySchema'];
export type ExtendedRecordSchema =
  Components['schemas']['ExtendedRecordSchema'];
export type UpdateRecordRulesSchema =
  Components['schemas']['UpdateRecordRulesSchema'];
export type CreateRecordSchema = Components['schemas']['CreateRecordSchema'];
export type UpdateRecordSchema = Components['schemas']['UpdateRecordSchema'];
export type RecordRuleErrorSchema =
  Components['schemas']['RecordRuleErrorSchema'];
export type RecordStatusSchema = Components['schemas']['RecordStatusSchema'];
export type RunRecordSchema = Components['schemas']['RunRecordSchema'];
export type WebhookSchema = Components['schemas']['WebhookSchema'];
export type CreateWebhookSchema = Components['schemas']['CreateWebhookSchema'];
export type UpdateWebhookSchema = Components['schemas']['UpdateWebhookSchema'];
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
