/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "560px", // Full width on small screens
          md: "800px", // Custom width for medium screens
          lg: "1024px", // Custom width for large screens
          xl: "1280px", // Custom width for extra-large screens
          xl: "1460px",
        },
      },
      fontFamily: {
        prompt: ["var(--font-prompt)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
