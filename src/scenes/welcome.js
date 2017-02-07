import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button } from 'react-universal-ui';

export default class app extends Component {
	render() {
		return <View style={styles.container}>
			<Text style={styles.welcome}>
				Welcome to React Native!
			</Text>
			<Text style={styles.instructions}>
				To get started, edit src/app.js
			</Text>
			<Text style={styles.instructions}>
				Press Cmd+R to reload,{'\n'}
				Cmd+D or shake for dev menu
			</Text>
			<Button
				wrapperStyle={{backgroundColor: '#00bcd4', width: 120}}
				title="Click me!!" onPress={() => console.log("Yay!")}/>
		</View>
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
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
});