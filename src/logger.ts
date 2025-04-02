const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bold: '\x1b[1m',
};

type LogLevel = 'debug' | 'info' | 'log' | 'warn' | 'error';

const logLevelConfig: Record<LogLevel, {color: string; label: string}> = {
  debug: {color: colors.magenta, label: 'DEBUG'},
  info: {color: colors.blue, label: 'INFO'},
  log: {color: colors.green, label: 'LOG'},
  warn: {color: colors.yellow, label: 'WARN'},
  error: {color: colors.red, label: 'ERROR'},
};

const getTimestamp = (): string => {
  const now = new Date();
  return now.toISOString();
};

const formatLogMessage = (level: LogLevel, message: string): string => {
  const {color, label} = logLevelConfig[level];
  return `${colors.white}[${getTimestamp()}]${colors.reset} ${color}${colors.bold}[${label}]${colors.reset} ${message}`;
};

let instance: Logger | null = null;

export class Logger {
  static getInstance() {
    if (!instance) {
      instance = new Logger();
    }
    return instance;
  }

  debug(message: string, ...args: any[]): void {
    console.debug(formatLogMessage('debug', message), ...args);
  }

  info(message: string, ...args: any[]): void {
    console.info(formatLogMessage('info', message), ...args);
  }

  log(message: string, ...args: any[]): void {
    console.log(formatLogMessage('log', message), ...args);
  }

  warn(message: string, ...args: any[]): void {
    console.warn(formatLogMessage('warn', message), ...args);
  }

  error(message: string, ...args: any[]): void {
    console.error(formatLogMessage('error', message), ...args);
  }
}

export const logger = Logger.getInstance();
