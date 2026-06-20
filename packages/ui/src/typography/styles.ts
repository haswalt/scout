import { cva } from "@repo/ui/css";

export const typographyStyles = cva({
  base: {
    fontFamily: "body",
    margin: "0",
    textWrap: "pretty",
  },
  variants: {
    variant: {
      // Hero entry headline.
      display: {
        textStyle: "display",
        fontSize: { base: "2.25rem", md: "3.25rem" },
      },
      // Page / section headings.
      heading: {
        textStyle: "heading",
        fontSize: { base: "1.5rem", md: "1.875rem" },
      },
      // Card titles ("Lewisham, SE13", listing street).
      title: {
        fontSize: { base: "1rem", md: "1.0625rem" },
        lineHeight: "1.25",
        fontWeight: "800",
        letterSpacing: "-0.01em",
      },
      // Uppercase section label.
      eyebrow: { textStyle: "eyebrow" },
      // Default running copy.
      body: { textStyle: "body" },
      // Big numbers — decile / price.
      stat: {
        textStyle: "stat",
        fontSize: { base: "1.25rem", md: "1.5rem" },
      },
      // Small supporting / footer text.
      caption: {
        fontSize: "0.7rem",
        lineHeight: "1.4",
        fontWeight: "600",
      },
      // The streaming AI summary — serif, alive.
      editorial: {
        textStyle: "editorial",
        fontSize: { base: "1rem", md: "1.2rem" },
      },
    },
    tone: {
      default: { color: "text" }, //      #2a2440 body / values
      muted: { color: "textMuted" }, //   #6f6a85 sub-copy
      label: { color: "textLabel" }, //   #9b93b4 eyebrows / units / footer
      faint: { color: "textFaint" }, //   #b7b1c9 secondary captions
      heading: { color: "heading" }, //   #2a1b52 titles
      accent: { color: "accent" }, //     #4c2c92 brand
      accentMid: { color: "accentMid" }, // #6b4fb0 AI status label
      accentMuted: { color: "accentMuted" }, // #5b4e86 spec / feature text
      onAccent: { color: "white" },
      inherit: { color: "inherit" },
    },
    align: {
      start: { textAlign: "start" },
      center: { textAlign: "center" },
      end: { textAlign: "end" },
    },
    truncate: {
      true: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    },
  },
  defaultVariants: { variant: "body", tone: "default" },
});
