import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Cedarville Cursive", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        karla: ["Karla", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "bg__main": "#0c1736",
        "github-main": "#2b3137",
        "github-hovered": "#24292e",
        "twitter-main": "#14171a",
        "twitter-hovered": "#1da1f2",
        "linkedin-main": "#004182",
        "linkedin-hovered": "#0a66c2",
        "google-main": "#4285F4",
        "google-hovered": "#EA4335",
        "discord-main": "#7289da",
        "discord-hovered": "#1e2124",
        heart: "#e31b23",
        "main-contrast": "#0a66c2",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
