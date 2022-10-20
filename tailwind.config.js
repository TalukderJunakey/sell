
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "white",
          accent: "#37cdbe",
          neutral: "black",

          "base-100": "#ffffff",
        },
      },

    ],
  },

  plugins: [require("daisyui")],

}
