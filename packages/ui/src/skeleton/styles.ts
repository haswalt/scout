import { cva } from "@repo/ui/css";

export const skeletonStyles = cva({
  base: {
    layerStyle: "skeleton",
    animationStyle: "skeleton",
    borderRadius: "xs",
  },
  variants: {
    shape: {
      text: { height: "1rem", borderRadius: "xs" },
      block: { borderRadius: "md" },
      circle: { borderRadius: "full" },
      pill: { borderRadius: "full" },
    },
  },
  defaultVariants: { shape: "text" },
});
