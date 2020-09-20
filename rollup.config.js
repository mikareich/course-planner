import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-scss'

export default {
  input: './js/index.js',
  watch: true,
  output: {
    file: './dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    babel({ exclude: 'node_modules/*' }),
    resolve(),
    commonjs(),
    terser(),
    scss({
      output: './dist/bundle.css',
      outputStyle: 'compressed'
    })
  ]
}
