import { sva } from "@repo/ui/css";
import { createStyleContext } from "../../styled-system/jsx";

export const cardStyles = sva({
  slots: ["root", "media", "header", "body", "footer", "divider"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      bg: "surface",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "border",
      borderRadius: "md",
      overflow: "hidden",
    },
    media: {
      position: "relative",
      overflow: "hidden",
      flexShrink: "0",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "sm",
    },
    body: {
      flex: "1",
      minWidth: "0",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "sm",
      borderTopWidth: "1px",
      borderTopStyle: "solid",
      borderTopColor: "border",
    },
    divider: {
      height: "1px",
      bg: "border",
      flexShrink: "0",
    },
  },
  variants: {
    // Horizontal + vertical inset applied per region so full-bleed media
    // still reaches the card edges. Mobile-first; nudges up at `md`.
    padding: {
      none: {},
      sm: {
        header: {
          px: "md",
          pt: "md",
        },
        body: {
          px: "md",
          py: "12px",
        },
        footer: {
          px: "md",
          pb: "md",
          pt: "10px",
        },
      },
      md: {
        header: {
          px: { base: "md", md: "18px" },
          pt: { base: "md", md: "18px" },
        },
        body: {
          px: { base: "md", md: "18px" },
          py: { base: "14px", md: "md" },
        },
        footer: {
          px: { base: "md", md: "18px" },
          pb: { base: "md", md: "18px" },
          pt: "12px",
        },
      },
      lg: {
        header: {
          px: "lg",
          pt: "lg",
        },
        body: {
          px: "lg",
          py: "md",
        },
        footer: {
          px: "lg",
          pb: "lg",
          pt: "md",
        },
      },
    },
    // Lay the body out as a horizontal row (area-at-a-glance, list rows).
    row: {
      true: {
        body: {
          display: "flex",
          alignItems: "center",
          gap: "md",
        },
      },
    },
    tone: {
      plain: {},
      tint: {
        root: {
          bg: "panel",
          borderColor: "panelBorder",
        },
      },
    },
    elevated: {
      true: {
        root: {
          boxShadow: "card",
          borderColor: "transparent",
        },
      },
    },
    // Whole card is a link / button. Carries hover + keyboard a11y states.
    interactive: {
      true: {
        root: {
          cursor: "pointer",
          transition: "border-color 0.15s, box-shadow 0.15s, transform 0.1s",
          _hover: {
            borderColor: "lilac.border",
            boxShadow: "card",
          },
          _active: {
            transform: "translateY(1px)",
          },
          _focusVisible: {
            outline: "2px solid token(colors.accent)",
            outlineOffset: "2px",
          },
          '&[aria-disabled="true"], &:disabled': {
            opacity: "0.55",
            cursor: "not-allowed",
            boxShadow: "none",
            pointerEvents: "none",
          },
        },
      },
    },
  },
  defaultVariants: {
    padding: "md",
    tone: "plain",
  },
});

export const { withProvider, withContext } = createStyleContext(cardStyles);
