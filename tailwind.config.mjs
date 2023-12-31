/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                black: "#0F172A",
                blue: "#2DA5E9",
            },
        },
    },
    plugins: [],
};
