/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-blue": "linear-gradient(179deg, rgba(25,27,31,0.05) 0%, rgba(62,205,224,0.1) 26%, rgba(45,123,135,0.1) 52%, rgba(29,111,242,0.1) 74%, rgba(31,55,62,0.1) 100%)",
        "gradeint-2": "linear-gradient(128deg, rgba(77,93,95,0) 4%, rgba(29,111,242,0.05) 20%, rgba(143,173,166,0.05) 44%, rgba(62,205,224,0.05) 60%, rgba(79,79,79,0) 100%);",
        "gradient-3": "linear-gradient(72deg, rgba(25,27,31,0.05) 0%, rgba(62,205,224,0.05) 23%, rgba(255,129,87,0.05) 42%, rgba(31,66,97,0.05) 52%, rgba(30,70,110,0.05) 68%, rgba(29,111,242,0.05) 81%, rgba(31,55,62,0.05) 100%);",
        "gradient-4": "linear-gradient(9deg, rgba(25,27,31,0.0) 0%, rgba(62,205,224,0.05) 30%, rgba(255,198,45,0.05) 50%, rgba(31,66,97,0.05) 67%, rgba(29,111,242,0.05) 80%, rgba(31,55,62,0) 100%);",
      },
      colors : {
        "app-yellow"  : "#ffc62d",
        "app-cyan"   : "#3ecde0",
        "app-blue"   : "#1d6ff2",
        "app-orange" : "#ff8157",
        "app-black" : "#191b1f",
        "app-white-1" : "#fefefe",
        "app-white-2" : "#949596",
      },
      animation: {
        sun: "spin 4s linear infinite",
        cloud : "float 7s ease-in-out infinite",
        wind : "wind 2s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(10px)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(10px)" },
        },
        wind : {
          "0%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(-10px)" },
          "100%": { transform: "translateX(0px)" },
        }
      },
    },
  },
  plugins: [],
};
