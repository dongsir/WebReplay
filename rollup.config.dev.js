import ts from '@rollup/plugin-typescript'
import html from '@rollup/plugin-html'
import node from 'rollup-plugin-node-resolve'
import sourcemaps from 'rollup-plugin-sourcemaps'

import browsersync from 'rollup-plugin-browsersync'
import fs from 'fs'
import { string } from 'rollup-plugin-string'

export default {
    input: 'index.ts',
    output: {
        file: 'dist/web-replay.js',
        format: 'umd',
        sourcemap: true
    },
    plugins: [
        ts(),
        node({
            jsnext: true
        }),
        sourcemaps(),
        html({
            // template: () => fs.readFileSync('examples/test.html')
            template: () => fs.readFileSync('examples/todo.html')
        }),
        string({
            include: ['**/*.html', '**/*.css'],
            exclude: ['**/index.html', '**/index.css']
        }),
        browsersync({ server: 'dist', port: 4321, notify: false, open: false })
    ]
}
