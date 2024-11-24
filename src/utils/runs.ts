import {StepModelOutputSchema} from '../types/openapi';
import {CastRunStepOutputSchema} from '../types/runs';

export const handleStepStream = (
  event: 'step' | 'chunk',
  data: CastRunStepOutputSchema,
  currentOutput: CastRunStepOutputSchema,
) => {
  try {
    switch (event) {
      case 'step': {
        return data;
      }
      case 'chunk': {
        // Note: Only step `model` supports `chunk` event at the moment

        const output = (data.output ?? {}) as StepModelOutputSchema;

        // loops support
        if (typeof output.index !== 'undefined') {
          const step = currentOutput as CastRunStepOutputSchema<
            StepModelOutputSchema[]
          >;

          const stepOutput = step.output?.find(e => e.index === output.index);

          output.message = `${stepOutput?.message ?? ''}${output.message ?? ''}`;

          if (!step.output) {
            step.output = [];
          }

          step.output = [
            ...step.output.filter(e => e.index !== output.index),
            output,
          ];

          return step;
        } else {
          const step =
            currentOutput as CastRunStepOutputSchema<StepModelOutputSchema>;

          output.message = `${step.output?.message ?? ''}${output?.message ?? ''}`;

          step.output = output;

          return step;
        }
      }
    }
  } catch (e) {
    console.error('handleStepStream error', e);
    return data;
  }
};
