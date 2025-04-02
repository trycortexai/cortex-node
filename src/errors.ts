export class CortexError extends Error {
  constructor(message: unknown) {
    super(JSON.stringify(message));
    this.name = 'CortexError';
  }
}

export class CortexStreamError extends CortexError {
  constructor(message: string) {
    super(message);
    this.name = 'CortexStreamError';
  }
}
