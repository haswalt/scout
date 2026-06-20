import { type RecipeVariantProps } from "@repo/ui/css";
import { type ComponentPropsWithoutRef } from "react";

import { type aiSummaryStyles } from "./styles";

type AiSummaryStyleProps = RecipeVariantProps<typeof aiSummaryStyles>;

export type AiSummaryProps = AiSummaryStyleProps & {
  streaming?: boolean;
  summary?: string;
} & ComponentPropsWithoutRef<"div">;
