import { config } from "@repo/eslint-config/base";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...config,
  {
    files: ["tests/fixtures/**/*.mjs"],
    languageOptions: {
      globals: {
        process: "readonly",
        URL: "readonly",
      },
    },
  },
];
