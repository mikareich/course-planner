import babel from "rollup-plugin-babel";

export default {
  input: "./js/index.js",
  output: {
    file: "./dist/index.bundle.js",
    format: "iife",
    name: "bundle",
  },
  plugins: [babel({ exclude: "node_modules/*" })],
};
