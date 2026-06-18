import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "./src/openapi-spec.yaml",
  output: {
    path: "./src/client",
    postProcess: ["prettier"],
  },
  plugins: [
    {
      name: "@hey-api/client-next",
      runtimeConfigPath: "./src/config",
    },
  ],
});
