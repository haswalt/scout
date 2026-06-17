import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "./src/openapi-spec.yaml",
  output: {
    path: "./src/client",
    postProcess: ["prettier"],
  },
  plugins: ["@hey-api/client-next"],
});
