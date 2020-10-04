import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-scss'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const distributenFolder = 'public'

export default {
  input: './js/index.js',
  watch: true,
  output: {
    file: `./${distributenFolder}/bundle.js`,
    format: 'iife'
  },
  plugins: [
    babel({ exclude: 'node_modules/*' }),
    resolve(),
    commonjs(),
    terser(),
    scss({
      output: `./${distributenFolder}/bundle.css`,
      outputStyle: 'compressed'
    }),
    serve(distributenFolder),
    livereload(distributenFolder)
  ]
}