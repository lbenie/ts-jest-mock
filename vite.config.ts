import { defineConfig } from 'vite'
import { resolve } from 'path'
import { name } from './package.json'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib', 'index.ts'),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      name,
    },
    rollupOptions: {
      output: {
        dir: 'dist',
      },
      plugins: [
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        peerDepsExternal(),
        typescript({
          tsconfig: resolve(__dirname, 'tsconfig.json'),
        }),
      ],
    },
  },
})
