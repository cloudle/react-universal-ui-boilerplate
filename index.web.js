import 'babel-polyfill';
import React from 'react';
import { AppRegistry } from 'react-native';
import { AppContainer } from 'react-hot-loader';

import app from './src';
import { store } from './src/store';
import * as appActions from './src/store/action/app';

const render = (Component) => {
	setTimeout(() => {
		const App = () => {
			return <AppContainer store={store}>
				<Component/>
			</AppContainer>;
		};

		AppRegistry.registerComponent('App', () => App);
		AppRegistry.runApplication('App', {
			initialProps: {},
			rootTag: document.getElementById('root'),
		});
	}, 0);
};

render(app);

if (module.hot) {
	module.hot.accept('./src', () => {
		const nextApp = require('./src').default;
		render(nextApp);

		/* Beautiful workaround:
		 Force update unrelated modules in the next execution loop.*/
		setTimeout(() => store.dispatch(appActions.increaseCounter()), 0);
	});
}