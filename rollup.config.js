import { defineConfig } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import cleaner from 'rollup-plugin-cleaner';
import commonjs from '@rollup/plugin-commonjs';
import ts from 'rollup-plugin-ts';

const options = defineConfig({
  input: 'src/index.ts',
  output: {
    sourcemap: 'hidden',
    dir: 'dist',
    format: 'esm',
  },
  external: ['react'],
  plugins: [
    cleaner({ targets: ['./dist'] }),
    nodeResolve(),
    commonjs(),
    ts({
      transpiler: 'swc',
      swcConfig: {
        jsc: {
          minify: {
            compress: true,
            mangle: true,
          },
        },
        minify: true,
      },
    }),
  ],
});

export default options;
