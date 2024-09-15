import { type TokenProperties } from '@tokenami/dev';
import config from './tokenami.config.js';

export type Config = typeof config;

declare module '@tokenami/css' {
  interface TokenamiConfig extends Config {}
  interface TokenamiProperties {}
}
