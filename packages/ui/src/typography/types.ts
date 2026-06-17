import { type RecipeVariantProps } from "@repo/ui/css";
import { type ElementType, type ComponentPropsWithoutRef } from "react";

import { type typographyStyles } from "./styles";

type TypographyStyleProps = RecipeVariantProps<typeof typographyStyles>;

export type TypographyProps<T extends ElementType> = TypographyStyleProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as" | keyof TypographyStyleProps>;
