export type paths = {
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
            'application/json': components['schemas']['FileSchema'][];
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
          'application/json': components['schemas']['CreateFileSchema'];
          'multipart/form-data': components['schemas']['CreateFileSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['FileSchema'];
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
            'application/json': components['schemas']['FileSchema'];
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
            'application/json': components['schemas']['FileSchema'];
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
  '/apps/{app_id}/connections/test': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Test a Connection
     * @description Test the connection configuration to ensure it is valid.
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
      /** @description The connection configuration to test. */
      requestBody?: {
        content: {
          'application/json': components['schemas']['TestConnectionConnectionSchema'];
          'multipart/form-data': components['schemas']['TestConnectionConnectionSchema'];
        };
      };
      responses: {
        /** @description The result of the connection test. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['TestConnectionConnectionResultSchema'];
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
  '/apps/{app_id}/connections': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Connections
     * @description Retrieve a list of connections for the specified app.
     */
    get: {
      parameters: {
        query?: {
          /** @description Page number */
          page?: number;
          /** @description Number of items to take */
          take?: number;
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
        /** @description A list of connections. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['ConnectionSchema'][];
          };
        };
      };
    };
    put?: never;
    /**
     * Create a Connection
     * @description Create a new connection for the specified app.
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
      /** @description The details of the connection to create. */
      requestBody?: {
        content: {
          'application/json': components['schemas']['CreateConnectionSchema'];
          'multipart/form-data': components['schemas']['CreateConnectionSchema'];
        };
      };
      responses: {
        /** @description The newly created connection. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['ConnectionSchema'];
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
  '/apps/{app_id}/connections/{connection_id}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get a Connection
     * @description Retrieve details of a specific connection.
     */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the connection */
          connection_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description The details of the connection. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['ConnectionSchema'];
          };
        };
      };
    };
    put?: never;
    post?: never;
    /**
     * Delete a Connection
     * @description Delete an existing connection.
     */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the connection */
          connection_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description No content. */
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
     * Update a Connection
     * @description Update the details of an existing connection.
     */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the app */
          app_id: string;
          /** @description The ID of the connection */
          connection_id: string;
        };
        cookie?: never;
      };
      /** @description The updated details of the connection. */
      requestBody?: {
        content: {
          'application/json': components['schemas']['UpdateConnectionSchema'];
          'multipart/form-data': components['schemas']['UpdateConnectionSchema'];
        };
      };
      responses: {
        /** @description The updated connection. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['ConnectionSchema'];
          };
        };
      };
    };
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
            'application/json': components['schemas']['AppVariableSchema'][];
          };
        };
      };
    };
    put?: never;
    post?: never;
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
          'application/json': components['schemas']['AppVariableSchema'][];
          'multipart/form-data': components['schemas']['AppVariableSchema'][];
        };
      };
      responses: {
        /** @description An array of updated app variables. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AppVariableSchema'][];
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
          'application/json': components['schemas']['CreateRunStepSchema'];
          'multipart/form-data': components['schemas']['CreateRunStepSchema'];
        };
      };
      responses: {
        /** @description Step run output */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['RunStepSchema'];
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
          visibility?: 'ALL' | 'PUBLIC' | 'PRIVATE';
          tags?: string[];
          verified?: 'ALL' | 'VERIFIED' | 'UNVERIFIED';
          /** @description Page number */
          page?: number;
          /** @description Number of items to take */
          take?: number;
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
            'application/json': components['schemas']['WorkflowSchema'][];
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
            'application/json': components['schemas']['WorkflowSchema'];
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
            'application/json': components['schemas']['WorkflowVersionSchema'];
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
     * Run a Workflow
     * @description Run a specific workflow by its ID.
     */
    post: {
      parameters: {
        query?: {
          verbose?: components['schemas']['IncludeRunPropsSchema'];
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
          'application/json': components['schemas']['CreateRunSchema'];
          'multipart/form-data': components['schemas']['CreateRunSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['RunSchema'];
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
     * Cancel a Workflow Run
     * @description Cancel a workflow run that is currently running.
     */
    post: {
      parameters: {
        query?: {
          verbose?: components['schemas']['IncludeRunPropsSchema'];
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
            'application/json': components['schemas']['RunSchema'];
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
          visibility?: 'ALL' | 'PUBLIC' | 'PRIVATE';
          tags?: string[];
          /** @description Page number */
          page?: number;
          /** @description Number of items to take */
          take?: number;
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
            'application/json': components['schemas']['WorkflowSchema'][];
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
            'application/json': components['schemas']['WorkflowSchema'];
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
          verbose?: components['schemas']['IncludeRunPropsSchema'];
          origin?: 'ALL' | 'WORKFLOW' | 'RECORD' | 'TEST';
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
            'application/json': components['schemas']['RunSchema'][];
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
          verbose?: components['schemas']['IncludeRunPropsSchema'];
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
          'application/json': components['schemas']['CreateRunSchema'];
          'multipart/form-data': components['schemas']['CreateRunSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['RunSchema'];
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
          verbose?: components['schemas']['IncludeRunPropsSchema'];
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
          'application/json': components['schemas']['ReplayRunSchema'];
          'multipart/form-data': components['schemas']['ReplayRunSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['RunSchema'];
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
          verbose?: components['schemas']['IncludeRunPropsSchema'];
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
            'application/json': components['schemas']['RunSchema'];
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
          verbose?: components['schemas']['IncludeRunPropsSchema'];
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
            'application/json': components['schemas']['RunSchema'];
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
     * Get Workflow Tests Expectations
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
            'application/json': components['schemas']['WorkflowExpectationSchema'][];
          };
        };
      };
    };
    put?: never;
    /**
     * Create a Workflow Test Expectation
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
          'application/json': components['schemas']['CreateWorkflowExpectationSchema'];
          'multipart/form-data': components['schemas']['CreateWorkflowExpectationSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['WorkflowExpectationSchema'];
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
     * Get Workflow Test
     * @description Retrieve a specific workflow test by its ID.
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
            'application/json': components['schemas']['WorkflowExpectationSchema'];
          };
        };
      };
    };
    put?: never;
    post?: never;
    /**
     * Delete Workflow Test Expectation
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
     * Update Workflow Test Expectation
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
          'application/json': components['schemas']['UpdateWorkflowExpectationSchema'];
          'multipart/form-data': components['schemas']['UpdateWorkflowExpectationSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['WorkflowExpectationSchema'];
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
     * Get Workflow Tests
     * @description Retrieve a list of workflow tests for a specific workflow.
     */
    get: {
      parameters: {
        query?: {
          verbose?: components['schemas']['IncludeTestPropsSchema'];
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
            'application/json': components['schemas']['WorkflowTestSchema'][];
          };
        };
      };
    };
    put?: never;
    /**
     * Create a Workflow Test
     * @description Create a new workflow test for a specific workflow.
     */
    post: {
      parameters: {
        query?: {
          verbose?: components['schemas']['IncludeTestPropsSchema'];
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
          'application/json': components['schemas']['CreateWorkflowTestSchema'];
          'multipart/form-data': components['schemas']['CreateWorkflowTestSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['WorkflowTestSchema'];
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
     * Get Workflow Tests Stats
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
            'application/json': components['schemas']['WorkflowTestStatsSchema'] &
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
     * Get Workflow Test
     * @description Retrieve a specific workflow test by its ID.
     */
    get: {
      parameters: {
        query?: {
          verbose?: components['schemas']['IncludeTestPropsSchema'];
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
            'application/json': components['schemas']['WorkflowTestSchema'];
          };
        };
      };
    };
    put?: never;
    post?: never;
    /**
     * Delete a Workflow Test
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
     * Update a Workflow Test
     * @description Update a specific workflow test by its ID.
     */
    patch: {
      parameters: {
        query?: {
          verbose?: components['schemas']['IncludeTestPropsSchema'];
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
          'application/json': components['schemas']['UpdateWorkflowTestSchema'];
          'multipart/form-data': components['schemas']['UpdateWorkflowTestSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['WorkflowTestSchema'];
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
     * Run Workflow Tests
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
          'application/json': components['schemas']['RunWorkflowTestsSchema'];
          'multipart/form-data': components['schemas']['RunWorkflowTestsSchema'];
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
     * Cancel Workflow Tests
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
     * Cancel a Workflow Test
     * @description Cancel a running workflow test by its ID.
     */
    post: {
      parameters: {
        query?: {
          verbose?: components['schemas']['IncludeTestPropsSchema'];
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
            'application/json': components['schemas']['WorkflowTestSchema'];
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
     * Run a Workflow Test
     * @description Run a specific workflow test by its ID.
     */
    post: {
      parameters: {
        query?: {
          verbose?: components['schemas']['IncludeTestPropsSchema'];
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
          'application/json': components['schemas']['RunWorkflowTestSchema'];
          'multipart/form-data': components['schemas']['RunWorkflowTestSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['WorkflowTestSchema'];
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
  '/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}/ws': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Workflow Test WS
     * @description Establish a WebSocket connection to receive updates for a specific workflow test by its ID.
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
            'application/json': components['schemas']['WorkflowTestEventSchema'];
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
            'application/json': components['schemas']['WorkflowVersionSchema'][];
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
            'application/json': components['schemas']['WorkflowVersionSchema'];
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
          visibility?: 'ALL' | 'PUBLIC' | 'PRIVATE';
          tags?: string[];
          /** @description Page number */
          page?: number;
          /** @description Number of items to take */
          take?: number;
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
            'application/json': components['schemas']['CollectionSchema'][];
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
          'application/json': components['schemas']['CreateCollectionSchema'];
          'multipart/form-data': components['schemas']['CreateCollectionSchema'];
        };
      };
      responses: {
        /** @description You'll receive the newly created collection details. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['ExtendedCollectionSchema'];
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
            'application/json': components['schemas']['ExtendedCollectionSchema'];
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
          'application/json': components['schemas']['UpdateCollectionSchema'];
          'multipart/form-data': components['schemas']['UpdateCollectionSchema'];
        };
      };
      responses: {
        /** @description You'll receive the updated collection details. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['ExtendedCollectionSchema'];
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
          verbose?: components['schemas']['IncludeRecordPropsSchema'];
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
            'application/json': components['schemas']['RecordSchema'][];
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
          verbose?: components['schemas']['IncludeRecordPropsSchema'];
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
          'application/json': components['schemas']['CreateRecordSchema'];
          'multipart/form-data': components['schemas']['CreateRecordSchema'];
        };
      };
      responses: {
        /** @description You will receive the newly created record details. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['ExtendedRecordSchema'];
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
          verbose?: components['schemas']['IncludeRecordPropsSchema'];
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
            'application/json': components['schemas']['ExtendedRecordSchema'];
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
          verbose?: components['schemas']['IncludeRecordPropsSchema'];
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
          'application/json': components['schemas']['UpdateRecordSchema'];
          'multipart/form-data': components['schemas']['UpdateRecordSchema'];
        };
      };
      responses: {
        /** @description You will receive the updated record details. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['ExtendedRecordSchema'];
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
            'application/json': components['schemas']['RecordStatusSchema'];
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
          'application/json': components['schemas']['RunRecordSchema'];
          'multipart/form-data': components['schemas']['RunRecordSchema'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['RecordSchema'];
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
            'application/json': components['schemas']['RecordSchema'];
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
            'application/json': components['schemas']['RecordSchema'];
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
            'application/json': components['schemas']['RecordSchema'];
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
            'application/json': components['schemas']['WebhookSchema'][];
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
          'application/json': components['schemas']['CreateWebhookSchema'];
          'multipart/form-data': components['schemas']['CreateWebhookSchema'];
        };
      };
      responses: {
        /** @description The created webhook. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['WebhookSchema'];
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
          'application/json': components['schemas']['UpdateWebhookSchema'];
          'multipart/form-data': components['schemas']['UpdateWebhookSchema'];
        };
      };
      responses: {
        /** @description The updated webhook. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['WebhookSchema'];
          };
        };
      };
    };
    trace?: never;
  };
};
export type webhooks = Record<string, never>;
export type components = {
  schemas: {
    QueryWorkflowsSchema: {
      search?: string;
      /** @enum {string} */
      visibility?: 'ALL' | 'PUBLIC' | 'PRIVATE';
      tags?: string[];
    };
    QueryWorkflowsDiscoverSchema: components['schemas']['QueryWorkflowsSchema'] & {
      /** @enum {string} */
      verified?: 'ALL' | 'VERIFIED' | 'UNVERIFIED';
    };
    IncludeRunPropsSchema: 'all'[];
    IncludeRunSchema: {
      verbose?: components['schemas']['IncludeRunPropsSchema'];
    };
    QueryRunSchema: components['schemas']['IncludeRunSchema'] & {
      /** @enum {string} */
      origin?: 'ALL' | 'WORKFLOW' | 'RECORD' | 'TEST';
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
      verbose?: components['schemas']['IncludeTestPropsSchema'];
    };
    QueryWorkflowTestsSchema: components['schemas']['IncludeTestSchema'] & {
      search?: string;
      /** @enum {string} */
      status?: 'ALL' | 'DRAFT' | 'CANCELLED' | 'RUNNING' | 'FAILED' | 'PASSED';
    };
    QueryCollectionsSchema: {
      /** @description What you want to search for in collections */
      search?: string;
      /**
       * @description Visibility filter for your search
       * @example PUBLIC
       * @enum {string}
       */
      visibility?: 'ALL' | 'PUBLIC' | 'PRIVATE';
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
      verbose?: components['schemas']['IncludeRecordPropsSchema'];
    };
    /**
     * @description Options for including additional record properties
     * @example {
     *       "verbose": [
     *         "all"
     *       ]
     *     }
     */
    QueryRecordsSchema: components['schemas']['IncludeRecordSchema'] & {
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
      contents: components['schemas']['DocumentContentSchema'][];
      /** @description Array of document images (only available if extract_images is true) */
      images: components['schemas']['DocumentImageSchema'][];
      /** @description Extracted pages from the document (only available if extract_pages is true) */
      extracted_pages?: string;
      /** @description Time taken to process the document */
      time?: number;
    } | null;
    /** @description Detailed information about a file */
    FileSchema: {
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
      document?: components['schemas']['DocumentSchema'];
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
    /** @description Data of a file */
    FileDataSchema: {
      /**
       * @description URL, Raw or Base64 encoded file data.
       * @example SGVsbG8sIHdvcmxkIQ==
       */
      data: string;
      /**
       * @description Type of the file data.
       * @example application/pdf
       */
      type?: string;
      /**
       * @description Name of the file.
       * @example document.pdf
       */
      name?: string;
      /**
       * @description Encoding of the file data, by default base64 is expected.
       * @example base64
       * @enum {string}
       */
      encoding?: 'base64' | 'raw';
    };
    CreateFileSchema: {
      /** @description File to be uploaded. It can be a file object, a base64 encoded string, or a file data object containing base64 data, name, and type. */
      file?:
        | (File | Blob | string)
        | components['schemas']['FileDataSchema']
        | string;
      /**
       * @description URL of the file to be uploaded
       * @example https://example.com/files/document.pdf
       */
      file_url?: string;
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
    };
    /** @description Result of a connection test */
    TestConnectionConnectionResultSchema: {
      /**
       * @description Indicates if the connection test was successful
       * @example true
       */
      success: boolean;
      /**
       * @description Optional message providing details about the test result
       * @example Connection successful
       */
      message?: string;
    };
    /** @description Configuration of an Encompass connection */
    ConnectionEncompassConfigSchema: {
      /**
       * @description The type of the connection (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'ENCOMPASS';
      /**
       * @description The client ID for Encompass authentication
       * @example [username]@encompass:[instance_id]
       */
      client_id: string;
      /** @description The client secret for Encompass authentication */
      client_secret: string;
      /** @description The username for Encompass authentication */
      username: string;
      /** @description The password for Encompass authentication */
      password: string;
    };
    /** @description Configuration of a Persona connection */
    ConnectionPersonaConfigSchema: {
      /**
       * @description The type of the connection (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'PERSONA';
      /** @description The API key for Persona authentication */
      api_key: string;
      /** @description Optional custom endpoint for Persona API */
      custom_endpoint?: string | '' | unknown;
    };
    /** @description Configuration of a connection */
    ConnectionConfigSchema:
      | components['schemas']['ConnectionEncompassConfigSchema']
      | components['schemas']['ConnectionPersonaConfigSchema'];
    TestConnectionConnectionSchema: {
      config: components['schemas']['ConnectionConfigSchema'];
    };
    /** @description Detailed information about a connection */
    ConnectionSchema: {
      /** @description Unique identifier for the connection */
      id: string;
      /**
       * @description The type of connection
       * @example ENCOMPASS
       * @enum {string}
       */
      type: 'ENCOMPASS' | 'PERSONA';
      /**
       * @description Optional name for the connection
       * @example My Encompass Connection
       */
      name: string | null;
      config: components['schemas']['ConnectionConfigSchema'];
      /**
       * Format: date
       * @description Timestamp of when the connection was created
       */
      created_at: string | null;
      /**
       * Format: date
       * @description Timestamp of when the connection was last updated
       */
      updated_at: string | null;
    };
    CreateConnectionSchema: {
      /**
       * @description Name for the new connection
       * @example My New Connection
       */
      name: string;
      config: components['schemas']['ConnectionConfigSchema'];
    };
    UpdateConnectionSchema: {
      /**
       * @description Name for the new connection
       * @example My New Connection
       */
      name?: string;
      config?: components['schemas']['ConnectionConfigSchema'];
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
    /** @description Step run output */
    RunStepSchema: {
      output: Record<string, unknown>;
    };
    /** @description A unique key for the step */
    StepKeySchema: string;
    StepBranchConditionSchema: {
      condition?: string;
      destinations: components['schemas']['StepKeySchema'][];
      order: number;
    };
    /** @description A step that allows branching based on one or more conditions */
    StepBranchSchema: {
      /**
       * @description The type of the step (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'branch';
      key: components['schemas']['StepKeySchema'];
      /** @description A condition to determine if the step should run */
      conditional?: string;
      /** @description A loop condition for the step to repeat running until the condition is met */
      loop?: string;
      /** @description Whether to throw an error if one of the loop iterations fails */
      loop_throw_on_error?: boolean;
      /** @description Whether to throw an error if the step fails */
      throw_on_error?: boolean;
      /** @description Whether the step is connected to the input */
      input_connected?: boolean;
      /** @description The step keys that this step connects to */
      destinations?: components['schemas']['StepKeySchema'][];
      /** @description The position of the step on the canvas */
      position?: [number, number];
      /** @description The size of the step on the canvas */
      size?: [number, number];
      conditions: {
        [key: string]: components['schemas']['StepBranchConditionSchema'];
      };
      /** @description The step keys that the branch should connect to if none of the conditions are met */
      else?: components['schemas']['StepKeySchema'][];
    };
    ModelTextSystemMessageSchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      role: 'system';
      content: string;
      disable_variables?: boolean;
    };
    ModelTextMessageTextSchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      type: 'text';
      text: string;
      disable_variables?: boolean;
    };
    ModelTextAssistantMessageSchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      role: 'assistant';
      content: string | components['schemas']['ModelTextMessageTextSchema'][];
      disable_variables?: boolean;
    };
    ModelTextMessageImageSchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      type: 'image';
      url: string;
      disable_variables?: boolean;
    };
    ModelTextUserMessageSchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      role: 'user';
      content:
        | string
        | (
            | components['schemas']['ModelTextMessageTextSchema']
            | components['schemas']['ModelTextMessageImageSchema']
          )[];
      disable_variables?: boolean;
    };
    ModelTextMessageSchema:
      | components['schemas']['ModelTextSystemMessageSchema']
      | components['schemas']['ModelTextAssistantMessageSchema']
      | components['schemas']['ModelTextUserMessageSchema'];
    /** @enum {string} */
    ModelTextResponseFormatSchema: 'text' | 'json';
    /** @description Text based models */
    ModelTextSchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      provider: 'text';
      /** @enum {string} */
      model: 'openai' | 'anthropic' | 'google';
      messages: components['schemas']['ModelTextMessageSchema'][] | string;
      temperature?: number;
      response_format?: components['schemas']['ModelTextResponseFormatSchema'];
    };
    /** @description Cloudflare models */
    ModelCloudflareSchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      provider: 'cloudflare';
      /** @enum {string} */
      model: '@cf/meta/llama-3.2-11b-vision-instruct';
      messages: components['schemas']['ModelTextMessageSchema'][] | string;
      temperature?: number;
      response_format?: components['schemas']['ModelTextResponseFormatSchema'];
    };
    /** @description OpenAI models */
    ModelOpenAISchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      provider: 'openai';
      /** @enum {string} */
      model:
        | 'gpt-4o'
        | 'gpt-4o-2024-08-06'
        | 'gpt-4o-2024-11-20'
        | 'gpt-4o-mini'
        | 'gpt-4o-mini-2024-07-18'
        | 'o1-preview'
        | 'o1-mini'
        | 'o1-mini-2024-09-12';
      messages: components['schemas']['ModelTextMessageSchema'][] | string;
      temperature?: number;
      response_format?: components['schemas']['ModelTextResponseFormatSchema'];
    };
    /** @description Anthropic models */
    ModelAnthropicSchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      provider: 'anthropic';
      /** @enum {string} */
      model:
        | 'claude-3-5-sonnet-20241022'
        | 'claude-3-5-sonnet-20240620'
        | 'claude-3-5-haiku-20241022';
      messages: components['schemas']['ModelTextMessageSchema'][] | string;
      temperature?: number;
      response_format?: components['schemas']['ModelTextResponseFormatSchema'];
    };
    /** @description Google models */
    ModelGoogleSchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      provider: 'google';
      /** @enum {string} */
      model: 'gemini-1.5-pro' | 'gemini-1.5-pro-002' | 'gemini-1.5-flash-002';
      messages: components['schemas']['ModelTextMessageSchema'][] | string;
      temperature?: number;
      response_format?: components['schemas']['ModelTextResponseFormatSchema'];
    };
    /** @description x.ai models */
    ModelXSchema: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      provider: 'x';
      /** @enum {string} */
      model: 'grok-beta' | 'grok-vision-beta';
      messages: components['schemas']['ModelTextMessageSchema'][] | string;
      temperature?: number;
      response_format?: components['schemas']['ModelTextResponseFormatSchema'];
    };
    /** @description The model provider configuration */
    ModelProviderSchema:
      | components['schemas']['ModelTextSchema']
      | components['schemas']['ModelCloudflareSchema']
      | components['schemas']['ModelOpenAISchema']
      | components['schemas']['ModelAnthropicSchema']
      | components['schemas']['ModelGoogleSchema']
      | components['schemas']['ModelXSchema'];
    /** @description A step that configures and runs a machine learning model */
    StepModelSchema: {
      /**
       * @description The type of the step (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'model';
      key: components['schemas']['StepKeySchema'];
      /** @description A condition to determine if the step should run */
      conditional?: string;
      /** @description A loop condition for the step to repeat running until the condition is met */
      loop?: string;
      /** @description Whether to throw an error if one of the loop iterations fails */
      loop_throw_on_error?: boolean;
      /** @description Whether to throw an error if the step fails */
      throw_on_error?: boolean;
      /** @description Whether the step is connected to the input */
      input_connected?: boolean;
      /** @description The step keys that this step connects to */
      destinations?: components['schemas']['StepKeySchema'][];
      /** @description The position of the step on the canvas */
      position?: [number, number];
      /** @description The size of the step on the canvas */
      size?: [number, number];
      provider: components['schemas']['ModelProviderSchema'];
    };
    /** @description A step that executes a code block */
    StepCodeSchema: {
      /**
       * @description The type of the step (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'code';
      key: components['schemas']['StepKeySchema'];
      /** @description A condition to determine if the step should run */
      conditional?: string;
      /** @description A loop condition for the step to repeat running until the condition is met */
      loop?: string;
      /** @description Whether to throw an error if one of the loop iterations fails */
      loop_throw_on_error?: boolean;
      /** @description Whether to throw an error if the step fails */
      throw_on_error?: boolean;
      /** @description Whether the step is connected to the input */
      input_connected?: boolean;
      /** @description The step keys that this step connects to */
      destinations?: components['schemas']['StepKeySchema'][];
      /** @description The position of the step on the canvas */
      position?: [number, number];
      /** @description The size of the step on the canvas */
      size?: [number, number];
      /** @description The code to be executed in this step */
      code: string;
    };
    /** @description A step that makes an HTTP request */
    StepHttpRequestSchema: {
      /**
       * @description The type of the step (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'http_request';
      key: components['schemas']['StepKeySchema'];
      /** @description A condition to determine if the step should run */
      conditional?: string;
      /** @description A loop condition for the step to repeat running until the condition is met */
      loop?: string;
      /** @description Whether to throw an error if one of the loop iterations fails */
      loop_throw_on_error?: boolean;
      /** @description Whether to throw an error if the step fails */
      throw_on_error?: boolean;
      /** @description Whether the step is connected to the input */
      input_connected?: boolean;
      /** @description The step keys that this step connects to */
      destinations?: components['schemas']['StepKeySchema'][];
      /** @description The position of the step on the canvas */
      position?: [number, number];
      /** @description The size of the step on the canvas */
      size?: [number, number];
      /** @description The URL for the HTTP request */
      url: string;
      /**
       * @description The HTTP method for the request
       * @enum {string}
       */
      method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
      /** @description Headers to include in the HTTP request */
      headers?: {
        [key: string]: string;
      };
      /** @description The body of the HTTP request */
      body?: string;
    };
    /** @description A step that interacts with a browser */
    StepBrowserSchema: {
      /**
       * @description The type of the step (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'browser';
      key: components['schemas']['StepKeySchema'];
      /** @description A condition to determine if the step should run */
      conditional?: string;
      /** @description A loop condition for the step to repeat running until the condition is met */
      loop?: string;
      /** @description Whether to throw an error if one of the loop iterations fails */
      loop_throw_on_error?: boolean;
      /** @description Whether to throw an error if the step fails */
      throw_on_error?: boolean;
      /** @description Whether the step is connected to the input */
      input_connected?: boolean;
      /** @description The step keys that this step connects to */
      destinations?: components['schemas']['StepKeySchema'][];
      /** @description The position of the step on the canvas */
      position?: [number, number];
      /** @description The size of the step on the canvas */
      size?: [number, number];
      /** @description The URL to be scraped */
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
    StepWorkflowSchema: {
      /**
       * @description The type of the step (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'workflow';
      key: components['schemas']['StepKeySchema'];
      /** @description A condition to determine if the step should run */
      conditional?: string;
      /** @description A loop condition for the step to repeat running until the condition is met */
      loop?: string;
      /** @description Whether to throw an error if one of the loop iterations fails */
      loop_throw_on_error?: boolean;
      /** @description Whether to throw an error if the step fails */
      throw_on_error?: boolean;
      /** @description Whether the step is connected to the input */
      input_connected?: boolean;
      /** @description The step keys that this step connects to */
      destinations?: components['schemas']['StepKeySchema'][];
      /** @description The position of the step on the canvas */
      position?: [number, number];
      /** @description The size of the step on the canvas */
      size?: [number, number];
      input: components['schemas']['WorkflowInputValuesSchema'];
      /** @description The ID of the associated workflow */
      workflow_id?: string;
      /** @description The version ID of the associated workflow */
      workflow_version_id?: string;
      /** @description Whether to use the latest version of the workflow */
      workflow_use_latest?: boolean;
    };
    /** @description A service that processes a file by extracting contents, images, pages, etc. */
    FileServiceSchema: {
      /**
       * @description The type of the service (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'file';
      /** @description The input for the service, can be an object or a string */
      input:
        | {
            /** @description File to be processed. It can be a file object, a base64 encoded string, or a file data object containing base64 data, name, and type. */
            file?: components['schemas']['FileDataSchema'] | string;
            /** @description URL of the file to be processed */
            file_url?: string;
            /** @description Flag to extract contents from the file */
            extract_contents?: boolean;
            /** @description Flag to extract images from the file */
            extract_images?: boolean;
            /** @description Flag to extract pages from the file */
            extract_pages?: boolean;
            /** @description Array of page numbers to extract */
            pages?: number[];
          }
        | string;
    };
    /** @description A service that pushes a file to Encompass, can be used to add or replace a document in a case. */
    EncompassPushServiceSchema: {
      /**
       * @description The type of the service (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'encompass_push';
      /** @description The input for the service, can be an object or a string */
      input:
        | {
            /** @description Array of URLs of the files to be pushed to Encompass */
            file_urls: string[];
            /** @description ID of the case in Encompass */
            case_id: string;
            /** @description Optional ID of the document in Encompass */
            document_id?: string;
            /** @description Optional name of the document in Encompass */
            document_name?: string;
            /**
             * @description ID of the connection with Encompass in Cortex
             * @example pro_xxx
             */
            connection_id: string;
            /**
             * @description Action to be performed in Encompass
             * @enum {string}
             */
            action?: 'ADD' | 'REPLACE';
          }
        | string;
    };
    /** @description The service configuration for the step */
    ServiceSchema:
      | components['schemas']['FileServiceSchema']
      | components['schemas']['EncompassPushServiceSchema'];
    /** @description A step that runs a service */
    StepServiceSchema: {
      /**
       * @description The type of the step (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'service';
      key: components['schemas']['StepKeySchema'];
      /** @description A condition to determine if the step should run */
      conditional?: string;
      /** @description A loop condition for the step to repeat running until the condition is met */
      loop?: string;
      /** @description Whether to throw an error if one of the loop iterations fails */
      loop_throw_on_error?: boolean;
      /** @description Whether to throw an error if the step fails */
      throw_on_error?: boolean;
      /** @description Whether the step is connected to the input */
      input_connected?: boolean;
      /** @description The step keys that this step connects to */
      destinations?: components['schemas']['StepKeySchema'][];
      /** @description The position of the step on the canvas */
      position?: [number, number];
      /** @description The size of the step on the canvas */
      size?: [number, number];
      service: components['schemas']['ServiceSchema'];
    };
    StepSchema:
      | components['schemas']['StepBranchSchema']
      | components['schemas']['StepModelSchema']
      | components['schemas']['StepCodeSchema']
      | components['schemas']['StepHttpRequestSchema']
      | components['schemas']['StepBrowserSchema']
      | components['schemas']['StepWorkflowSchema']
      | components['schemas']['StepServiceSchema'];
    /** @description Step run input */
    CreateRunStepSchema: {
      step: components['schemas']['StepSchema'];
    };
    /** @description Associated app with the workflow */
    AppPublicSchema: {
      /** @description Unique identifier for the app */
      id: string;
      /** @description Name of the app */
      name: string;
      /** @description Verification status of the app by Cortex */
      verified: boolean;
    };
    /** @description User who deployed the version */
    UserPublicSchema: {
      id: string;
      name: string | null;
    };
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
      /** @description Indicates whether the input field should be expanded to full width */
      expand?: boolean;
      /** @description The order of the input field relative to other fields in the form */
      order?: number;
      /** @description Flag to extract contents from the file */
      extract_contents?: boolean;
      /** @description Flag to extract images from the file */
      extract_images?: boolean;
    };
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
      /** @description Indicates whether the input field should be expanded to full width */
      expand?: boolean;
      /** @description The order of the input field relative to other fields in the form */
      order?: number;
    };
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
      /** @description Indicates whether the input field should be expanded to full width */
      expand?: boolean;
      /** @description The order of the input field relative to other fields in the form */
      order?: number;
      /** @description Indicates whether the input field is multiline */
      multiline?: boolean;
    };
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
      /** @description Indicates whether the input field should be expanded to full width */
      expand?: boolean;
      /** @description The order of the input field relative to other fields in the form */
      order?: number;
    };
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
      /** @description Indicates whether the input field should be expanded to full width */
      expand?: boolean;
      /** @description The order of the input field relative to other fields in the form */
      order?: number;
    };
    FieldSelectOptionSchema: {
      /** @description Label of the select option */
      label: string;
      /** @description Value of the select option */
      value: string;
    };
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
      /** @description Indicates whether the input field should be expanded to full width */
      expand?: boolean;
      /** @description The order of the input field relative to other fields in the form */
      order?: number;
      /** @description The options for the select field (min 1) */
      options: [
        components['schemas']['FieldSelectOptionSchema'],
        ...components['schemas']['FieldSelectOptionSchema'][],
      ];
      /** @description Indicates if multiple selections are allowed */
      multiple?: boolean;
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
      /** @description Indicates whether the input field should be expanded to full width */
      expand?: boolean;
      /** @description The order of the input field relative to other fields in the form */
      order?: number;
      /** @description Whether to make the object field a config, which means it will be displayed in the configuration tab of the workflow */
      config?: boolean;
      /** @description A record of fields that can be of various types including object fields */
      fields: {
        [key: string]: components['schemas']['InputSchema'];
      };
    };
    InputSchema:
      | components['schemas']['FieldFileSchema']
      | components['schemas']['FieldNumberSchema']
      | components['schemas']['FieldStringSchema']
      | components['schemas']['FieldBooleanSchema']
      | components['schemas']['FieldDateSchema']
      | components['schemas']['FieldSelectSchema']
      | components['schemas']['FieldObjectSchema'];
    /** @description Input definition of the workflow at the time this version was deployed */
    InputDefinitionSchema: {
      [key: string]: components['schemas']['InputSchema'];
    };
    /** @description Default config input values of the workflow at the time this version was deployed */
    InputValuesSchema: {
      [key: string]: unknown;
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
      app: components['schemas']['AppPublicSchema'];
      /**
       * @description Visibility of the workflow
       * @example PRIVATE
       * @enum {string}
       */
      visibility: 'PUBLIC' | 'PRIVATE';
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
        created_by?: components['schemas']['UserPublicSchema'];
        /**
         * Format: date
         * @description Date when the version was deployed
         */
        created_at: string | null;
        /** @description Unique key for the workflow version */
        key: string;
        input: components['schemas']['InputDefinitionSchema'];
        input_default: components['schemas']['InputValuesSchema'];
        /** @description Steps of the workflow at the time this version was deployed */
        steps: components['schemas']['StepSchema'][];
      } | null;
      /** @description Tags associated with the workflow */
      tags: components['schemas']['TagSchema'][];
      tests_stats?: components['schemas']['WorkflowTestStatsSchema'];
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
      input: components['schemas']['InputDefinitionSchema'];
      input_default: components['schemas']['InputValuesSchema'];
      /** @description Steps of the workflow at the time this version was deployed */
      steps: components['schemas']['StepSchema'][];
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
      created_by?: components['schemas']['UserPublicSchema'];
      /**
       * Format: date
       * @description Date when the version was deployed
       */
      created_at: string | null;
      /** @description Unique key for the workflow version */
      key: string;
      input: components['schemas']['InputDefinitionSchema'];
      input_default: components['schemas']['InputValuesSchema'];
      /** @description Steps of the workflow at the time this version was deployed */
      steps: components['schemas']['StepSchema'][];
    };
    /** @description Result of the run */
    RunResultSchema: unknown;
    RuntimeLogs: unknown[];
    /** @description Detailed information about the step run */
    RunStepOutputSchema:
      | {
          /**
           * @description Status of the step run, must be RUNNING
           * @enum {string}
           */
          status: 'RUNNING';
          /**
           * @description Key of the step run
           * @example STEP_1
           */
          key: string;
          /** @description Output of the step run */
          output?: unknown;
          output_logs?: components['schemas']['RuntimeLogs'];
          /** @description Timestamp of when the step run started */
          start?: number;
        }
      | {
          /**
           * @description Status of the step run, must be CANCELLED
           * @enum {string}
           */
          status: 'CANCELLED';
          /**
           * @description Key of the step run
           * @example STEP_1
           */
          key: string;
          /** @description Output of the step run */
          output?: unknown;
          output_logs?: components['schemas']['RuntimeLogs'];
          /** @description Timestamp of when the step run started */
          start?: number;
          /** @description Timestamp of when the step run ended */
          end: number;
          /** @description Error message if the step run failed */
          error?: string;
        }
      | {
          /**
           * @description Status of the step run, must be SKIPPED
           * @enum {string}
           */
          status: 'SKIPPED';
          /**
           * @description Key of the step run
           * @example STEP_1
           */
          key: string;
          /** @description Output of the step run */
          output?: unknown;
          output_logs?: components['schemas']['RuntimeLogs'];
          /** @description Timestamp of when the step run started */
          start?: number;
          /** @description Timestamp of when the step run ended */
          end: number;
        }
      | {
          /**
           * @description Status of the step run, must be COMPLETED
           * @enum {string}
           */
          status: 'COMPLETED';
          /**
           * @description Key of the step run
           * @example STEP_1
           */
          key: string;
          /** @description Output of the step run */
          output?: unknown;
          output_logs?: components['schemas']['RuntimeLogs'];
          /** @description Timestamp of when the step run started */
          start?: number;
          /** @description Timestamp of when the step run ended */
          end: number;
        }
      | {
          /**
           * @description Status of the step run, must be FAILED
           * @enum {string}
           */
          status: 'FAILED';
          /**
           * @description Key of the step run
           * @example STEP_1
           */
          key: string;
          /** @description Output of the step run */
          output?: unknown;
          output_logs?: components['schemas']['RuntimeLogs'];
          /** @description Timestamp of when the step run started */
          start?: number;
          /** @description Timestamp of when the step run ended */
          end: number;
          /** @description Error message if the step run failed */
          error?: string;
        };
    /** @description Output of the run */
    RunOutputSchema: {
      [key: string]: components['schemas']['RunStepOutputSchema'];
    } | null;
    /** @description Draft version of the workflow */
    WorkflowVersionDraftSchema: {
      /** @description Unique key for the workflow version */
      key: string;
      input: components['schemas']['InputDefinitionSchema'];
      input_default: components['schemas']['InputValuesSchema'];
      /** @description Steps of the workflow at the time this version was deployed */
      steps: components['schemas']['StepSchema'][];
    } | null;
    CreditsUsageSchema: {
      total: number;
    };
    /** @description Credits usage of the run */
    CreditsRunUsageSchema: components['schemas']['CreditsUsageSchema'] & {
      steps: {
        [key: string]: components['schemas']['CreditsUsageSchema'];
      };
    };
    RunSchema: {
      /** @description Unique identifier for the run */
      id: string;
      result?: components['schemas']['RunResultSchema'];
      input: components['schemas']['InputValuesSchema'] & unknown;
      output: components['schemas']['RunOutputSchema'];
      /**
       * @description Status of the run
       * @example RUNNING
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
       * @description Origin of the run
       * @example WORKFLOW
       * @enum {string}
       */
      origin: 'WORKFLOW' | 'RECORD' | 'TEST';
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
      workflow_version_draft: components['schemas']['WorkflowVersionDraftSchema'];
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
        created_by?: components['schemas']['UserPublicSchema'];
        /**
         * Format: date
         * @description Date when the version was deployed
         */
        created_at: string | null;
        /** @description Unique key for the workflow version */
        key: string;
        input: components['schemas']['InputDefinitionSchema'];
        input_default: components['schemas']['InputValuesSchema'];
        /** @description Steps of the workflow at the time this version was deployed */
        steps: components['schemas']['StepSchema'][];
      } | null;
      /** @description ID of the associated collection */
      collection_id?: string;
      /** @description ID of the associated record */
      record_id?: string;
      /** @description Version number of the workflow */
      version?: number;
      usage?: components['schemas']['CreditsRunUsageSchema'];
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
    CreateRunSchema: {
      input?: components['schemas']['InputValuesSchema'] & unknown;
      /** @description Indicates if the run should stream output to the client as it becomes available */
      stream?: boolean;
      /** @description ID of the workflow version to run. Also you can use `latest`, `draft` or `version number` to run a specific version */
      workflow_version_id?: ('draft' | 'latest') | string | number;
    };
    /** @description Data to replay a workflow step */
    ReplayRunSchema: {
      /** @description Key of the workflow step to replay */
      stepKey: string;
      /** @description Flag to indicate if the replay should be streamed */
      stream?: boolean;
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
      output_logs?: components['schemas']['RuntimeLogs'];
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
      input?: components['schemas']['InputValuesSchema'] & unknown;
      input_default?: components['schemas']['InputValuesSchema'] & unknown;
      input_context?: components['schemas']['InputValuesSchema'] & unknown;
      /** @description List of expectations that will be executed for the workflow test */
      expectations?: components['schemas']['WorkflowTestExpectationItemSchema'][];
      /** @description Number of passing expectations */
      expectations_passing_count: number;
      /** @description Number of failing expectations */
      expectations_failing_count: number;
      /** @description Identifier of the associated workflow */
      workflow_id: string;
      run: components['schemas']['RunSchema'] & unknown;
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
      input?: components['schemas']['InputValuesSchema'] & unknown;
      input_default?: components['schemas']['InputValuesSchema'] & unknown;
      input_context?: components['schemas']['InputValuesSchema'] & unknown;
      /** @description Updated list of expectations for the workflow test */
      expectations?: components['schemas']['WorkflowTestExpectationItemSchema'][];
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
    WorkflowTestEventSchema:
      | {
          /** @enum {string} */
          type: 'test';
          data: components['schemas']['WorkflowTestSchema'];
        }
      | {
          /** @enum {string} */
          type: 'stats';
          data: components['schemas']['WorkflowTestStatsSchema'] & unknown;
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
      workflow_input_default?: components['schemas']['InputValuesSchema'] &
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
      destination_paths: string[];
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
      | components['schemas']['MappingFieldDocumentSchema']
      | components['schemas']['MappingFieldPropertySchema'];
    /** @description Configuration for an Encompass trigger */
    TriggerEncompassConfigSchema: {
      /**
       * @description Type of the trigger connection (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'ENCOMPASS';
      /** @description Mappings of the trigger */
      mappings?: components['schemas']['TriggerMappingSchema'][];
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
      mappings?: components['schemas']['TriggerMappingSchema'][];
    };
    /** @description Configuration of the trigger */
    TriggerConfigSchema:
      | components['schemas']['TriggerEncompassConfigSchema']
      | components['schemas']['TriggerPersonaConfigSchema'];
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
      config: components['schemas']['TriggerConfigSchema'];
      /** @description Whether the trigger is enabled or not */
      enabled: boolean;
      /**
       * @description Unique identifier of the connected service
       * @example pro_xxx
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
      app: components['schemas']['AppPublicSchema'] & unknown;
      /** @description Configuration of the collection. Including rules, triggers, etc. */
      config: {
        /** @description Unique identifier for the collection configuration */
        id: string;
        /** @description List of rules associated with the collection */
        rules: components['schemas']['RuleSchema'][];
        /** @description List of input field mappings of the collection */
        mappings: components['schemas']['CollectionConfigMappingSchema'][];
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
      /**
       * @description Who can see this collection
       * @example PUBLIC
       * @enum {string}
       */
      visibility: 'PUBLIC' | 'PRIVATE';
      /** @description Tags attached to this collection */
      tags: components['schemas']['TagSchema'][];
      /** @description How many records are in the collection */
      records_count: number;
      /** @description Has the collection been deleted */
      deleted: boolean;
      /** @description Triggers associated with the collection */
      triggers: components['schemas']['TriggerSchema'][];
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
    ExtendedRuleSchema: components['schemas']['RuleSchema'] & {
      workflow: components['schemas']['WorkflowSchema'];
      workflow_version: components['schemas']['WorkflowVersionSchema'];
    };
    /** @description Detailed information about a collection including its config (rules, triggers, etc.) */
    ExtendedCollectionSchema: {
      /** @description Unique identifier for the collection */
      id: string;
      /** @description Name of the collection */
      name: string;
      /** @description Description of the collection */
      description: string | null;
      app: components['schemas']['AppPublicSchema'] & unknown;
      /**
       * @description Who can see this collection
       * @example PUBLIC
       * @enum {string}
       */
      visibility: 'PUBLIC' | 'PRIVATE';
      /** @description Tags attached to this collection */
      tags: components['schemas']['TagSchema'][];
      /** @description How many records are in the collection */
      records_count: number;
      /** @description Has the collection been deleted */
      deleted: boolean;
      /** @description Triggers associated with the collection */
      triggers: components['schemas']['TriggerSchema'][];
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
        mappings: components['schemas']['CollectionConfigMappingSchema'][];
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
        rules: components['schemas']['ExtendedRuleSchema'][];
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
       * @description Who should be able to see this collection
       * @example PUBLIC
       * @enum {string}
       */
      visibility?: 'PUBLIC' | 'PRIVATE';
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
     *       "visibility": "PRIVATE",
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
       * @description Who should be able to see this collection
       * @example PUBLIC
       * @enum {string}
       */
      visibility?: 'PUBLIC' | 'PRIVATE';
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
    CreditsRecordUsageSchema: components['schemas']['CreditsUsageSchema'] & {
      rules: {
        [key: string]: components['schemas']['CreditsRunUsageSchema'];
      };
    };
    IncludeRecordRulePropsSchema: 'all'[];
    IncludeRecordRuleSchema: {
      verbose?: components['schemas']['IncludeRecordRulePropsSchema'];
    };
    /** @description Detailed information about a record rule */
    RecordRuleSchema: components['schemas']['IncludeRecordRuleSchema'] & {
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
      result?: components['schemas']['RunResultSchema'] & unknown;
      /**
       * @description Error message if the rule execution failed
       * @example Invalid input data
       */
      error?: string;
      input: components['schemas']['InputValuesSchema'] & unknown;
      /** @description Details of the rule execution workflow run */
      run: {
        /** @description Unique identifier for the run */
        id: string;
        result?: components['schemas']['RunResultSchema'];
        input: components['schemas']['InputValuesSchema'] & unknown;
        output: components['schemas']['RunOutputSchema'];
        /**
         * @description Status of the run
         * @example RUNNING
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
         * @description Origin of the run
         * @example WORKFLOW
         * @enum {string}
         */
        origin: 'WORKFLOW' | 'RECORD' | 'TEST';
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
        workflow_version_draft: components['schemas']['WorkflowVersionDraftSchema'];
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
          created_by?: components['schemas']['UserPublicSchema'];
          /**
           * Format: date
           * @description Date when the version was deployed
           */
          created_at: string | null;
          /** @description Unique key for the workflow version */
          key: string;
          input: components['schemas']['InputDefinitionSchema'];
          input_default: components['schemas']['InputValuesSchema'];
          /** @description Steps of the workflow at the time this version was deployed */
          steps: components['schemas']['StepSchema'][];
        } | null;
        /** @description ID of the associated collection */
        collection_id?: string;
        /** @description ID of the associated record */
        record_id?: string;
        /** @description Version number of the workflow */
        version?: number;
        usage?: components['schemas']['CreditsRunUsageSchema'];
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
      rules: components['schemas']['RuleSchema'][];
      /** @description List of input field mappings of the collection */
      mappings: components['schemas']['CollectionConfigMappingSchema'][];
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
      usage?: components['schemas']['CreditsRecordUsageSchema'];
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
        [key: string]: components['schemas']['RecordRuleSchema'];
      };
      config: components['schemas']['CollectionConfigSchema'];
      /** @description Name of the collection this record belongs to */
      collection_name: string;
      /**
       * @description Unique identifier of the collection this record belongs to
       * @example col_xxx
       */
      collection_id: string;
      created_by: components['schemas']['UserPublicSchema'] & unknown;
      entity: components['schemas']['LimitedTriggerEntitySchema'];
      /** @description Tags associated with this record */
      tags: components['schemas']['TagSchema'][];
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
      mappings: components['schemas']['CollectionConfigMappingSchema'][];
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
      rules: components['schemas']['ExtendedRuleSchema'][];
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
      data: components['schemas']['TriggerEntityDataSchema'];
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
      usage?: components['schemas']['CreditsRecordUsageSchema'];
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
        [key: string]: components['schemas']['RecordRuleSchema'];
      };
      /** @description Name of the collection this record belongs to */
      collection_name: string;
      /**
       * @description Unique identifier of the collection this record belongs to
       * @example col_xxx
       */
      collection_id: string;
      created_by: components['schemas']['UserPublicSchema'] & unknown;
      /** @description Tags associated with this record */
      tags: components['schemas']['TagSchema'][];
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
      config: components['schemas']['ExtendedCollectionConfigSchema'];
      entity: components['schemas']['TriggerEntitySchema'];
    };
    /** @description The rules to be applied to the record */
    UpdateRecordRulesSchema: {
      [key: string]: components['schemas']['InputValuesSchema'] & unknown;
    };
    CreateRecordSchema: {
      /**
       * @description Name of the record (up to 128 characters)
       * @example New Important Record
       */
      name?: string | null;
      rules?: components['schemas']['UpdateRecordRulesSchema'];
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
      rules?: components['schemas']['UpdateRecordRulesSchema'];
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
      errors?: components['schemas']['RecordRuleErrorSchema'][];
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
export type QueryWorkflowsSchema =
  components['schemas']['QueryWorkflowsSchema'];
export type QueryWorkflowsDiscoverSchema =
  components['schemas']['QueryWorkflowsDiscoverSchema'];
export type IncludeRunPropsSchema =
  components['schemas']['IncludeRunPropsSchema'];
export type IncludeRunSchema = components['schemas']['IncludeRunSchema'];
export type QueryRunSchema = components['schemas']['QueryRunSchema'];
export type QueryWorkflowExpectationsSchema =
  components['schemas']['QueryWorkflowExpectationsSchema'];
export type IncludeTestPropsSchema =
  components['schemas']['IncludeTestPropsSchema'];
export type IncludeTestSchema = components['schemas']['IncludeTestSchema'];
export type QueryWorkflowTestsSchema =
  components['schemas']['QueryWorkflowTestsSchema'];
export type QueryCollectionsSchema =
  components['schemas']['QueryCollectionsSchema'];
export type IncludeRecordPropsSchema =
  components['schemas']['IncludeRecordPropsSchema'];
export type IncludeRecordSchema = components['schemas']['IncludeRecordSchema'];
export type QueryRecordsSchema = components['schemas']['QueryRecordsSchema'];
export type DocumentContentSchema =
  components['schemas']['DocumentContentSchema'];
export type DocumentImageSchema = components['schemas']['DocumentImageSchema'];
export type DocumentSchema = components['schemas']['DocumentSchema'];
export type FileSchema = components['schemas']['FileSchema'];
export type FileDataSchema = components['schemas']['FileDataSchema'];
export type CreateFileSchema = components['schemas']['CreateFileSchema'];
export type TestConnectionConnectionResultSchema =
  components['schemas']['TestConnectionConnectionResultSchema'];
export type ConnectionEncompassConfigSchema =
  components['schemas']['ConnectionEncompassConfigSchema'];
export type ConnectionPersonaConfigSchema =
  components['schemas']['ConnectionPersonaConfigSchema'];
export type ConnectionConfigSchema =
  components['schemas']['ConnectionConfigSchema'];
export type TestConnectionConnectionSchema =
  components['schemas']['TestConnectionConnectionSchema'];
export type ConnectionSchema = components['schemas']['ConnectionSchema'];
export type CreateConnectionSchema =
  components['schemas']['CreateConnectionSchema'];
export type UpdateConnectionSchema =
  components['schemas']['UpdateConnectionSchema'];
export type AppVariableSchema = components['schemas']['AppVariableSchema'];
export type RunStepSchema = components['schemas']['RunStepSchema'];
export type StepKeySchema = components['schemas']['StepKeySchema'];
export type StepBranchConditionSchema =
  components['schemas']['StepBranchConditionSchema'];
export type StepBranchSchema = components['schemas']['StepBranchSchema'];
export type ModelTextSystemMessageSchema =
  components['schemas']['ModelTextSystemMessageSchema'];
export type ModelTextMessageTextSchema =
  components['schemas']['ModelTextMessageTextSchema'];
export type ModelTextAssistantMessageSchema =
  components['schemas']['ModelTextAssistantMessageSchema'];
export type ModelTextMessageImageSchema =
  components['schemas']['ModelTextMessageImageSchema'];
export type ModelTextUserMessageSchema =
  components['schemas']['ModelTextUserMessageSchema'];
export type ModelTextMessageSchema =
  components['schemas']['ModelTextMessageSchema'];
export type ModelTextResponseFormatSchema =
  components['schemas']['ModelTextResponseFormatSchema'];
export type ModelTextSchema = components['schemas']['ModelTextSchema'];
export type ModelCloudflareSchema =
  components['schemas']['ModelCloudflareSchema'];
export type ModelOpenAiSchema = components['schemas']['ModelOpenAISchema'];
export type ModelAnthropicSchema =
  components['schemas']['ModelAnthropicSchema'];
export type ModelGoogleSchema = components['schemas']['ModelGoogleSchema'];
export type ModelXSchema = components['schemas']['ModelXSchema'];
export type ModelProviderSchema = components['schemas']['ModelProviderSchema'];
export type StepModelSchema = components['schemas']['StepModelSchema'];
export type StepCodeSchema = components['schemas']['StepCodeSchema'];
export type StepHttpRequestSchema =
  components['schemas']['StepHttpRequestSchema'];
export type StepBrowserSchema = components['schemas']['StepBrowserSchema'];
export type WorkflowInputValuesSchema =
  components['schemas']['WorkflowInputValuesSchema'];
export type StepWorkflowSchema = components['schemas']['StepWorkflowSchema'];
export type FileServiceSchema = components['schemas']['FileServiceSchema'];
export type EncompassPushServiceSchema =
  components['schemas']['EncompassPushServiceSchema'];
export type ServiceSchema = components['schemas']['ServiceSchema'];
export type StepServiceSchema = components['schemas']['StepServiceSchema'];
export type StepSchema = components['schemas']['StepSchema'];
export type CreateRunStepSchema = components['schemas']['CreateRunStepSchema'];
export type AppPublicSchema = components['schemas']['AppPublicSchema'];
export type UserPublicSchema = components['schemas']['UserPublicSchema'];
export type FieldFileSchema = components['schemas']['FieldFileSchema'];
export type FieldNumberSchema = components['schemas']['FieldNumberSchema'];
export type FieldStringSchema = components['schemas']['FieldStringSchema'];
export type FieldBooleanSchema = components['schemas']['FieldBooleanSchema'];
export type FieldDateSchema = components['schemas']['FieldDateSchema'];
export type FieldSelectOptionSchema =
  components['schemas']['FieldSelectOptionSchema'];
export type FieldSelectSchema = components['schemas']['FieldSelectSchema'];
export type FieldObjectSchema = components['schemas']['FieldObjectSchema'];
export type InputSchema = components['schemas']['InputSchema'];
export type InputDefinitionSchema =
  components['schemas']['InputDefinitionSchema'];
export type InputValuesSchema = components['schemas']['InputValuesSchema'];
export type TagSchema = components['schemas']['TagSchema'];
export type WorkflowTestStatsSchema =
  components['schemas']['WorkflowTestStatsSchema'];
export type WorkflowSchema = components['schemas']['WorkflowSchema'];
export type WorkflowVersionSchema =
  components['schemas']['WorkflowVersionSchema'];
export type RunResultSchema = components['schemas']['RunResultSchema'];
export type RuntimeLogs = components['schemas']['RuntimeLogs'];
export type RunStepOutputSchema = components['schemas']['RunStepOutputSchema'];
export type RunOutputSchema = components['schemas']['RunOutputSchema'];
export type WorkflowVersionDraftSchema =
  components['schemas']['WorkflowVersionDraftSchema'];
export type CreditsUsageSchema = components['schemas']['CreditsUsageSchema'];
export type CreditsRunUsageSchema =
  components['schemas']['CreditsRunUsageSchema'];
export type RunSchema = components['schemas']['RunSchema'];
export type CreateRunSchema = components['schemas']['CreateRunSchema'];
export type ReplayRunSchema = components['schemas']['ReplayRunSchema'];
export type WorkflowExpectationSchema =
  components['schemas']['WorkflowExpectationSchema'];
export type CreateWorkflowExpectationSchema =
  components['schemas']['CreateWorkflowExpectationSchema'];
export type UpdateWorkflowExpectationSchema =
  components['schemas']['UpdateWorkflowExpectationSchema'];
export type WorkflowTestExpectationItemSchema =
  components['schemas']['WorkflowTestExpectationItemSchema'];
export type WorkflowTestSchema = components['schemas']['WorkflowTestSchema'];
export type CreateWorkflowTestSchema =
  components['schemas']['CreateWorkflowTestSchema'];
export type RunWorkflowTestsSchema =
  components['schemas']['RunWorkflowTestsSchema'];
export type UpdateWorkflowTestSchema =
  components['schemas']['UpdateWorkflowTestSchema'];
export type RunWorkflowTestSchema =
  components['schemas']['RunWorkflowTestSchema'];
export type WorkflowTestEventSchema =
  components['schemas']['WorkflowTestEventSchema'];
export type RuleSchema = components['schemas']['RuleSchema'];
export type CollectionConfigMappingSchema =
  components['schemas']['CollectionConfigMappingSchema'];
export type MappingFieldDocumentSchema =
  components['schemas']['MappingFieldDocumentSchema'];
export type MappingFieldPropertySchema =
  components['schemas']['MappingFieldPropertySchema'];
export type TriggerMappingSchema =
  components['schemas']['TriggerMappingSchema'];
export type TriggerEncompassConfigSchema =
  components['schemas']['TriggerEncompassConfigSchema'];
export type TriggerPersonaConfigSchema =
  components['schemas']['TriggerPersonaConfigSchema'];
export type TriggerConfigSchema = components['schemas']['TriggerConfigSchema'];
export type TriggerSchema = components['schemas']['TriggerSchema'];
export type CollectionSchema = components['schemas']['CollectionSchema'];
export type ExtendedRuleSchema = components['schemas']['ExtendedRuleSchema'];
export type ExtendedCollectionSchema =
  components['schemas']['ExtendedCollectionSchema'];
export type CreateCollectionSchema =
  components['schemas']['CreateCollectionSchema'];
export type UpdateCollectionSchema =
  components['schemas']['UpdateCollectionSchema'];
export type CreditsRecordUsageSchema =
  components['schemas']['CreditsRecordUsageSchema'];
export type IncludeRecordRulePropsSchema =
  components['schemas']['IncludeRecordRulePropsSchema'];
export type IncludeRecordRuleSchema =
  components['schemas']['IncludeRecordRuleSchema'];
export type RecordRuleSchema = components['schemas']['RecordRuleSchema'];
export type CollectionConfigSchema =
  components['schemas']['CollectionConfigSchema'];
export type LimitedTriggerEntitySchema =
  components['schemas']['LimitedTriggerEntitySchema'];
export type RecordSchema = components['schemas']['RecordSchema'];
export type ExtendedCollectionConfigSchema =
  components['schemas']['ExtendedCollectionConfigSchema'];
export type TriggerEntityDataSchema =
  components['schemas']['TriggerEntityDataSchema'];
export type TriggerEntitySchema = components['schemas']['TriggerEntitySchema'];
export type ExtendedRecordSchema =
  components['schemas']['ExtendedRecordSchema'];
export type UpdateRecordRulesSchema =
  components['schemas']['UpdateRecordRulesSchema'];
export type CreateRecordSchema = components['schemas']['CreateRecordSchema'];
export type UpdateRecordSchema = components['schemas']['UpdateRecordSchema'];
export type RecordRuleErrorSchema =
  components['schemas']['RecordRuleErrorSchema'];
export type RecordStatusSchema = components['schemas']['RecordStatusSchema'];
export type RunRecordSchema = components['schemas']['RunRecordSchema'];
export type WebhookSchema = components['schemas']['WebhookSchema'];
export type CreateWebhookSchema = components['schemas']['CreateWebhookSchema'];
export type UpdateWebhookSchema = components['schemas']['UpdateWebhookSchema'];
export type $defs = Record<string, never>;
export type operations = Record<string, never>;

export type APIMethodParams = {
  method: string;
  endpoint: string;
  params?: Record<string, unknown>;
  body?: unknown;
  query?: Record<string, unknown>;
};
export type APIMethods = ReturnType<typeof createAPI>;
export const createAPI = (callAPI: (params: APIMethodParams) => unknown) => ({
  apps: {
    files: {
      list: (
        query?: paths['/apps/{app_id}/files']['get']['parameters']['query'],
      ): Promise<FileSchema[]> => {
        return callAPI({
          method: 'get',
          endpoint: '/apps/{app_id}/files',
          query,
        }) as Promise<FileSchema[]>;
      },
      create: (body: CreateFileSchema): Promise<FileSchema> => {
        return callAPI({
          method: 'post',
          endpoint: '/apps/{app_id}/files',
          body,
        }) as Promise<FileSchema>;
      },
      get: (fileId: string): Promise<FileSchema> => {
        return callAPI({
          method: 'get',
          endpoint: '/apps/{app_id}/files/{file_id}',
          params: {file_id: fileId},
        }) as Promise<FileSchema>;
      },
      delete: (fileId: string): Promise<void> => {
        return callAPI({
          method: 'delete',
          endpoint: '/apps/{app_id}/files/{file_id}',
          params: {file_id: fileId},
        }) as Promise<void>;
      },
      cancel: {
        create: (fileId: string): Promise<FileSchema> => {
          return callAPI({
            method: 'post',
            endpoint: '/apps/{app_id}/files/{file_id}/cancel',
            params: {file_id: fileId},
          }) as Promise<FileSchema>;
        },
      },
    },
    connections: {
      test: {
        create: (
          body: TestConnectionConnectionSchema,
        ): Promise<TestConnectionConnectionResultSchema> => {
          return callAPI({
            method: 'post',
            endpoint: '/apps/{app_id}/connections/test',
            body,
          }) as Promise<TestConnectionConnectionResultSchema>;
        },
      },
      list: (
        query?: paths['/apps/{app_id}/connections']['get']['parameters']['query'],
      ): Promise<ConnectionSchema[]> => {
        return callAPI({
          method: 'get',
          endpoint: '/apps/{app_id}/connections',
          query,
        }) as Promise<ConnectionSchema[]>;
      },
      create: (body: CreateConnectionSchema): Promise<ConnectionSchema> => {
        return callAPI({
          method: 'post',
          endpoint: '/apps/{app_id}/connections',
          body,
        }) as Promise<ConnectionSchema>;
      },
      get: (connectionId: string): Promise<ConnectionSchema> => {
        return callAPI({
          method: 'get',
          endpoint: '/apps/{app_id}/connections/{connection_id}',
          params: {connection_id: connectionId},
        }) as Promise<ConnectionSchema>;
      },
      update: (
        connectionId: string,
        body: UpdateConnectionSchema,
      ): Promise<ConnectionSchema> => {
        return callAPI({
          method: 'patch',
          endpoint: '/apps/{app_id}/connections/{connection_id}',
          params: {connection_id: connectionId},
          body,
        }) as Promise<ConnectionSchema>;
      },
      delete: (connectionId: string): Promise<void> => {
        return callAPI({
          method: 'delete',
          endpoint: '/apps/{app_id}/connections/{connection_id}',
          params: {connection_id: connectionId},
        }) as Promise<void>;
      },
    },
    variables: {
      list: (
        body: AppVariableSchema[],
        query?: paths['/apps/{app_id}/variables']['patch']['parameters']['query'],
      ): Promise<AppVariableSchema[]> => {
        return callAPI({
          method: 'patch',
          endpoint: '/apps/{app_id}/variables',
          query,
          body,
        }) as Promise<AppVariableSchema[]>;
      },
    },
    runs: {
      step: {
        create: (body: CreateRunStepSchema): Promise<RunStepSchema> => {
          return callAPI({
            method: 'post',
            endpoint: '/apps/{app_id}/runs/step',
            body,
          }) as Promise<RunStepSchema>;
        },
      },
    },
    workflows: {
      discover: {
        list: (
          query?: paths['/apps/{app_id}/workflows/discover']['get']['parameters']['query'],
        ): Promise<WorkflowSchema[]> => {
          return callAPI({
            method: 'get',
            endpoint: '/apps/{app_id}/workflows/discover',
            query,
          }) as Promise<WorkflowSchema[]>;
        },
        get: (workflowId: string): Promise<WorkflowSchema> => {
          return callAPI({
            method: 'get',
            endpoint: '/apps/{app_id}/workflows/discover/{workflow_id}',
            params: {workflow_id: workflowId},
          }) as Promise<WorkflowSchema>;
        },
        versions: {
          get: (
            workflowId: string,
            versionIdOrVersionNumber: string,
          ): Promise<WorkflowVersionSchema> => {
            return callAPI({
              method: 'get',
              endpoint:
                '/apps/{app_id}/workflows/discover/{workflow_id}/versions/{version_id_or_version_number}',
              params: {
                workflow_id: workflowId,
                version_id_or_version_number: versionIdOrVersionNumber,
              },
            }) as Promise<WorkflowVersionSchema>;
          },
        },
        runs: {
          create: (
            workflowId: string,
            body: CreateRunSchema,
            query?: paths['/apps/{app_id}/workflows/discover/{workflow_id}/runs']['post']['parameters']['query'],
          ): Promise<RunSchema> => {
            return callAPI({
              method: 'post',
              endpoint: '/apps/{app_id}/workflows/discover/{workflow_id}/runs',
              params: {workflow_id: workflowId},
              query,
              body,
            }) as Promise<RunSchema>;
          },
          cancel: {
            create: (
              workflowId: string,
              runId: string,
              query?: paths['/apps/{app_id}/workflows/discover/{workflow_id}/runs/{run_id}/cancel']['post']['parameters']['query'],
            ): Promise<RunSchema> => {
              return callAPI({
                method: 'post',
                endpoint:
                  '/apps/{app_id}/workflows/discover/{workflow_id}/runs/{run_id}/cancel',
                params: {workflow_id: workflowId, run_id: runId},
                query,
              }) as Promise<RunSchema>;
            },
          },
        },
      },
      list: (
        query?: paths['/apps/{app_id}/workflows']['get']['parameters']['query'],
      ): Promise<WorkflowSchema[]> => {
        return callAPI({
          method: 'get',
          endpoint: '/apps/{app_id}/workflows',
          query,
        }) as Promise<WorkflowSchema[]>;
      },
      get: (workflowId: string): Promise<WorkflowSchema> => {
        return callAPI({
          method: 'get',
          endpoint: '/apps/{app_id}/workflows/{workflow_id}',
          params: {workflow_id: workflowId},
        }) as Promise<WorkflowSchema>;
      },
      runs: {
        list: (
          workflowId: string,
          query?: paths['/apps/{app_id}/workflows/{workflow_id}/runs']['get']['parameters']['query'],
        ): Promise<RunSchema[]> => {
          return callAPI({
            method: 'get',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/runs',
            params: {workflow_id: workflowId},
            query,
          }) as Promise<RunSchema[]>;
        },
        create: (
          workflowId: string,
          body: CreateRunSchema,
          query?: paths['/apps/{app_id}/workflows/{workflow_id}/runs']['post']['parameters']['query'],
        ): Promise<RunSchema> => {
          return callAPI({
            method: 'post',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/runs',
            params: {workflow_id: workflowId},
            query,
            body,
          }) as Promise<RunSchema>;
        },
        replay: {
          create: (
            workflowId: string,
            runId: string,
            body: ReplayRunSchema,
            query?: paths['/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}/replay']['post']['parameters']['query'],
          ): Promise<RunSchema> => {
            return callAPI({
              method: 'post',
              endpoint:
                '/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}/replay',
              params: {workflow_id: workflowId, run_id: runId},
              query,
              body,
            }) as Promise<RunSchema>;
          },
        },
        get: (
          workflowId: string,
          runId: string,
          query?: paths['/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}']['get']['parameters']['query'],
        ): Promise<RunSchema> => {
          return callAPI({
            method: 'get',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}',
            params: {workflow_id: workflowId, run_id: runId},
            query,
          }) as Promise<RunSchema>;
        },
        cancel: {
          create: (
            workflowId: string,
            runId: string,
            query?: paths['/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}/cancel']['post']['parameters']['query'],
          ): Promise<RunSchema> => {
            return callAPI({
              method: 'post',
              endpoint:
                '/apps/{app_id}/workflows/{workflow_id}/runs/{run_id}/cancel',
              params: {workflow_id: workflowId, run_id: runId},
              query,
            }) as Promise<RunSchema>;
          },
        },
      },
      tests: {
        expectations: {
          list: (
            workflowId: string,
            query?: paths['/apps/{app_id}/workflows/{workflow_id}/tests/expectations']['get']['parameters']['query'],
          ): Promise<WorkflowExpectationSchema[]> => {
            return callAPI({
              method: 'get',
              endpoint:
                '/apps/{app_id}/workflows/{workflow_id}/tests/expectations',
              params: {workflow_id: workflowId},
              query,
            }) as Promise<WorkflowExpectationSchema[]>;
          },
          create: (
            workflowId: string,
            body: CreateWorkflowExpectationSchema,
          ): Promise<WorkflowExpectationSchema> => {
            return callAPI({
              method: 'post',
              endpoint:
                '/apps/{app_id}/workflows/{workflow_id}/tests/expectations',
              params: {workflow_id: workflowId},
              body,
            }) as Promise<WorkflowExpectationSchema>;
          },
          get: (
            workflowId: string,
            expectationId: string,
          ): Promise<WorkflowExpectationSchema> => {
            return callAPI({
              method: 'get',
              endpoint:
                '/apps/{app_id}/workflows/{workflow_id}/tests/expectations/{expectation_id}',
              params: {workflow_id: workflowId, expectation_id: expectationId},
            }) as Promise<WorkflowExpectationSchema>;
          },
          update: (
            workflowId: string,
            expectationId: string,
            body: UpdateWorkflowExpectationSchema,
          ): Promise<WorkflowExpectationSchema> => {
            return callAPI({
              method: 'patch',
              endpoint:
                '/apps/{app_id}/workflows/{workflow_id}/tests/expectations/{expectation_id}',
              params: {workflow_id: workflowId, expectation_id: expectationId},
              body,
            }) as Promise<WorkflowExpectationSchema>;
          },
          delete: (
            workflowId: string,
            expectationId: string,
          ): Promise<void> => {
            return callAPI({
              method: 'delete',
              endpoint:
                '/apps/{app_id}/workflows/{workflow_id}/tests/expectations/{expectation_id}',
              params: {workflow_id: workflowId, expectation_id: expectationId},
            }) as Promise<void>;
          },
        },
        list: (
          workflowId: string,
          query?: paths['/apps/{app_id}/workflows/{workflow_id}/tests']['get']['parameters']['query'],
        ): Promise<WorkflowTestSchema[]> => {
          return callAPI({
            method: 'get',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/tests',
            params: {workflow_id: workflowId},
            query,
          }) as Promise<WorkflowTestSchema[]>;
        },
        create: (
          workflowId: string,
          body: CreateWorkflowTestSchema,
          query?: paths['/apps/{app_id}/workflows/{workflow_id}/tests']['post']['parameters']['query'],
        ): Promise<WorkflowTestSchema> => {
          return callAPI({
            method: 'post',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/tests',
            params: {workflow_id: workflowId},
            query,
            body,
          }) as Promise<WorkflowTestSchema>;
        },
        stats: {
          get: (workflowId: string): Promise<WorkflowTestStatsSchema> => {
            return callAPI({
              method: 'get',
              endpoint: '/apps/{app_id}/workflows/{workflow_id}/tests/stats',
              params: {workflow_id: workflowId},
            }) as Promise<WorkflowTestStatsSchema>;
          },
        },
        get: (
          workflowId: string,
          testId: string,
          query?: paths['/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}']['get']['parameters']['query'],
        ): Promise<WorkflowTestSchema> => {
          return callAPI({
            method: 'get',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}',
            params: {workflow_id: workflowId, test_id: testId},
            query,
          }) as Promise<WorkflowTestSchema>;
        },
        update: (
          workflowId: string,
          testId: string,
          body: UpdateWorkflowTestSchema,
          query?: paths['/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}']['patch']['parameters']['query'],
        ): Promise<WorkflowTestSchema> => {
          return callAPI({
            method: 'patch',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}',
            params: {workflow_id: workflowId, test_id: testId},
            query,
            body,
          }) as Promise<WorkflowTestSchema>;
        },
        delete: (workflowId: string, testId: string): Promise<void> => {
          return callAPI({
            method: 'delete',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}',
            params: {workflow_id: workflowId, test_id: testId},
          }) as Promise<void>;
        },
        runs: {
          create: (
            workflowId: string,
            testId: string,
            body: RunWorkflowTestSchema,
            query?: paths['/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}/runs']['post']['parameters']['query'],
          ): Promise<WorkflowTestSchema> => {
            return callAPI({
              method: 'post',
              endpoint:
                '/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}/runs',
              params: {workflow_id: workflowId, test_id: testId},
              query,
              body,
            }) as Promise<WorkflowTestSchema>;
          },
        },
        cancel: {
          create: (
            workflowId: string,
            testId: string,
            query?: paths['/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}/cancel']['post']['parameters']['query'],
          ): Promise<WorkflowTestSchema> => {
            return callAPI({
              method: 'post',
              endpoint:
                '/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}/cancel',
              params: {workflow_id: workflowId, test_id: testId},
              query,
            }) as Promise<WorkflowTestSchema>;
          },
        },
        ws: {
          get: (
            workflowId: string,
            testId: string,
          ): Promise<WorkflowTestEventSchema> => {
            return callAPI({
              method: 'get',
              endpoint:
                '/apps/{app_id}/workflows/{workflow_id}/tests/{test_id}/ws',
              params: {workflow_id: workflowId, test_id: testId},
            }) as Promise<WorkflowTestEventSchema>;
          },
        },
      },
      versions: {
        list: (
          workflowId: string,
          query?: paths['/apps/{app_id}/workflows/{workflow_id}/versions']['get']['parameters']['query'],
        ): Promise<WorkflowVersionSchema[]> => {
          return callAPI({
            method: 'get',
            endpoint: '/apps/{app_id}/workflows/{workflow_id}/versions',
            params: {workflow_id: workflowId},
            query,
          }) as Promise<WorkflowVersionSchema[]>;
        },
        get: (
          workflowId: string,
          versionIdOrVersionNumber: string,
        ): Promise<WorkflowVersionSchema> => {
          return callAPI({
            method: 'get',
            endpoint:
              '/apps/{app_id}/workflows/{workflow_id}/versions/{version_id_or_version_number}',
            params: {
              workflow_id: workflowId,
              version_id_or_version_number: versionIdOrVersionNumber,
            },
          }) as Promise<WorkflowVersionSchema>;
        },
      },
    },
    collections: {
      list: (
        query?: paths['/apps/{app_id}/collections']['get']['parameters']['query'],
      ): Promise<CollectionSchema[]> => {
        return callAPI({
          method: 'get',
          endpoint: '/apps/{app_id}/collections',
          query,
        }) as Promise<CollectionSchema[]>;
      },
      create: (
        body: CreateCollectionSchema,
      ): Promise<ExtendedCollectionSchema> => {
        return callAPI({
          method: 'post',
          endpoint: '/apps/{app_id}/collections',
          body,
        }) as Promise<ExtendedCollectionSchema>;
      },
      get: (collectionId: string): Promise<ExtendedCollectionSchema> => {
        return callAPI({
          method: 'get',
          endpoint: '/apps/{app_id}/collections/{collection_id}',
          params: {collection_id: collectionId},
        }) as Promise<ExtendedCollectionSchema>;
      },
      update: (
        collectionId: string,
        body: UpdateCollectionSchema,
      ): Promise<ExtendedCollectionSchema> => {
        return callAPI({
          method: 'patch',
          endpoint: '/apps/{app_id}/collections/{collection_id}',
          params: {collection_id: collectionId},
          body,
        }) as Promise<ExtendedCollectionSchema>;
      },
      delete: (collectionId: string): Promise<void> => {
        return callAPI({
          method: 'delete',
          endpoint: '/apps/{app_id}/collections/{collection_id}',
          params: {collection_id: collectionId},
        }) as Promise<void>;
      },
      records: {
        list: (
          collectionId: string,
          query?: paths['/apps/{app_id}/collections/{collection_id}/records']['get']['parameters']['query'],
        ): Promise<RecordSchema[]> => {
          return callAPI({
            method: 'get',
            endpoint: '/apps/{app_id}/collections/{collection_id}/records',
            params: {collection_id: collectionId},
            query,
          }) as Promise<RecordSchema[]>;
        },
        create: (
          collectionId: string,
          body: CreateRecordSchema,
          query?: paths['/apps/{app_id}/collections/{collection_id}/records']['post']['parameters']['query'],
        ): Promise<ExtendedRecordSchema> => {
          return callAPI({
            method: 'post',
            endpoint: '/apps/{app_id}/collections/{collection_id}/records',
            params: {collection_id: collectionId},
            query,
            body,
          }) as Promise<ExtendedRecordSchema>;
        },
        get: (
          collectionId: string,
          recordId: string,
          query?: paths['/apps/{app_id}/collections/{collection_id}/records/{record_id}']['get']['parameters']['query'],
        ): Promise<ExtendedRecordSchema> => {
          return callAPI({
            method: 'get',
            endpoint:
              '/apps/{app_id}/collections/{collection_id}/records/{record_id}',
            params: {collection_id: collectionId, record_id: recordId},
            query,
          }) as Promise<ExtendedRecordSchema>;
        },
        update: (
          collectionId: string,
          recordId: string,
          body: UpdateRecordSchema,
          query?: paths['/apps/{app_id}/collections/{collection_id}/records/{record_id}']['patch']['parameters']['query'],
        ): Promise<ExtendedRecordSchema> => {
          return callAPI({
            method: 'patch',
            endpoint:
              '/apps/{app_id}/collections/{collection_id}/records/{record_id}',
            params: {collection_id: collectionId, record_id: recordId},
            query,
            body,
          }) as Promise<ExtendedRecordSchema>;
        },
        delete: (collectionId: string, recordId: string): Promise<void> => {
          return callAPI({
            method: 'delete',
            endpoint:
              '/apps/{app_id}/collections/{collection_id}/records/{record_id}',
            params: {collection_id: collectionId, record_id: recordId},
          }) as Promise<void>;
        },
        status: {
          get: (
            collectionId: string,
            recordId: string,
          ): Promise<RecordStatusSchema> => {
            return callAPI({
              method: 'get',
              endpoint:
                '/apps/{app_id}/collections/{collection_id}/records/{record_id}/status',
              params: {collection_id: collectionId, record_id: recordId},
            }) as Promise<RecordStatusSchema>;
          },
        },
        run: {
          create: (
            collectionId: string,
            recordId: string,
            body: RunRecordSchema,
          ): Promise<RecordSchema> => {
            return callAPI({
              method: 'post',
              endpoint:
                '/apps/{app_id}/collections/{collection_id}/records/{record_id}/run',
              params: {collection_id: collectionId, record_id: recordId},
              body,
            }) as Promise<RecordSchema>;
          },
        },
        cancel: {
          create: (
            collectionId: string,
            recordId: string,
          ): Promise<RecordSchema> => {
            return callAPI({
              method: 'post',
              endpoint:
                '/apps/{app_id}/collections/{collection_id}/records/{record_id}/cancel',
              params: {collection_id: collectionId, record_id: recordId},
            }) as Promise<RecordSchema>;
          },
        },
        updateRules: {
          create: (
            collectionId: string,
            recordId: string,
          ): Promise<RecordSchema> => {
            return callAPI({
              method: 'post',
              endpoint:
                '/apps/{app_id}/collections/{collection_id}/records/{record_id}/update-rules',
              params: {collection_id: collectionId, record_id: recordId},
            }) as Promise<RecordSchema>;
          },
        },
        reset: {
          create: (
            collectionId: string,
            recordId: string,
          ): Promise<RecordSchema> => {
            return callAPI({
              method: 'post',
              endpoint:
                '/apps/{app_id}/collections/{collection_id}/records/{record_id}/reset',
              params: {collection_id: collectionId, record_id: recordId},
            }) as Promise<RecordSchema>;
          },
        },
        download: {
          get: (collectionId: string, recordId: string): Promise<void> => {
            return callAPI({
              method: 'get',
              endpoint:
                '/apps/{app_id}/collections/{collection_id}/records/{record_id}/download',
              params: {collection_id: collectionId, record_id: recordId},
            }) as Promise<void>;
          },
        },
      },
    },
    webhooks: {
      list: (
        query?: paths['/apps/{app_id}/webhooks']['get']['parameters']['query'],
      ): Promise<WebhookSchema[]> => {
        return callAPI({
          method: 'get',
          endpoint: '/apps/{app_id}/webhooks',
          query,
        }) as Promise<WebhookSchema[]>;
      },
      create: (body: CreateWebhookSchema): Promise<WebhookSchema> => {
        return callAPI({
          method: 'post',
          endpoint: '/apps/{app_id}/webhooks',
          body,
        }) as Promise<WebhookSchema>;
      },
      update: (
        webhookId: string,
        body: UpdateWebhookSchema,
      ): Promise<WebhookSchema> => {
        return callAPI({
          method: 'patch',
          endpoint: '/apps/{app_id}/webhooks/{webhook_id}',
          params: {webhook_id: webhookId},
          body,
        }) as Promise<WebhookSchema>;
      },
      delete: (webhookId: string): Promise<void> => {
        return callAPI({
          method: 'delete',
          endpoint: '/apps/{app_id}/webhooks/{webhook_id}',
          params: {webhook_id: webhookId},
        }) as Promise<void>;
      },
    },
  },
});
