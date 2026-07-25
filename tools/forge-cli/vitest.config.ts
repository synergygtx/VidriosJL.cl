import { defineConfig } from "vitest/config";

export default defineConfig({
  // CRITICAL: disable CSS processing. Without this, vitest walks up looking
  // for postcss.config.js and finds the one at the repo root (which requires
  // tailwindcss not installed in tools/forge-cli/). Tests are pure TS, no
  // CSS — explicitly disable.
  css: {
    postcss: {
      plugins: [],
    },
  },
  test: {
    include: ["test/**/*.test.ts"],
    testTimeout: 30_000,
    hookTimeout: 30_000,
    pool: "forks",
    poolOptions: {
      forks: {
        singleFork: true,
      },
    },
    css: false,
  },
});
