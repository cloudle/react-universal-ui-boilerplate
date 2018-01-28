require('colors');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const env = process.env.ENV || 'development',
	port = process.env.PORT || 3000, publicPath = '/',
	isProduction = env === 'production',
	htmlOptions = { isProduction, useVendorChunks: false },
	optionalPlugins = [];

if (!isProduction) {
	if (require('fs').existsSync('./web/vendor-manifest.json')) {
		htmlOptions.useVendorChunks = true;
		optionalPlugins.push(new webpack.DllReferencePlugin({
			context: '.', manifest: require('./web/vendor-manifest.json'),
		}));
	}

	optionalPlugins.push(new ProgressBarPlugin({
		width: 39, complete: '▓'.green.bgGreen, incomplete: ' '.green.bgWhite,
		format: 'Build (:bar) (:elapsed seconds)',
		summary: false, customSummary: (buildTime) => {
			console.log('Build completed after', ` ${buildTime} `.bgGreen);
		},
	}));
}

console.log('Preparing super awesome dev-server at', ` localhost:${port} `.bgGreen, ':p');
console.log('(initial build may take a bit longer than hot-reload)'.magenta);

module.exports = {
	entry: ['babel-polyfill', './index.js'],
	output: {
		publicPath, path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		alias: {
			'react-native': 'react-native-web',
		},
		modules: ['node_modules'],
		extensions: ['.js']
	},
	module: {
		rules: [
			{
				exclude: /node_modules|packages/,
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					plugins: ['react-hot-loader/babel', ]
				}
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			...htmlOptions,
			template: 'index.ejs',
			filename: 'index.html',
		}),
		new webpack.NamedModulesPlugin(),
		...optionalPlugins,
	],
	devServer: {
		port, publicPath, contentBase: 'web', hot: true,
		historyApiFallback: true,
		stats: { /* https://webpack.js.org/configuration/stats/#stats */
			assets:					false,
			colors:					true,
			version:				true,
			hash:						false,
			timings:				true,
			chunks:					false,
			modules:				false,
			chunkModules:		false,
			chunkOrigins:		false,
			cached:					false,
			error:					true,
			cachedAssets:		false,
		},
		quiet: true,
		noInfo: true,
		overlay: true,
	},
};