import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import onlyWarn from "eslint-plugin-only-warn";
import unusedImportsPlugin from "eslint-plugin-unused-imports";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
      "unused-imports": unusedImportsPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error", 
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports"
        }
      ]
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ["dist/**"],
  },
];
