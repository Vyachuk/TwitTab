export const theme = Object.freeze({
  colors: {
    mainColor: "#EBD8FF",
    backgroundColor:
      "linear-gradient(142deg, #471CA9 0%, #5736A3 69.10%, #4B2A99 100%)",
  },
  fontSizes: {
    text: "20px",
    button: "18px",
  },
  spacing: (value) => `${2 * value}px`,
  shadows: {
    box: "-2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px rgba(0, 0, 0, 0.23)",
    ellipse:
      "0px 4.391631126403809px 3.2937235832214355px 0px #FBF8FF inset, 0px -2.1958155632019043px 4.391631126403809px 0px #AE7BE3 inset",
    rectangle:
      "0px 3.4369285106658936px 2.5776965618133545px 0px #FBF8FF inset, 0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06), 0px -1.7184642553329468px 3.4369285106658936px 0px #AE7BE3 inset",
    button:
      "0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.25)",
  },
});
