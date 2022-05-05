import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

export default [
  {
    input: `src/gameLibrary.js`,
    plugins: [esbuild()],
    output: [
      {
        file: `dist/bundle.js`,
        format: 'cjs',
        sourcemap: true,
        exports: 'default',
      },
    ]
  },
  {
    input: `src/gameLibrary.js`,
    plugins: [dts()],
    output: {
      file: `dist/bundle.d.ts`,
      format: 'es',
    },
  }
]
