import { type RecipeVariantProps } from "@repo/ui/css";
import { type ComponentProps, type ComponentPropsWithoutRef } from "react";

import { type searchStyles } from "./styles";

type SearchStyleProps = RecipeVariantProps<typeof searchStyles>;

export type SearchProps = SearchStyleProps & {
  valid?: boolean;
  readOnly?: boolean;
} & Pick<ComponentProps<"form">, "onSubmit"> &
  Omit<ComponentPropsWithoutRef<"input">, "size">;
