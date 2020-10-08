import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-scss'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { generateSW } from 'rollup-plugin-workbox'
import sourcemaps from 'rollup-plugin-sourcemaps'

const distributenFolder = 'public'

const { BUILD } = process.env

export default {
  input: 'src/js/index.js',
  watch: true,
  output: {
    file: `${distributenFolder}/bundle.js`,
    format: 'iife',
    sourcemap: true
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
    generateSW({
      swDest: 'public/sw.js',
      globDirectory: 'public'
    }),
    sourcemaps(),
    BUILD === 'development' && serve(distributenFolder),
    BUILD === 'development' && livereload(distributenFolder)
  ]
}
