// tailwind.config.ts
import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "chicago-red": "var(--color-chicago-red)",
        "chicago-red-dark": "var(--color-chicago-red-dark)",
        "chicago-blue": "var(--color-chicago-blue)",
        "chicago-blue-light": "var(--color-chicago-blue-light)",
        "chicago-blue-dark": "var(--color-chicago-blue-dark)",
        "chicago-white": "var(--color-chicago-white)",
      },
      height: {
        hero: "600px",
      },
    },
  },
  plugins: [typographyPlugin],
} satisfies Config;
