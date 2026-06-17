import { cva } from "@repo/ui/css";

export const skeletonStyles = cva({
  base: {
    animationStyle: "skeleton",
    borderRadius: "7px",
  },
  variants: {
    shape: {
      text: {
        height: "1rem",
        borderRadius: "7px",
      },
      block: {
        borderRadius: "md",
      },
      circle: {
        borderRadius: "full",
      },
      pill: {
        borderRadius: "full",
      },
    },
  },
  defaultVariants: {
    shape: "text",
  },
});
