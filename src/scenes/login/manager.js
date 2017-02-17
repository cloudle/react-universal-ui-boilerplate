import { AsyncStorage } from 'react-native';
import { utils } from 'react-universal-ui';
import { register } from '../../utils/routes';
const { nativeRouteAction } = utils;

import { query, TOKEN } from '../../utils';
import * as Mutations from '../../mutations';
import appActions from '../../store/action/app';

export function navigateRegister () {
	this.props.dispatch(nativeRouteAction.push(register));
}

export function login () {
	query(Mutations.login, {
		username: 'cloudle',
		password: '12345',
	}).then(this::loginSuccess).catch(this::loginError)
}

async function loginSuccess (response) {
	AsyncStorage.setItem(TOKEN, response.login.payload.token);
}

function loginError (error) {
	console.warn(error);
}