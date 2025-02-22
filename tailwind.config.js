export default {
  darkMode: "class", // Enable dark mode
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        card: "#1E1E1E",
        primaryText: "#FFFFFF",
        secondaryText: "#B0B0B0",
        primaryAccent: "#00C896",
        secondaryAccent: "#FF3E6D",
      },
    },
  },
  plugins: [],
};
