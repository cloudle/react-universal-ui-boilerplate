import * as Actions from './actions';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import appReducer from './reducer/app';
import routeReducer from './reducer/navtiveRoute';

const reducers = combineReducers({
	app: appReducer,
	router: routeReducer,
});

export default compose(

)(createStore)(reducers);