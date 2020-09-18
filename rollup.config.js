import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./js/index.js",
  watch: true,
  output: {
    file: "./dist/index.min.js",
    format: "iife",
    name: "bundle",
  },
  plugins: [
    babel({ exclude: "node_modules/*" }),
    resolve(),
    commonjs(),
    terser(),
  ],
};
