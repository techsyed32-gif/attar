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
                oud: {
                    bg: "#0e0b08",
                    surface: "#14100c",
                    border: "#2b2216",
                    gold: "#d49742",
                    goldHover: "#e5aa52",
                    sand: "#f5efe6",
                },
            },
            fontFamily: {
                serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
            },
        },
    },
    plugins: [],
};
export default config;