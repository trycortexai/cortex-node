import {ErrorResponse} from '../utils/api';

export class APIError extends Error {
  private _error: ErrorResponse;
  status: number;

  constructor(error: ErrorResponse) {
    super(error.message ?? 'Unknown API error');

    this._error = error ?? {
      status: 0,
      message: this.message,
    };

    this.name = 'APIError';
    this.status = this._error.status;
  }

  toString() {
    return JSON.stringify(this._error);
  }
}
