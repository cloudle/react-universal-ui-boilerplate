import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { colors } from '../utils';
import { NavigationExperimental, utils } from 'react-universal-ui';
import NavigationBackButton from './NavigationBackButton';

const { Header: NavigationHeader } = NavigationExperimental;
const { nativeRouteAction } = utils;

@connect(({app}) => {
	return {
		localize: app.localize,
	}
})

export default class Header extends Component {
	render () {
		return <NavigationHeader
			{...this.props}
			style={styles.navigationContainer}
			renderTitleComponent={this::this.renderTitleComponent}
			renderLeftComponent={this::this.renderLeftComponent}/>
	}

	renderTitleComponent (props) {
		return <NavigationHeader.Title
				textStyle={styles.navigationTitle}>
			{props.scene.route.key}
		</NavigationHeader.Title>
	}

	renderLeftComponent (props) {
		return props.scene.index == 0 ?
			null : <NavigationBackButton onPress={this::onNavigateBack} />
	}
}

function onNavigateBack () {
	this.props.dispatch(nativeRouteAction.pop());
}

const styles = StyleSheet.create({
	navigationContainer: {
		backgroundColor: colors.main,
		borderBottomColor: colors.main,
	},
	navigationTitle: {
		color: 'white',
	}
});