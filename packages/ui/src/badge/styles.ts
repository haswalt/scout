import { cva } from "@repo/ui/css";

export const badgeStyles = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    fontFamily: "body",
    fontWeight: "700",
    fontSize: "0.75rem",
    lineHeight: "1",
    px: "10px",
    py: "4px",
    borderRadius: "full",
  },
  variants: {
    tone: {
      accent: {
        color: "accent",
        bg: "panel",
      },
      success: {
        color: "success.fg",
        bg: "success.bg",
      },
      warning: {
        color: "warning.fg",
        bg: "warning.bg",
      },
      danger: {
        color: "danger.fg",
        bg: "danger.bg",
      },
    },
    soft: {
      true: {
        bg: "lilac.100",
        color: "accentSoft",
        borderRadius: "sm",
        fontWeight: "600",
        fontSize: "0.6875rem",
        px: "9px",
      },
    },
    dot: {
      true: {
        _before: {
          content: '""',
          width: "6px",
          height: "6px",
          borderRadius: "full",
          background: "currentColor",
        },
      },
    },
  },
  defaultVariants: {
    tone: "accent",
    dot: false,
  },
});
