import {paths, RunOutputSchema, RunSchema} from '../generated/openapi';
import {CastRunStepOutputSchema} from '../types/runs';
import {handleStepStream} from '../utils/runs';

export const STREAM_PARSERS: Partial<
  Record<keyof paths, (current: any, event: any, data: any) => void>
> = {
  '/apps/{app_id}/workflows/{workflow_id}/runs': (
    run: RunSchema,
    event: 'run' | 'step' | 'chunk',
    data: unknown,
  ) => {
    switch (event) {
      case 'run': {
        return data as RunSchema;
      }
      case 'step':
      case 'chunk': {
        const stepKey = (data as CastRunStepOutputSchema).key;

        if (!run) {
          break;
        }

        const step = handleStepStream(
          event,
          data as CastRunStepOutputSchema,
          run.output?.[stepKey] as CastRunStepOutputSchema,
        );

        return {
          ...run,
          output: {
            ...run.output,
            [step.key]: {...step},
          } as RunOutputSchema,
        };
      }
    }
  },

  '/apps/{app_id}/runs/step': (
    step: CastRunStepOutputSchema,
    event: 'step' | 'chunk',
    data: unknown,
  ) => {
    switch (event) {
      case 'step': {
        return data as CastRunStepOutputSchema;
      }
      case 'chunk': {
        if (!step) return;

        step = handleStepStream(
          event,
          data as CastRunStepOutputSchema,
          structuredClone(step),
        );

        return step;
      }
    }
  },
};
