import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-red": "#FE5824",
        "pale-peach": "#F7E9D1",
        "light-gray": "#F5F5F5",
        gainsboro: "#DCDCDC",
      },
    },
  },
  plugins: [],
};
export default config;
