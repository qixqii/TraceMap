import { babel } from '@rollup/plugin-babel';
import terser from "@rollup/plugin-terser";
import ts from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';

const extensions = ['.ts', '.tsx', '.js', '.jsx'];

export default [
  {
    input: './src/core/index.ts',
    output: [
      {
        file: 'dist/trace-map.esm.js',
        format: 'esm'
      },
      {
        file: 'dist/trace-map.cjs.js',
        format: 'cjs'
      },
      {
        file: 'dist/trace-map.umd.js',
        format: 'umd',
        name: 'trace-map'
      }
    ],
    plugins: [
      del({ targets: 'dist/*' }),
      ts(),
      babel({
        extensions,
        presets: [
          '@babel/preset-env',
          ["@babel/preset-typescript", {
            "isTSX": true,
            "allExtensions": true,
          }]
        ],
        babelHelpers: 'bundled',
      }),
      terser()
    ]
  },
  {
    input: './src/core/index.ts',
    output: [{ file: 'dist/trace-map.d.ts', format: 'es' }],
    plugins: [dts()]
  }
]
