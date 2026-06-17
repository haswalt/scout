import { cva } from "@repo/ui/css";

export const buttonStyles = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "sm",
    fontFamily: "body",
    fontWeight: "700",
    lineHeight: "1.1",
    borderRadius: "full",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "transparent",
    cursor: "pointer",
    whiteSpace: "nowrap",
    userSelect: "none",
    minHeight: "44px",
    transition: "background 0.15s, border-color 0.15s, transform 0.1s",
    _active: {
      transform: "scale(0.97)",
    },
    _focusVisible: {
      outline: "2px solid token(colors.accent)",
      outlineOffset: "2px",
    },
    _disabled: {
      opacity: "0.5",
      cursor: "not-allowed",
      transform: "none",
      pointerEvents: "none",
    },
  },
  variants: {
    variant: {
      solid: {
        bg: "accent",
        color: "white",
        _hover: {
          bg: "accentHover",
        },
      },
      chip: {
        bg: "surface",
        color: "accentSoft",
        borderColor: "border",
        fontWeight: "600",
        _hover: {
          borderColor: "panelBorder",
          bg: "lilac.50",
        },
      },
      ghost: {
        bg: "transparent",
        color: "accent",
        _hover: {
          bg: "lilac.100",
        },
      },
    },
    size: {
      sm: {
        minHeight: "36px",
        fontSize: "0.8125rem",
        px: "14px",
        py: "7px",
      },
      md: {
        fontSize: "0.8125rem",
        px: "md",
        py: "sm",
      },
      lg: {
        fontSize: { base: "1rem", md: "1.0625rem" },
        px: { base: "24px", md: "30px" },
        py: { base: "12px", md: "14px" },
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});
