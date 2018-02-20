import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, } from 'react-native';
import { connect, ContextProvider, Button } from 'react-universal-ui';

import Icon from '../../components/vector-icons/MaterialIcons';
import * as appActions from '../../store/action/app';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
	'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
	'Shake or press menu button for dev menu',
	web: 'Command/Control+R to reload your browser :p\n' +
		'And in Browser, we have great advantage\nwhen using Chrome Developer Tool\ncompare to the poor native-dev-menu!',
});

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
	props: Props;

	render() {
		const beerIcon = <Icon
			name="whatshot"
			style={styles.buttonIcon}/>;

		return <View style={styles.container}>
			<Text style={styles.welcome}>
				Welcome to Universal Ui
			</Text>
			<Text style={styles.instructions}>
				To get started, edit src/index.js
			</Text>
			<Text style={styles.instructions}>
				{instructions}
			</Text>
			<Button
				wrapperStyle={styles.buttonWrapper}
				title={`Increase counter [${this.props.counter}]`}
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
		marginTop: 10,
	},
	buttonWrapper: {
		backgroundColor: '#00bcd4',
		marginTop: 20,
	},
	buttonIcon: {
		fontSize: 28,
		color: '#ffffff',
	},
});