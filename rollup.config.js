import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import nodeResolve from 'rollup-plugin-node-resolve';
import progress from 'rollup-plugin-progress';
// import visualizer from 'rollup-plugin-visualizer';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';

import postcss from 'rollup-plugin-postcss';
// import postcssModules from 'postcss-modules';
import gzipPlugin from 'rollup-plugin-gzip';
import { uglify } from 'rollup-plugin-uglify';
// const cssExportMap = {};

export default {
	input: 'src/lib/index.js',
	output: [
		{
			file: 'dist/index.js',
			format: 'umd',
			sourcemap: 'inline',
			name: 'bundle'
		}
	],
	plugins: [
		gzipPlugin(),
		uglify(),
		postcss({
			// plugins: [
			// 	postcssModules({
			// 		getJSON(id, exportTokens) {
			// 			cssExportMap[id] = exportTokens;
			// 		}
			// 	})
			// ],
			// getExportNamed: false,
			// getExport(id) {
			// 	return cssExportMap[id];
			// },
			extract: 'dist/styles.css'
		}),
		progress(),
		nodeResolve({
			browser: true
		}),
		json(),
		commonjs({
			include: ['node_modules/**'],
			exclude: ['node_modules/process-es6/**'],
			namedExports: {
				'node_modules/react/index.js': [
					'Children',
					'Component',
					'PropTypes',
					'createElement',
					'PureComponent',
					'Fragment'
				],
				'node_modules/react-dom/index.js': ['render']
			}
		}),
		babel({
			babelrc: false,
			presets: [['es2015', { modules: false }], 'stage-1', 'react'],
			plugins: ['external-helpers']
		}),
		// visualizer(),
		filesize(),
		replace({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
};
