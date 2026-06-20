import { type RecipeVariantProps } from "@repo/ui/css";
import { type iconTileStyles } from "./styles";
import { type ReactNode } from "react";

type IconTileStyleProps = RecipeVariantProps<typeof iconTileStyles>;

export type IconTileProps = IconTileStyleProps & {
  children: ReactNode;
};
