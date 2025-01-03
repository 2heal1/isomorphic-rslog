import type { LOG_TYPES } from './node/constants';

export type LogLevel = 'error' | 'warn' | 'info' | 'log' | 'verbose';
export type ColorFn = (input: string | number | null | undefined | [label: string, style: string]) => string[];

export type LogMessage = unknown;

export interface LogType {
  label?: string;
  level: LogLevel;
  color?: ColorFn;
}

export type LogTypes = Record<string, LogType>
export type LogFunction = (message?: LogMessage, ...args: any[]) => void;
export type Labels = {
  [key in Exclude<LogMethods, 'log'>]?: string;
}

export interface Options {
  level?: LogLevel;
  labels?: Labels;
}

export type LogMethods = keyof typeof LOG_TYPES;

export type Logger = Record<LogMethods, LogFunction> & {
  greet: (message: string) => void;
  level: LogLevel;
  labels: Labels;
  override: (customLogger: Partial<Record<LogMethods, LogFunction>>) => void;
};
