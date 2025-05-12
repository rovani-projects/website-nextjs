import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Chicago flag colors with hyphen notation
        "chicago-red": "#CF3038",
        "chicago-red-dark": "#B02830",
        "chicago-blue": "#2B65A7",
        "chicago-blue-light": "#92C2DC",
        "chicago-blue-dark": "#1E4A7B",
        "chicago-white": "#FFFFFF",
        "background-light": "#F6F8FA",
        "background-white": "#FFFFFF",
      },
      height: {
        hero: "600px",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
