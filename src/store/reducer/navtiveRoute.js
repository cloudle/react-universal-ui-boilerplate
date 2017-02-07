import * as Actions from '../actions';
import { NavigationExperimental } from 'react-universal-ui';
import { initialRoute, routes } from '../../utils';

const { StateUtils } = NavigationExperimental;
const initialState = {
	index: 0,
	routes: [initialRoute],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case Actions.NativeRouterPush:
			return StateUtils.push(state, action.route);
		case Actions.NativeRouterPop:
			return StateUtils.pop(state);
		case Actions.NativeRouterReset:
			return StateUtils.reset(state);
		case Actions.NativeRouterJumpTo:
			return StateUtils.jumpTo(state, action.key);
		case Actions.NativeRouterJumpToIndex:
			return StateUtils.jumpToIndex(state, action.index);
		default:
			return state;
	}
}