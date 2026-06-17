import { type RecipeVariantProps } from "@repo/ui/css";
import { type iconTileStyles } from "./styles";
import { type LucideIcon } from "lucide-react";

type IconTileStyleProps = RecipeVariantProps<typeof iconTileStyles>;

export type IconTileProps = IconTileStyleProps & {
  icon: LucideIcon;
};
