import { type RecipeVariantProps } from "@repo/ui/css";
import { type ComponentPropsWithoutRef } from "react";

import { type badgeStyles } from "./styles";

type BadgeStyleProps = RecipeVariantProps<typeof badgeStyles>;

export type BadgeProps = BadgeStyleProps & ComponentPropsWithoutRef<"div">;
