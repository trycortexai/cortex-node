import {
  Cortex,
  type CastRunStepOutputSchema,
  type StepModelOutputSchema,
} from '@cortex-ai/sdk';

export const stepStreamResponse = async (cortex: Cortex) => {
  try {
    const result = await cortex.apps.runs.step.streamResponse(
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
        onStream: (partial, event) => {
          const stepOutput = partial.output as
            | StepModelOutputSchema
            | undefined;

          console.log(event, stepOutput?.message);
        },
      },
    );

    return result;
  } catch (error) {
    console.log('Error', error);
    return error?.toString() ?? 'Error';
  }
};

export const worklflowStreamResponse = async (
  cortex: Cortex,
  workflowId: string,
) => {
  try {
    const result = await cortex.apps.workflows.runs.streamResponse(
      workflowId,
      {
        input: {
          message: 'Hello, World!',
        },
      },
      {
        onStream: (partial, event) => {
          const stepOutput = partial.output
            ?.MODEL as CastRunStepOutputSchema<StepModelOutputSchema>;

          console.log(event, stepOutput?.output?.message);
        },
      },
    );

    return result;
  } catch (error) {
    console.log('Error', error);
    return error?.toString() ?? 'Error';
  }
};
