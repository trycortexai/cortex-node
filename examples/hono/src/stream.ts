import {
  Cortex,
  type CastRunStepOutputSchema,
  type StepModelOutputSchema,
} from '@cortex-ai/sdk';

export const stepStream = async (cortex: Cortex) => {
  try {
    const result = await cortex.apps.runs.step.stream(
      {
        step: {
          type: 'model',
          key: 'MODEL',
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

    console.log('\n\nFull Message: ', stepOutput?.message);
  } catch (error) {
    console.log('Error', error);
  }
};

export const workflowStream = async (cortex: Cortex, workflowId: string) => {
  try {
    const result = await cortex.apps.workflows.runs.stream(
      workflowId,
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

    console.log('\n\nresult: ', JSON.stringify(result, null, 2));
  } catch (error) {
    console.log('Error', error);
  }
};
