import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        isolate: true,
        coverage: {
            provider: "v8",
            reporter: "json-summary"
        }
    },
});
