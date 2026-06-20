import { sva } from "@repo/ui/css";

export const searchStyles = sva({
  slots: ["root", "icon", "input", "submit"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      gap: "sm",
      bg: "surface",
      borderRadius: "full",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "panelBorder",
      transition: "border-color 0.15s, box-shadow 0.15s",
      _focusWithin: {
        borderColor: "accent",
        boxShadow: "focusRing",
      },
    },
    icon: {
      display: "flex",
      alignItems: "center",
      flexShrink: "0",
      color: "textLabel",
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
        color: "textLabel",
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
          width: "100%",
          gap: "10px",
          p: { base: "8px", md: "10px" },
          boxShadow: "card",
        },
        icon: {
          width: "32px",
          height: "32px",
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
          gap: { base: "6px", md: "9px" },
          pl: { base: "12px", md: "16px" },
          pr: { base: "6px", md: "8px" },
          py: { base: "6px", md: "8px" },
        },
        icon: {
          width: { base: "18px", md: "22px" },
          height: { base: "18px", md: "22px" },
          fontSize: { base: "15px", md: "17px" },
        },
        input: {
          fontSize: { base: "13px", md: "14px" },
          fontWeight: "700",
        },
      },
    },
  },
  defaultVariants: { size: "hero" },
});
