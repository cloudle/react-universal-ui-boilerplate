import { Router } from 'express';
import { AppRegistry } from 'react-native';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import * as webpackConfigs from '../../webpack.config.babel';
import App from '../index';

const router = Router();

AppRegistry.registerComponent('App', () => App);

router.use('/api', (req, res, next) => {
	res.json({ message: 'Hi, this is your very first api!', });
});

router.use('*', (req, res, next) => {
	const initialProps = { ssrLocation: req.baseUrl, ssrContext: {} },
		{ element, stylesheets } = AppRegistry.getApplication('App', { initialProps, rootTag: 'root' }),
		initialHtml = renderToString(element),
		initialStyles = stylesheets.map(sheet => renderToStaticMarkup(sheet)).join('\n');

	res.render('../index', {
		initialStyles, initialHtml,
		serverSide: true,
		publicPath: webpackConfigs.output.publicPath,
	});
});

module.exports = router;