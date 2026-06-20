import { sva } from "@repo/ui/css";

export const iconTileStyles = sva({
  slots: ["root"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      color: "accent",
      bg: "panel",
      "& > svg": {
        display: "block",
        flexShrink: "0",
      },
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          width: "38px",
          height: "38px",
          borderRadius: "sm",
          "& > svg": { width: "18px", height: "18px" },
        },
      },
      md: {
        root: {
          width: "44px",
          height: "44px",
          borderRadius: "sm",
          "& > svg": { width: "22px", height: "22px" },
        },
      },
      lg: {
        root: {
          width: "52px",
          height: "52px",
          borderRadius: "md",
          "& > svg": { width: "24px", height: "24px" },
        },
      },
    },
  },
  defaultVariants: { size: "sm" },
});
