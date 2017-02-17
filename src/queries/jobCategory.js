import store from '../store';
import { query, Relay } from '../utils/wire';
import * as appActions from '../store/action/app';

export function pullJobCategories () {
	query(Relay.QL`{
    jobCategories {
      id
	    title
	    enabled
    }
  }`).then(result => {
		store.dispatch(appActions.syncJobCategories(result.jobCategories));
	});
}
