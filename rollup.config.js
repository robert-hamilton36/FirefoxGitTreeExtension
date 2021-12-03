import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default [
  {
    input: 'src/sidebar/index.tsx',
    output: {
      sourcemap: true,
      file: 'public/sidebar/sidebar.js',
      format: 'cjs'
    },
    plugins: [typescript(), nodeResolve()]
  },
]