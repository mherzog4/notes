/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./CODE-SRC/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {},
  },
  // replace plugins
plugins: [require("@tailwindcss/forms")],
};