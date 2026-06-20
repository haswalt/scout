import { sva } from "@repo/ui/css";

export const aiSummaryStyles = sva({
  slots: ["root", "header", "tag", "status", "statusDot", "cursor"],
  base: {
    root: {
      position: "relative",
      overflow: "hidden",
      backgroundImage:
        "linear-gradient(165deg, {colors.lilac.100} 0%, {colors.lilac.200} 100%)",
      borderRadius: "lg",
      px: "xl",
      py: "xl",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "panelBorder",
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "md",
    },
    tag: {
      display: "inline-flex",
      alignItems: "center",
      gap: "sm",
      bg: "surface",
      borderRadius: "full",
      pt: "6px",
      pr: "13px",
      pb: "6px",
      pl: "11px",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "panelBorder",
      color: "accent", // tints the inline icon; label colour comes from text()
    },
    status: {
      display: "flex",
      alignItems: "center",
      gap: "7px",
    },
    statusDot: {
      width: "7px",
      height: "7px",
      borderRadius: "full",
      bg: "accentMid",
      animationStyle: "pulseDot",
    },
    cursor: {
      display: "inline-block",
      width: "9px",
      height: "22px",
      bg: "accentMid",
      marginLeft: "2px",
      borderRadius: "1px",
      transform: "translateY(3px)",
      animationStyle: "cursorBlink",
    },
  },
});
