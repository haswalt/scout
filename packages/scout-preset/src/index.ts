import { definePreset } from "@pandacss/dev";

export default definePreset({
  name: "scout-preset",
  theme: {
    tokens: {
      fonts: {
        body: {
          value: "var(--font-manrope), ui-sans-serif, system-ui, sans-serif",
        },
        serif: { value: "var(--font-lora), Georgia, serif" },
      },

      // Three steps only — keep layouts honest.
      spacing: {
        sm: { value: "0.5rem" }, // 8px
        md: { value: "1rem" }, //   16px
        lg: { value: "1.75rem" }, // 28px
      },

      radii: {
        sm: { value: "0.625rem" }, // 10px
        md: { value: "1rem" }, //     16px
        lg: { value: "1.375rem" }, // 22px
        full: { value: "9999px" },
      },

      shadows: {
        card: { value: "0 14px 32px -16px rgba(76, 44, 146, 0.40)" },
        raised: {
          value:
            "0 18px 50px -18px rgba(76, 44, 146, 0.45), 0 2px 6px rgba(42, 36, 64, 0.06)",
        },
        marker: { value: "0 6px 14px -4px rgba(76, 44, 146, 0.55)" },
      },

      colors: {
        white: { value: "#ffffff" },
        purple: {
          DEFAULT: { value: "#4c2c92" },
          hover: { value: "#3c2175" },
          soft: { value: "#8a6fcb" },
        },
        lilac: {
          50: { value: "#faf8fc" },
          100: { value: "#f0eafb" },
          200: { value: "#ece3fa" },
          border: { value: "#decef6" },
        },
        ink: {
          DEFAULT: { value: "#2a2440" },
          strong: { value: "#2a1b52" },
          muted: { value: "#6f6a85" },
        },
        line: { value: "#eee8f7" },
        success: { fg: { value: "#1e8e5e" }, bg: { value: "#e7f6ee" } },
        warning: { fg: { value: "#b07400" }, bg: { value: "#fbf1dc" } },
        danger: { fg: { value: "#c0492b" }, bg: { value: "#fbeae6" } },
      },
    },

    // Theme-able surface roles — swap these for a dark theme later.
    semanticTokens: {
      colors: {
        bg: { value: "{colors.lilac.50}" },
        surface: { value: "{colors.white}" },
        panel: { value: "{colors.lilac.100}" }, // AI summary callout tint
        panelBorder: { value: "{colors.lilac.border}" },
        border: { value: "{colors.line}" },
        text: { value: "{colors.ink}" },
        textMuted: { value: "{colors.ink.muted}" },
        heading: { value: "{colors.ink.strong}" },
        accent: { value: "{colors.purple}" },
        accentHover: { value: "{colors.purple.hover}" },
        accentSoft: { value: "{colors.purple.soft}" },
      },
    },

    textStyles: {
      display: {
        value: {
          fontFamily: "body",
          fontSize: "3.25rem",
          lineHeight: "1.05",
          fontWeight: "800",
          letterSpacing: "-0.025em",
        },
      },
      heading: {
        value: {
          fontFamily: "body",
          fontSize: "1.875rem",
          lineHeight: "1.1",
          fontWeight: "800",
          letterSpacing: "-0.02em",
        },
      },
      eyebrow: {
        value: {
          fontFamily: "body",
          fontSize: "0.875rem",
          fontWeight: "700",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        },
      },
      body: {
        value: {
          fontFamily: "body",
          fontSize: "1rem",
          lineHeight: "1.5",
          fontWeight: "500",
        },
      },
      stat: {
        value: {
          fontFamily: "body",
          fontSize: "1.5rem",
          fontWeight: "800",
          letterSpacing: "-0.02em",
        },
      },
      // Editorial, "alive" feel for the streaming AI summary.
      editorial: {
        value: {
          fontFamily: "serif",
          fontSize: "1.3125rem",
          lineHeight: "1.62",
          fontWeight: "500",
        },
      },
    },

    keyframes: {
      // Skeleton loaders during the waterfall fetch.
      shimmer: {
        from: { backgroundPosition: "-480px 0" },
        to: { backgroundPosition: "480px 0" },
      },
      // Stats / cards snapping into place as each endpoint resolves.
      snapIn: {
        from: { opacity: "0", transform: "translateY(10px) scale(0.985)" },
        to: { opacity: "1", transform: "none" },
      },
      fadeIn: {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
      // Property images / map fading in once Live Listings resolve.
      fadeInUp: {
        from: { opacity: "0", transform: "translateY(16px)" },
        to: { opacity: "1", transform: "none" },
      },
      // Typewriter cursor on the streaming summary.
      cursorBlink: {
        "0%, 45%": { opacity: "1" },
        "55%, 100%": { opacity: "0" },
      },
      // "AI analysing…" indicator dot.
      pulseDot: {
        "0%, 100%": { transform: "scale(1)", opacity: "1" },
        "50%": { transform: "scale(1.45)", opacity: "0.45" },
      },
      // Entry search bar lifting away to become the dashboard header.
      slideUpOut: {
        from: { opacity: "1", transform: "translateY(0)" },
        to: { opacity: "0", transform: "translateY(-112%)" },
      },
    },

    layerStyles: {
      skeleton: {
        value: {
          backgroundImage:
            "linear-gradient(90deg, {colors.lilac.100} 0%, {colors.lilac.50} 50%, {colors.lilac.100} 100%)",
          backgroundSize: "900px 100%",
        },
      },
    },

    // Composable motion presets applied directly on components.
    animationStyles: {
      skeleton: {
        value: {
          animation: "shimmer 1.4s infinite linear",
        },
      },
      snapIn: { value: { animation: "snapIn 0.5s ease both" } },
      fadeIn: { value: { animation: "fadeIn 0.5s ease both" } },
      fadeInUp: { value: { animation: "fadeInUp 0.5s ease both" } },
      cursorBlink: { value: { animation: "cursorBlink 1s steps(1) infinite" } },
      pulseDot: { value: { animation: "pulseDot 1s ease-in-out infinite" } },
      slideUpOut: {
        value: {
          animation: "slideUpOut 0.72s cubic-bezier(0.7, 0, 0.18, 1) both",
        },
      },
    },
  },

  globalCss: {
    "*": { boxSizing: "border-box" },
    "html, body": { margin: "0", padding: "0" },
    body: {
      fontFamily: "body",
      textStyle: "body",
      color: "text",
      backgroundColor: "bg",
      WebkitFontSmoothing: "antialiased",
      textRendering: "optimizeLegibility",
    },
    "input, button, textarea, select": { font: "inherit", color: "inherit" },
    button: { cursor: "pointer" },
    a: { color: "accent", textDecoration: "none" },
    ":focus-visible": {
      outline: "2px solid token(colors.accent)",
      outlineOffset: "2px",
    },
    "::view-transition-old(root), ::view-transition-new(root)": {
      animationDuration: "0.4s",
      animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    },
    // Shared search pill morph (both routes name the field `search-field`).
    "::view-transition-group(search-field)": {
      animationDuration: "0.5s",
      animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    },
    "@media (prefers-reduced-motion: reduce)": {
      "::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)":
        {
          animation: "none !important",
        },
    },
  },
});
