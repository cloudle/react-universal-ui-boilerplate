import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { utils, ContextProvider, } from 'react-universal-ui';
import { Router, MemoryRouter, StaticRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './routes';
import { store } from './store';

type ContainerProps = {
	ssrLocation?: string,
	ssrContext?: Object,
};

export default function AppContainer(props: ContainerProps) {
	const routerAndProps = getRouterAndProps(props),
		Router = routerAndProps.component,
		routerProps = routerAndProps.props;

	return <ContextProvider store={store}>
		<Router {...routerProps}>
			{renderRoutes(routes)}
		</Router>
	</ContextProvider>;
}

function getRouterAndProps(props) {
	if (utils.isServer) {
		return {
			component: StaticRouter,
			props: {
				location: props.ssrLocation,
				context: props.ssrContext,
			},
		};
	} else if (utils.isWeb) {
		return {
			component: BrowserRouter,
			props: {},
		};
	} else {
		return {
			component: MemoryRouter,
			props: {},
		};
	}
}