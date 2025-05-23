import {defineConfig} from 'bunup';

export default defineConfig({
  outDir: 'build',
  entry: ['src/index.ts'],
  minify: true,
  format: ['esm', 'cjs'],
  dts: {
    resolve: true,
  },
  splitting: false,
});
