export type LogLevel = 'log' | 'debug' | 'info' | 'warn' | 'error';

export type LogMessage = number | string | Error | null;

export type LogFormatter = (
  input: string | number | null | undefined,
) => string;

export interface LogType {
  label?: string;
  level: LogLevel;
  formatter?: LogFormatter;
}

export type LogFunction = (message?: LogMessage, ...args: any[]) => void;

export interface Options {
  level?: LogLevel;
}
