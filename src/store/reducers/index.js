import { combineReducers } from 'redux';
import { utils } from 'react-universal-ui';
import { routerReducer, routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { createBrowserHistory, createMemoryHistory } from 'history';
import appReducer from './app';

export const history = utils.isBrowser ? createBrowserHistory() : createMemoryHistory();
export const routerMiddleware = createRouterMiddleware(history);

export default combineReducers({
	app: appReducer,
	router: routerReducer,
});