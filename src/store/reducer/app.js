import * as Actions from '../actions';

const initialState = {
  counter: 0,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case Actions.IncreaseCounter:
			return {...state, counter: state.conter + action.volume};
		default:
			return state;
	}
}