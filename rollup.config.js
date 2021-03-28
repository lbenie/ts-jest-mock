import typescript from '@rollup/plugin-typescript'
import autoExternal from 'rollup-plugin-auto-external'
import dts from 'rollup-plugin-dts'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'

const input = 'lib/index.ts'
const plugins = [
  commonjs(),
  resolve(),
  autoExternal(),
  typescript(),
  babel({ babelHelpers: 'bundled' }),
]

export default [
  {
    input,
    output: {
      file: 'dist/index.js',
      format: 'cjs',
    },
    plugins,
  },
  {
    input,
    output: {
      file: 'dist/index.mjs',
      format: 'es',
    },
    plugins,
  },
  {
    input,
    output: [{ file: 'dist/types/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]
