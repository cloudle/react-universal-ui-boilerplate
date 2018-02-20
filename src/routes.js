import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Modal, Dropdown, Snackbar } from 'react-universal-ui';
import { renderRoutes } from 'react-router-config';

import HomeScene from './scenes/home';
import NotFoundScene from './scenes/notFound';
import type { Route } from './typeDefinition';

type Props = {
	route: Route,
};

class Layout extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			{renderRoutes(this.props.route.routes)}

			<Modal/>
			<Dropdown/>
			<Snackbar/>
		</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default [{
	component: Layout,
	routes: [{
		path: '/',
		exact: true,
		component: HomeScene,
	}, {
		component: NotFoundScene,
	}],
}];