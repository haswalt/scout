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
    icon: {},
  },
  variants: {
    size: {
      sm: {
        root: {
          width: "38px",
          height: "38px",
          borderRadius: "11px",
        },
        icon: {
          width: "30px",
          height: "30px",
        },
      },
      md: {
        root: {
          width: "44px",
          height: "44px",
          borderRadius: "sm",
        },
        icon: {
          width: "38px",
          height: "38px",
        },
      },
      lg: {
        root: {
          width: "52px",
          height: "52px",
          borderRadius: "14px",
        },
        icon: {
          width: "44px",
          height: "44px",
        },
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
