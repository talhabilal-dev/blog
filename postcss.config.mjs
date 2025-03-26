const config = {
  plugins: ["@tailwindcss/postcss"],
  className: "tw",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff00ff",
      },
    },
  },
  darkMode: "class",
};

export default config;
