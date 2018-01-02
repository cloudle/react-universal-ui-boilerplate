const path = require('path');
const webpack = require('webpack');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const env = process.env.ENV || 'dev';
const port = process.env.PORT || 3000;
const prod = env === 'prod';
const publicPath = '/';
const entry = './index.web.js';

const hot = [
	'react-hot-loader/patch',
	`webpack-dev-server/client?${publicPath}`,
	'webpack/hot/only-dev-server',
];

const plugins = [
	new DefinePlugin({
		ENV: JSON.stringify(env)
	}),
	new webpack.optimize.OccurrenceOrderPlugin(),
	new HtmlWebpackPlugin({
		isProduction: prod,
		template: 'index.ejs',
		filename: 'index.html',
	}),
	new ProgressBarPlugin({
		width: 39, complete: '█', incomplete: '¦', summary: false,
	}),
];

if (env === 'dev') {
	plugins.push(new webpack.HotModuleReplacementPlugin());
	plugins.push(new webpack.NamedModulesPlugin());
	plugins.push(new webpack.NoEmitOnErrorsPlugin());
	plugins.push(new webpack.DllReferencePlugin({
		context: '.',
		manifest: require('./web/vendor-manifest.json'),
	}));
	plugins.push(new webpack.ContextReplacementPlugin(
		/graphql-language-service-interface[\\/]dist$/,
		new RegExp('^\\./.*\\.js$')
	));
}

module.exports = {
	cache: true,
	devtool: prod ? false : 'eval-source-map',
	entry: {
		app: prod ? [entry] : [...hot, entry]
	},
	output: {
		publicPath,
		path: path.join(__dirname, 'web'),
		filename: '[name].bundle-[hash].js',
		chunkFilename: '[name].js',
	},
	resolve: {
		alias: {
			'react-native': 'react-native-web',
		},
		modules: ['node_modules'],
		extensions: ['.js']
	},
	plugins,
	module: {
		rules: [
			{
				test: /\.js?$/,
				loaders: prod ? ['babel-loader'] : ['react-hot-loader/webpack', 'babel-loader'],
				exclude: /node_modules\/idtoken-verifier/,
			},
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{
				test: /\.(png|jpg|svg|ttf)$/,
				loader: 'file-loader?name=[name].[ext]'
			},
			{
				test: /\.json/,
				loader: 'json-loader'
			}
		],
	},
};