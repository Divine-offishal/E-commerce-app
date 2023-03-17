/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        carousel1: "url(/src/Images/988540fa2552ddf9fa3f2409b63cce08.jpg)",
        carousel2: "url(/src/Images/ebb6ea336a6c4a062bc760897eb45824.jpg)",
        carousel3: "url(/src/Images/f81774ed263877205f2923bb181178b1.jpg)",
      },
    },
  },
  plugins: [],
}
