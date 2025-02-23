import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    test: {
        globals: true,
        include: ['**/*.spec.ts', '**/*.test.ts'],
    },
    plugins: [
        tsConfigPaths(),
        swc.vite(),
    ]
});