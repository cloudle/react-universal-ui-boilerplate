import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { utils, connect, ContextProvider, Modal, Snackbar, Dropdown, } from 'react-universal-ui';
import { Switch, Route, StaticRouter } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import Icon from './components/vector-icons/Ionicons';
import HomeScene from './scenes/home';
import NotFoundScene from './scenes/notFound';

import { store } from './store';
import { history } from './store/reducers';
import * as appActions from './store/action/app';

type Props = {
	ssrLocation?: string,
	ssrContext?: Object,
	counter?: string,
	dispatch?: Function,
};

@connect(({ app }) => {
	return {
		counter: app.counter,
	};
})

class App extends Component {
	props: Props;

	render() {
		const Router = utils.isServer ? StaticRouter : ConnectedRouter,
			routerProps = utils.isServer ? {
				location: this.props.ssrLocation,
				context: this.props.ssrContext,
			} : { history, };

		return <View style={styles.container}>
			<Router {...routerProps}>
				<Switch>
					<Route exact path="/" component={HomeScene}/>
					<Route component={NotFoundScene}/>
				</Switch>
			</Router>

			<Modal/>
			<Dropdown/>
			<Snackbar/>
		</View>;
	}
}

type ContainerProps = {
	ssrLocation?: string,
	ssrContext?: Object,
};

export default function AppContainer(props: ContainerProps) {
	return <ContextProvider store={store}>
		<App ssrLocation={props.ssrLocation} ssrContext={props.ssrContext}/>
	</ContextProvider>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	counterButton: {
		backgroundColor: '#00bcd4',
		width: 120, marginTop: 10,
	},
	buttonWrapper: {
		backgroundColor: '#00bcd4',
		width: 120,
		marginTop: 20,
	},
	buttonIcon: {
		fontSize: 28,
		color: '#ffffff',
	},
});