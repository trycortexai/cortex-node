import {
  Cortex,
  type CastRunStepOutputSchema,
  type StepModelOutputSchema,
} from '@cortex-ai/sdk';

const BASE_URL = 'http://localhost';
const API_KEY =
  'de2fca4c954b8a42b9b59d9b1ccd3c5807ad421dc662e1ada1014f92d5cb167a';
const WORKFLOW_ID = 'work_6WBv1mOSKSJPhzF3bekcE4';

export const testStep = async () => {
  try {
    const cortex = new Cortex({
      baseUrl: BASE_URL,
      apiKey: API_KEY,
    });

    const result = await cortex.apps.runs.step.stream(
      {
        step: {
          type: 'model',
          key: 'CODE',
          provider: {
            provider: 'openai',
            model: 'gpt-4o-mini',
            messages: [
              {
                role: 'user',
                content: 'Say hello!',
              },
            ],
          },
        },
      },
      {
        onStream: partial => {
          const stepOutput = partial.output as
            | StepModelOutputSchema
            | undefined;

          console.log('Chunk Message:', stepOutput?.message);
        },
      },
    );

    const stepOutput = result.output as StepModelOutputSchema | undefined;

    console.log('Full Message:', stepOutput?.message);
  } catch (error) {
    console.log('Error', error);
  }
};

export const testWorkflow = async () => {
  try {
    const cortex = new Cortex({
      baseUrl: BASE_URL,
      apiKey: API_KEY,
    });

    const result = await cortex.apps.workflows.runs.stream(
      WORKFLOW_ID,
      {
        input: {
          message: 'Hello, World!',
        },
      },
      {
        onStream: partial => {
          const stepOutput = partial.output
            ?.MODEL as CastRunStepOutputSchema<StepModelOutputSchema>;

          console.log('chunk', stepOutput?.output?.message);
        },
      },
    );

    console.log('result', JSON.stringify(result, null, 2));
  } catch (error) {
    console.log('Error', error);
  }
};
