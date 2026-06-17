import { cva } from "@repo/ui/css";

export const typographyStyles = cva({
  base: {
    fontFamily: "body",
    margin: "0",
    textWrap: "pretty",
  },
  variants: {
    variant: {
      display: {
        textStyle: "display",
        fontSize: { base: "2.25rem", md: "3.25rem" },
      },
      heading: {
        textStyle: "heading",
        fontSize: { base: "1.5rem", md: "1.875rem" },
      },
      title: {
        fontSize: { base: "1rem", md: "1.0625rem" },
        lineHeight: "1.25",
        fontWeight: "800",
        letterSpacing: "-0.01em",
      },
      eyebrow: {
        textStyle: "eyebrow",
      },
      body: {
        textStyle: "body",
      },
      stat: {
        textStyle: "stat",
        fontSize: { base: "1.25rem", md: "1.5rem" },
      },
      caption: {
        fontSize: "0.8125rem",
        lineHeight: "1.4",
        fontWeight: "600",
      },
      editorial: {
        textStyle: "editorial",
        fontSize: { base: "1.125rem", md: "1.3125rem" },
      },
    },
    tone: {
      default: {
        color: "text",
      },
      muted: {
        color: "textMuted",
      },
      heading: { color: "heading" },
      accent: {
        color: "accent",
      },
      soft: {
        color: "accentSoft",
      },
      onAccent: {
        color: "white",
      },
      inherit: {
        color: "inherit",
      },
    },
    align: {
      start: {
        textAlign: "start",
      },
      center: {
        textAlign: "center",
      },
      end: {
        textAlign: "end",
      },
    },
    truncate: {
      true: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    },
  },
  defaultVariants: {
    variant: "body",
    tone: "default",
  },
});
