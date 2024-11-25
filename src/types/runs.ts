import {RunStepOutputSchema} from '../generated/openapi';

/**
 * Casted run step output schema with generic output type.
 * @template T Output type (default: unknown)
 * @example `CastRunStepOutputSchema<StepModelOutputSchema>`
 */
export type CastRunStepOutputSchema<T = unknown> = Omit<
  RunStepOutputSchema,
  'output'
> & {
  output: T;
};
