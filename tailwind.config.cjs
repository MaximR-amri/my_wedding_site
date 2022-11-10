/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "white-pattern":
          "url(src/assets/alyssa-hurley-yekIZ4ltv1o-unsplash.jpg)",
      },
    },
  },
  plugins: [],
};
