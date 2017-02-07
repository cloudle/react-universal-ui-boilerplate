import React, { Component } from 'react';
import { AsyncStorage, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NavigationExperimental } from 'react-universal-ui';
import Drawer from 'react-native-drawer';

import Menu from './share/Menu';
import NavigationHeader from './share/NavigationHeader';

@connect(({router}) => {
	return {
		router,
	}
})

export default class App extends Component {

	async componentWillMount () {
		let token = await AsyncStorage.getItem('sysConfig');
		console.log(token);
	}

	render () {
		return <Drawer
			type="overlay"
			side="right"
			negotiatePan={true}
			panOpenMask={0.2}
			tapToClose={true}
			openDrawerOffset={0.2}
			content={<Menu/>}
			tweenHandler={drawerTween}>

			<NavigationExperimental.CardStack
				style={styles.navigator}
				navigationState={this.props.router}
				renderScene={this::renderScene}
				renderHeader={this::renderHeader}
				gestureResponseDistance={50}
				onNavigateBack={() => console.log('Back..')}/>
		</Drawer>
	}
}

function renderScene (props) {
	const Scene = props.scene.route.component;
	return <Scene/>
}

function renderHeader (sceneProps) {
	return <NavigationHeader {...sceneProps}/>
}

function drawerTween (ratio, side = 'left') {
	return {
		main: { opacity:(2-ratio)/1.2 },
		drawer: {
			shadowColor: '#000000',
			shadowOpacity: 0.1 + (ratio * 0.3),
			shadowRadius: ratio * 60,
			elevation: ratio * 50,
		}
	}
}

const styles = StyleSheet.create({
	drawer: {
		backgroundColor: '#000',
	},
	navigator: {

	}
});