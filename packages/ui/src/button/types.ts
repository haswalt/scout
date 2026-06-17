import { type RecipeVariantProps } from "@repo/ui/css";
import { type ComponentPropsWithoutRef } from "react";

import { type buttonStyles } from "./styles";

type ButtonStyleProps = RecipeVariantProps<typeof buttonStyles>;

export type ButtonProps = ButtonStyleProps &
  ComponentPropsWithoutRef<"button"> & {
    appName: string;
  };
