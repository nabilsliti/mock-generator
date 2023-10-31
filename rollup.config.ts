import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import multi from '@rollup/plugin-multi-entry';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/**/*.ts', // this will match all the TypeScript files in the src folder and subfolders
    output: [
        {
            // dir: 'dist/esm', // this will output the esm bundle in the dist/esm folder
            file: 'dist/esm/index.js', // output file
            format: 'esm', // this will use the esm format
            sourcemap: true, // this will generate source maps
            // plugins: [ terser() ], // this will minify the code
            globals: {
                'lorem-ipsum': 'loremIpsum',
                'date-fns': 'dateFns',
                'uuid': 'uuid',
                'randexp': 'randExp'
            }
        },
        {
            // dir: 'dist/cjs', // this will output the cjs bundle in the dist/cjs folder
            file: 'dist/cjs/index.js', // output file
            format: 'cjs', // this will use the cjs format
            sourcemap: true, // this will generate source maps
            // plugins: [ terser() ], // this will minify the code
            globals: {
                'lorem-ipsum': 'loremIpsum',
                'date-fns': 'dateFns',
                'uuid': 'uuid',
                'randexp': 'randExp'
            }
        },
        {
            file: 'dist/browser/mock-generator.js', // this will output the browser bundle in the dist/browser folder
            format: 'iife', // this will use the iife format, which is suitable for browsers
            name: 'MockApi', // this will be the global variable name for your library
            sourcemap: true, // this will generate source maps
            plugins: [ terser() ], // this will minify the code
            globals: {
                'lorem-ipsum': 'loremIpsum',
                'date-fns': 'dateFns',
                'uuid': 'uuid',
                'randexp': 'randExp'
            }
        }
    ],
    plugins: [
        typescript(), // this will transpile TypeScript to JavaScript
        commonjs(),
        multi({ exclude: [ 'src/examples/**' ] }) // this will export all the named exports from each file
    ],
    external: [ 'uuid', 'lorem-ipsum', 'date-fns', 'randexp' ]
};
