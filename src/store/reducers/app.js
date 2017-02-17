import * as Actions from '../actions';
import { utils } from 'react-universal-ui';
import { localize } from '../../utils';

const initialState = {
  counter: 0,
	user: {},
	loadings: {},
	localize: localize('eng'),
};

export default utils.appReducer((state = initialState, action) => {
	switch (action.type) {
		case Actions.IncreaseCounter:
			return {...state, counter: state.counter + action.volume};
		case Actions.ChangeAppLocalize:
			return { ...state, localize: localize(action.lang) };
		case Actions.SetLoadingStatus:
			return handleSetLoading(state, action);
		default:
			return state;
	}
})

function handleSetLoading (state, action) {
	let loadings = {...state.loadings};
	loadings[action.id] = action.flag;

	return { ...state, loadings};
}