import { type RecipeVariantProps } from "@repo/ui/css";
import { type ComponentPropsWithoutRef } from "react";

import { type cardStyles } from "./styles";

type CardStyleProps = RecipeVariantProps<typeof cardStyles>;

export type CardProps = CardStyleProps & ComponentPropsWithoutRef<"div">;
