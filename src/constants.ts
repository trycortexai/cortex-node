import {Paths, RunOutputSchema, RunSchema} from './openapi';
import {handleStepStream} from './stream';
import {CastRunStepOutputSchema} from './types';

export const APP_LESS_PARAM = 'c';
export const CORTEX_API_URL = 'https://api.withcortex.ai';

export const STREAM_PARSERS = {
      '/apps/{app_id}/workflows/{workflow_id}/runs': (
            run: RunSchema,
            event: 'run' | 'step' | 'chunk',
            data: unknown,
      ): RunSchema => {
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

            return run;
      },

      '/apps/{app_id}/runs/step': (
            step: CastRunStepOutputSchema,
            event: 'step' | 'chunk',
            data: unknown,
      ): CastRunStepOutputSchema => {
            switch (event) {
                  case 'step': {
                        return data as CastRunStepOutputSchema;
                  }
                  case 'chunk': {
                        if (!step) {
                              break;
                        }

                        step = handleStepStream(
                              event,
                              data as CastRunStepOutputSchema,
                              structuredClone(step),
                        );

                        return step;
                  }
            }

            return step;
      },
} satisfies Partial<
      Record<keyof Paths, (current: any, event: any, data: any) => void>
>;

export const STREAM_PARSERS_TYPES = {
      step: STREAM_PARSERS['/apps/{app_id}/runs/step'],
      run: STREAM_PARSERS['/apps/{app_id}/workflows/{workflow_id}/runs'],
};
