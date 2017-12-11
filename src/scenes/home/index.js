import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect, ContextProvider, Button } from 'react-universal-ui';

import Icon from '../../components/vector-icons/Ionicons';
import * as appActions from '../../store/action/app';

type Props = {
	counter?: string,
	dispatch?: Function,
};

@connect(({ app }) => {
	return {
		counter: app.counter,
	};
})

export default class HomeScene extends Component {
	render() {
		const beerIcon = <Icon
			name="ios-beer-outline"
			style={styles.buttonIcon}/>;

		return <View style={styles.container}>
			<Text style={styles.welcome}>
				Welcome to React Native
			</Text>
			<Text style={styles.instructions}>
				To get started, edit src/app.js
			</Text>
			<Text style={styles.instructions}>
				Press Cmd+R to reload,{'\n'}
				Cmd+D or shake for dev menu
			</Text>
			<Button
				wrapperStyle={styles.buttonWrapper}
				title={`Click me! ${this.props.counter}`}
				icon={beerIcon}
				onPress={this.increaseCounter}/>
		</View>;
	}

	increaseCounter = () => {
		this.props.dispatch(appActions.increaseCounter());
	};
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