import 'babel-polyfill';
import React, { Component } from 'react';
import ReactNative, { View, Text, AsyncStorage } from 'react-native';
import app from './src/app';

import { AppContainer } from 'react-hot-loader';

render = Component => {
	const rootEl = document.getElementById('root');

	ReactNative.render(
		<AppContainer>
			<Component/>
		</AppContainer>,
		rootEl
	);
};

render(app);

if(module.hot) {
	module.hot.accept('./src/app', () => {
		const nextApp = require('./src/app').default;
		console.log(nextApp);
		render(nextApp);
	});
}