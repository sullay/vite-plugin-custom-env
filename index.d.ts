import type { Plugin } from 'vite';
type EnvList = string[];
type EnvMap = Record<string, any>;
export declare function VitePluginEnv(envs: EnvList | EnvMap | undefined): Plugin;
export {};
