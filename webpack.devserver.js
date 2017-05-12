const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const port = process.env.PORT || 3000;
const logMode = process.env.LOG;

console.log(`A magical force.. is raising at localhost:${port} :p`);

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	contentBase: 'web',
	hot: true,
	historyApiFallback: {
		index: 'app.html',
	},
	stats: {
		assets:         false,
		colors:         true,
		version:        false,
		hash:           false,
		timings:        true,
		chunks:         true,
		chunkModules:   !!logMode,
	},
	quiet: false,
	noInfo: false,
}).listen(port, 'localhost', (err, result) => {
	if (err) console.log(err);
	return true;
});