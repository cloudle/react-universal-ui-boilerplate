import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect, Button } from 'react-universal-ui';
import { push } from 'react-router-redux';

type Props = {
	dispatch?: Function,
	location?: Object,
};

@connect(({ app }) => {
	return {

	};
})

export default class NotFoundScene extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text style={styles.heading}>PAGE NOT FOUND!</Text>
			<Text style={styles.message}>
				Whoops, it seem the page you are looking for not exist or already removed!
			</Text>
			<Button
				title="TAKE ME HOME"
				wrapperStyle={styles.buttonWrapper}
				onPress={() => this.props.dispatch(push('/'))}/>
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