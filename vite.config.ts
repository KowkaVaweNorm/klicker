import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import { visualizer } from 'rollup-plugin-visualizer';
import checker from 'vite-plugin-checker';
import path, { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    visualizer({
      template: 'treemap',
      gzipSize: true,
      emitFile: true,
      open: true,
      filename: 'bundle_stats.html',
    }),
    checker({
      typescript: true,
    }),
  ],
  server: {
    port: 3000,
    open: false,
    host: '0.0.0.0',
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        // includePaths: [resolve(__dirname, './src')],
      },
    },
  },
  resolve: {
    alias: {
      //for css absolute imports
      '@': resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    restoreMocks: true,
    environment: 'jsdom',
    mockReset: true,
    setupFiles: 'src/setupTests',
    coverage: {
      enabled: true,
      provider: 'v8' as const,
      ignoreEmptyLines: true,
      reporter: ['html'],
      include: ['src'],
      reportsDirectory: './reports/vitest-coverage',
    },
  },
});
