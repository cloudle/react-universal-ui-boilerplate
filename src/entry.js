import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { utils } from 'react-universal-ui';
const { isIos, isAndroid, isBrowser } = utils;

import store from './store';
import App from './app';

export default function () {
	return <Provider store={store}>
		<App/>
	</Provider>
}

if (isIos) {
	StatusBar.setBarStyle('light-content', true);
} else if (isAndroid) {
	StatusBar.setBackgroundColor('transparent');
	StatusBar.setTranslucent(true);
}