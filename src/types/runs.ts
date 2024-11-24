import {RunStepOutputSchema} from './openapi';

export type CastRunStepOutputSchema<T = unknown> = Omit<
  RunStepOutputSchema,
  'output'
> & {
  output: T;
};
