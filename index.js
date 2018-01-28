import { AppRegistry } from 'react-native';
import { utils } from 'react-universal-ui';
import App from './src';

AppRegistry.registerComponent('app', () => App);

if (utils.isBrowser) {
	AppRegistry.runApplication('app', {
		initialProps: {},
		rootTag: document.getElementById('root'),
	});
}