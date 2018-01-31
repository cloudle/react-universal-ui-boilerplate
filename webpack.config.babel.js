require('colors');

const path = require('path'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ProgressBarPlugin = require('progress-bar-webpack-plugin'),
	env = process.env.ENV || 'development',
	optimizeMode = process.env.OPTIMIZE !== undefined,
	port = process.env.PORT || 3000, publicPath = 'http://localhost:3000/',
	isProduction = env === 'production',
	htmlOptions = { isProduction, publicPath, useVendorChunks: false },
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
if (!htmlOptions.useVendorChunks) {
	console.log('(serving without '.grey + 'common-library-cache'.green +
		', run '.grey + 'yarn vendor'.magenta + ' once to boost up build speed)'.grey);
}

module.exports = {
	cache: true,
	devtool: isProduction ? false : 'eval-source-map',
	entry: {
		app: ['babel-polyfill', './index.js'],
	},
	output: {
		publicPath, path: path.join(__dirname, 'web'),
		filename: '[name].js',
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
				test: /\.js$/,
				exclude: /node_modules|packages/, // <- comment this if you want hot-reload node_modules
				loader: 'babel-loader',
				options: {
					cacheDirectory: true,
					plugins: ['react-hot-loader/babel', ]
				}
			},
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{
				test: /\.(png|jpg|svg|ttf)$/,
				loader: 'file-loader?name=[name].[ext]'
			},
			{
				test: /\.json/,
				loader: 'json-loader'
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			ENV: JSON.stringify(env),
			'process.env.NODE_ENV': JSON.stringify(env),
		}),
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
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
		},
		stats: { /* https://webpack.js.org/configuration/stats/#stats */
			assets:					optimizeMode,
			colors:					true,
			version:				true,
			hash:						optimizeMode,
			timings:				true,
			chunks:					optimizeMode,
			performance:		optimizeMode,
			modules:				optimizeMode,
			moduleTrace:		optimizeMode,
			modulesSort:		'size',
			chunkModules:		optimizeMode,
			chunkOrigins:		optimizeMode,
			cached:					true,
			error:					true,
			cachedAssets:		optimizeMode,
		},
		quiet: !optimizeMode,
		noInfo: !optimizeMode,
		overlay: true,
	},
};