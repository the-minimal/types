import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ["test.ts"],
        isolate: true,
        coverage: {
            provider: "v8"
        }
    },
});
