import * as Actions from './actions';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import appReducer from './reducer/app';
import { utils } from 'react-universal-ui';

import { initialRoute, routes } from '../utils';

const initialRouterState = {
	routes: [initialRoute],
};

const routeReducer = utils.nativeRouteReducer(
	(state = initialRouterState, action) => {
		switch (action.type) {
			default:
				return state;
		}
	}
);

const reducers = combineReducers({
	app: appReducer,
	router: routeReducer,
});

export default compose(

)(createStore)(reducers);