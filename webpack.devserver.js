const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const colors = require('colors');
const prettyBytes = require('pretty-bytes');

const port = process.env.PORT || 3000;
const logMode = process.env.LOG;

console.log('A magical force.. is raising at', ` localhost:${port} `.bgGreen, ':p');

const compiler = webpack(config);

new WebpackDevServer(compiler, {
	publicPath: config.output.publicPath,
	contentBase: 'web',
	hot: true,
	historyApiFallback: true,
	stats: {
		assets:         false,
		colors:         true,
		version:        false,
		hash:           false,
		timings:        false,
		chunks:         true,
		chunkModules:   !!logMode,
	},
	quiet: false,
	noInfo: false,
	reporter,
}).listen(port, 'localhost', (err, result) => {
	if (err) console.log(err);
	return true;
});

function reporter({ state, stats, options }) {
	if (state) {
		const obj = stats.toJson({
			chunks: false,
			colors: false,
			children: false,
			modules: false,
			chunkModules: false,
			source: false
		});

		if (!options.noInfo && !options.quiet) {
			if (obj.errors.length > 0) {
				options.log(' ERROR '.bgRed, `Failed to compile with ${obj.errors.length} errors`.red, '\n');
				obj.errors.forEach((error) => {
					options.log(' error '.bgRed, 'in', error);
				});
			} else {
				options.log(' DONE '.bgGreen, `Compiled successfully in ${obj.time}ms`.green,
					Array(process.stdout.rows - 1).join('\n'));
			}
		}

		let displayStats = (!options.quiet && options.stats !== false);

		if (displayStats && !(stats.hasErrors() || stats.hasWarnings()) && options.noInfo) {
			displayStats = false;
		}

		if (displayStats) {
			if (options.stats.hash && obj.hash) {
				options.log('stats', {
					hash: obj.hash,
					version: obj.version,
					time: `${obj.time}ms`,
				});
			}

			if (options.stats.assets && obj.assets && obj.assets.length > 0) {
				obj.assets.forEach((asset) => {
					options.log('stats', {
						asset: asset.name,
						size: prettyBytes(asset.size)
					});
				});
			}
		}
	}
	// else {
	// 	options.log(' ERROR '.bgRed, 'Failed to compile'.red);
	// }
}