import { type RecipeVariantProps } from "@repo/ui/css";
import { type ComponentPropsWithoutRef } from "react";

import { type skeletonStyles } from "./styles";

type SkeletonStyleProps = RecipeVariantProps<typeof skeletonStyles>;

export type SkeletonProps = SkeletonStyleProps &
  ComponentPropsWithoutRef<"div">;
