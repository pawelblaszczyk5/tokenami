import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/cli.ts'],
  format: ['cjs', 'esm'],
  dts: { banner: '/// <reference types="@tokenami/dev" />' },
  shims: true,
  minify: true,
});
