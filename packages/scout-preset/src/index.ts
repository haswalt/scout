import { definePreset } from "@pandacss/dev";

export default definePreset({
  name: "scout-preset",
  theme: {
    // Mobile-first breakpoints (min-width). `base` is implicit (no query).
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    tokens: {
      fonts: {
        body: {
          value: "var(--font-manrope), ui-sans-serif, system-ui, sans-serif",
        },
        serif: { value: "var(--font-lora), Georgia, serif" },
      },

      // Tight layout scale — gaps, margins, card/section padding.
      spacing: {
        xs: { value: "0.25rem" }, //  4px
        sm: { value: "0.5rem" }, //   8px
        md: { value: "1rem" }, //    16px
        lg: { value: "1.75rem" }, // 28px
        xl: { value: "2rem" }, //    32px — hero panel / generous padding
      },

      // Layout width caps — so pages never reach for magic numbers.
      sizes: {
        prose: { value: "35rem" }, //  560px — hero / reading column
        field: { value: "20rem" }, //  320px — compact header search
        shell: { value: "70rem" }, // 1120px — dashboard content shell
      },

      radii: {
        xs: { value: "0.5rem" }, //   8px — chips, skeletons, feature tags
        sm: { value: "0.75rem" }, //  12px — icon tiles, small controls
        md: { value: "1rem" }, //     16px — cards, surfaces
        lg: { value: "1.375rem" }, // 22px — AI hero panel
        full: { value: "9999px" },
      },

      shadows: {
        card: { value: "0 14px 32px -16px rgba(76, 44, 146, 0.40)" },
        focusRing: { value: "0 0 0 3px {colors.lilac.200}" },
      },

      colors: {
        white: { value: "#ffffff" },
        purple: {
          DEFAULT: { value: "#4c2c92" },
          hover: { value: "#3c2175" },
          mid: { value: "#6b4fb0" }, // AI status dot / streaming caret
          soft: { value: "#8a6fcb" }, // logo accent square
          muted: { value: "#5b4e86" }, // spec icons / feature-tag text
        },
        lilac: {
          50: { value: "#faf8fc" },
          100: { value: "#f0eafb" },
          200: { value: "#ece3fa" },
          border: { value: "#decef6" },
          hover: { value: "#c9b8ec" }, // chip / interactive hover border
        },
        ink: {
          DEFAULT: { value: "#2a2440" },
          strong: { value: "#2a1b52" },
          muted: { value: "#6f6a85" },
          label: { value: "#9b93b4" }, // eyebrows, units, footer labels
          faint: { value: "#b7b1c9" }, // secondary captions
        },
        line: { value: "#eee8f7" },
        // Illustrative neighbourhood-map palette.
        map: {
          land: { value: "#e9ecf3" },
          park: { value: "#dcebdd" },
          water: { value: "#d7e6f2" },
          road: { value: "#fbfbfd" },
        },
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
        textLabel: { value: "{colors.ink.label}" }, // eyebrows / units / labels
        textFaint: { value: "{colors.ink.faint}" }, // secondary captions
        heading: { value: "{colors.ink.strong}" },
        accent: { value: "{colors.purple}" },
        accentHover: { value: "{colors.purple.hover}" },
        accentMid: { value: "{colors.purple.mid}" }, // AI status dot / caret
        accentSoft: { value: "{colors.purple.soft}" },
        accentMuted: { value: "{colors.purple.muted}" }, // spec / feature text
        lilacHover: { value: "{colors.lilac.hover}" }, // interactive hover border
        // Map roles.
        mapLand: { value: "{colors.map.land}" },
        mapPark: { value: "{colors.map.park}" },
        mapWater: { value: "{colors.map.water}" },
        mapRoad: { value: "{colors.map.road}" },
        mapInk: { value: "{colors.ink.strong}" }, // markers / centre pin
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
          lineHeight: 0.8,
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
          letterSpacing: "0.002em",
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
      // Property images / map fading in once Live Listings resolve.
      fadeIn: {
        from: { opacity: "0" },
        to: { opacity: "1" },
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
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
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
      cursorBlink: { value: { animation: "cursorBlink 1s steps(1) infinite" } },
      pulseDot: { value: { animation: "pulseDot 1s ease-in-out infinite" } },
      slideUpOut: {
        value: {
          animation: "slideUpOut 0.72s cubic-bezier(0.7, 0, 0.18, 1) both",
        },
      },
      spin: {
        value: {
          animation: "spin 1s infinite",
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
    "::view-transition-group(.page-shutter)": {
      animation: "none",
    },
    "::view-transition-image-pair(.page-shutter)": {
      isolation: "auto",
    },
    "::view-transition-old(.page-shutter)": {
      zIndex: "2",
      animation: "slideUpOut 0.72s cubic-bezier(0.7, 0, 0.18, 1) both",
    },
    "::view-transition-new(.page-shutter)": {
      zIndex: "0",
      animation: "none",
    },
    "@media (prefers-reduced-motion: reduce)": {
      "::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)":
        {
          animation: "none !important",
        },
    },
  },
});
