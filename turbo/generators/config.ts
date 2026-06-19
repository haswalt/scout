import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("component", {
    description: "Create a new UI component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name (e.g. button):",
        filter: (input: string) => input.replace("-", " ").toLowerCase().trim(),
      },
    ],
    actions: [
      {
        type: "addMany",
        destination:
          "{{ turbo.paths.root }}/packages/ui/src/{{kebabCase name}}",
        base: "templates/component",
        templateFiles: "templates/component/**",
      },
    ],
  });
}
