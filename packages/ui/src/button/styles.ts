import { cva } from "@repo/ui/css";

export const buttonStyles = cva({
  base: {
    alignItems: "center",
    borderRadius: "full",
    cursor: "pointer",
    display: "inline-flex",
    fontFamily: "body",
    fontWeight: "700",
    gap: "sm",
    justifyContent: "center",
    lineHeight: "1",
    transitionDuration: "150ms",
    transitionProperty: "background-color, border-color, color, box-shadow",
    transitionTimingFunction: "ease",
    _focusVisible: {
      outline: "2px solid token(colors.accent)",
      outlineOffset: "2px",
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: "0.55",
      pointerEvents: "none",
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "accent",
        borderColor: "accent",
        borderWidth: "1px",
        color: "white",
        boxShadow: "marker",
        _hover: {
          backgroundColor: "accentHover",
          borderColor: "accentHover",
        },
      },
      secondary: {
        backgroundColor: "surface",
        borderColor: "border",
        borderWidth: "1px",
        color: "accent",
        _hover: {
          backgroundColor: "panel",
          borderColor: "panelBorder",
        },
      },
      ghost: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderWidth: "1px",
        color: "accent",
        _hover: {
          backgroundColor: "panel",
        },
      },
    },
    size: {
      sm: {
        fontSize: "0.875rem",
        minHeight: "2.25rem",
        paddingInline: "md",
      },
      md: {
        fontSize: "1rem",
        minHeight: "2.75rem",
        paddingInline: "lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});
