import {ErrorResponse} from '../types/api';

export class CortexAPIError extends Error {
  private readonly error: ErrorResponse;
  public readonly status: number;

  constructor(error: ErrorResponse) {
    super(error.message ?? 'Unknown Cortex API error');

    this.error = error ?? {
      status: 0,
      message: this.message,
    };

    this.name = 'CortexAPIError';
    this.status = this.error.status;
  }

  toString() {
    return JSON.stringify(this.error);
  }
}
