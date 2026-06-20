import { sva } from "@repo/ui/css";

export const iconTileStyles = sva({
  slots: ["root", "icon"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      color: "accent",
      bg: "panel",
    },
    icon: {
      display: "block",
      flexShrink: "0",
    },
  },
  variants: {
    size: {
      sm: {
        root: { width: "38px", height: "38px", borderRadius: "sm" },
        icon: { width: "20px", height: "20px", fontSize: "20px" },
      },
      md: {
        root: { width: "44px", height: "44px", borderRadius: "sm" },
        icon: { width: "22px", height: "22px", fontSize: "22px" },
      },
      lg: {
        root: { width: "52px", height: "52px", borderRadius: "md" },
        icon: { width: "24px", height: "24px", fontSize: "24px" },
      },
    },
  },
  defaultVariants: { size: "sm" },
});
