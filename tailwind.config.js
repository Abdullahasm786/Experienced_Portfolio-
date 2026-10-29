/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        ink2: "rgb(var(--c-ink2) / <alpha-value>)",
        panel: "rgb(var(--c-panel) / <alpha-value>)",
        ivory: "rgb(var(--c-ivory) / <alpha-value>)",
        mute: "rgb(var(--c-mute) / <alpha-value>)",
        signal: "rgb(var(--c-signal) / <alpha-value>)",
        ember: "rgb(var(--c-ember) / <alpha-value>)",
        line: "rgb(var(--c-line) / <alpha-value>)",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      transitionTimingFunction: { out: "cubic-bezier(.22,.8,.24,1)" },
    },
  },
  plugins: [],
};
