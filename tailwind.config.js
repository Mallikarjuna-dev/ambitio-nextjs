/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                marquee: "marquee 20s linear infinite",
                marqueeReverse: "marqueeReverse 20s linear infinite",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                marqueeReverse: {
                    "0%": { transform: "translateX(-50%)" },
                    "100%": { transform: "translateX(0)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
