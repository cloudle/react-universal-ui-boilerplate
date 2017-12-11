require('colors');
const moduleAlias = require('module-alias');
const chokidar = require('chokidar');
const invalidate = require('invalidate-module');
const path = require('path');
const morgan = require('morgan');

moduleAlias.addAlias('react-native', 'react-native-web');

const watcher = chokidar.watch('./src', { ignoreInitial: true });

watcher.on('all', (event, filename) => {
	console.log(' HOT PUSH! '.bgMagenta, filename.green, 'now in sync!');
	invalidate(path.resolve(filename));
});

const PORT = 3005,
	express = require('express'),
	server = express();

server.set('view engine', 'ejs');
server.use(express.static('web'));
server.use(morgan('dev'));

server.use((req, res, next) => {
	const router = require('./src/server/router');
	router(req, res, next);
});

server.listen(PORT, () => {
	console.log('Some mysterious magic stream is raising at..', ` localhost:${PORT} `.bgGreen, ':p');
});