import * as Actions from '../actions';

export function push (route) {
	store.dispatch({ type: Actions.NativeRouterPop, route });
}

export function pop () {
	store.dispatch({ type: Actions.NativeRouterPop });
}

export function reset () {
	store.dispatch({ type: Actions.NativeRouterReset });
}

export function jumpTo (key: String) {
	store.dispatch({ type: Actions.NativeRouterJumpTo, key });
}

export function jupToIndex (index: Number) {
	store.dispatch({ type: Actions.NativeRouterJumpToIndex, index })
}