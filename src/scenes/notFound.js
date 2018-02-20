import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect, Button } from 'react-universal-ui';

type Props = {
	dispatch?: Function,
	location?: Object,
};

export default class NotFoundScene extends Component {
	props: Props;

	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		};
	}

	render() {
		return <View style={styles.container}>
			<Text style={styles.heading}>PAGE NOT FOUND!</Text>
			<Text style={styles.message}>
				Whoops, it seem the page you are looking for not exist or already removed!
			</Text>
			<Button
				title={`TAKE ME HOME! ${this.state.counter}`}
				wrapperStyle={styles.buttonWrapper}
				onPress={() => { this.setState({ counter: this.state.counter + 1 }); }}/>
		</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, alignItems: 'center', justifyContent: 'center',
	},
	buttonWrapper: {
		marginTop: 25,
	},
	heading: {
		fontSize: 26, marginBottom: 10, textAlign: 'center',
	},
	message: {
		fontSize: 14, fontWeight: '300', textAlign: 'center',
	},
});