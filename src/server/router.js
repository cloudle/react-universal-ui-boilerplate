import { Router } from 'express';
import { AppRegistry } from 'react-native';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { matchRoutes } from 'react-router-config';

import App from '../index';
import routes from '../routes';
import * as webpackConfigs from '../../webpack.config';

const router = Router();

AppRegistry.registerComponent('App', () => App);

router.use('/api', (req, res, next) => {
	res.json({ message: 'Hi, this is your very first api!', });
});

router.use('*', (req, res, next) => {
	const branch = matchRoutes(routes, req.baseUrl),
		initialProps = { ssrLocation: req.baseUrl, ssrContext: {} },
		{ element, getStyleElement } = AppRegistry.getApplication('App', { initialProps, rootTag: 'root' }),
		initialHtml = renderToString(element),
		initialStyles = renderToStaticMarkup(getStyleElement());

	/* TODO: Implement initialProps fetch that do server-side-data fetching using [branch]
	 * routeScene implement getInitalProps
	 * server side fetch it and inject as stringified-json to template
	 * client-side parse and take that on first load, fetch them by itself on next client-re-render..
	 * */

	res.render('../index', {
		initialStyles, initialHtml,
		serverSide: true,
		publicPath: webpackConfigs.output.publicPath,
	});
});

module.exports = router;