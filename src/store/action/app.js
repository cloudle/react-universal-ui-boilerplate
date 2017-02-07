import * as Actions from '../actions';

export function increaseCounter (volume = 1) {
	store.dispatch({ type: Actions.IncreaseCounter, volume });
}