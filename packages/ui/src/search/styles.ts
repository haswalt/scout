import { sva } from "@repo/ui/css";

export const searchStyles = sva({
  slots: ["root", "icon", "input", "submit"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      gap: "sm",
      width: "100%",
      bg: "surface",
      borderRadius: "full",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "panelBorder",
      transition: "border-color 0.15s, box-shadow 0.15s",
      _focusWithin: {
        borderColor: "accent",
        boxShadow: "0 0 0 3px token(colors.lilac.200)",
      },
    },
    icon: {
      display: "flex",
      alignItems: "center",
      flexShrink: "0",
      color: "accentSoft",
      width: "32px",
      height: "32px",
    },
    input: {
      flex: "1",
      minWidth: "0",
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "body",
      fontWeight: "600",
      color: "text",
      letterSpacing: "0.01em",
      _placeholder: {
        color: "accentSoft",
      },
    },
    submit: {
      flexShrink: "0",
    },
  },
  variants: {
    size: {
      hero: {
        root: {
          gap: "10px",
          p: { base: "8px", md: "10px" },
          boxShadow: "card",
        },
        icon: {
          pl: { base: "12px", md: "16px" },
          fontSize: { base: "20px", md: "22px" },
        },
        input: {
          fontSize: { base: "16px", md: "18px" },
          px: "6px",
          py: { base: "10px", md: "12px" },
        },
      },
      header: {
        root: {
          gap: "9px",
          pl: "16px",
          pr: "8px",
          py: "8px",
        },
        icon: {
          fontSize: "17px",
        },
        input: {
          fontSize: "14px",
          fontWeight: "700",
        },
      },
    },
  },
  defaultVariants: {
    size: "hero",
  },
});
