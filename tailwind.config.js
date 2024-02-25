/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mob: "300px",
        // => @media (min-width: 640px) { ... }

        tab: "667px",
        // => @media (min-width: 768px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1500px",
        // => @media (min-width: 1536px) { ... }
      },
      container: {
        center: true,
      },
      colors: {
        "primary-color": "#FC6736",
        "light-color": "#fdede5",
        "hover-color": "#fc5d28",
        "primary-text": "#131314",
        "secondary-text": "#7077A1",
      },
    },
  },
  plugins: [],
};
