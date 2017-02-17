import store from '../store';
import { query, Relay } from '../utils/wire';

export const jobRequestFragment = Relay.QL`
	fragment jobRequestFragment on JobRequest {
		id, description, time, type, price, ownerId, workTime, notice
    category {
      id, title
    }
		location {
			latitude, longitude
    }
	}
`;

export const jobRequests = Relay.QL`
	query jobRequests {
	jobRequests {
		${jobRequestFragment}
	}
}`;

export const requestMatches = Relay.QL`
	query requestMatches($id: String!) {
		requestMatches(id: $id) {
			${jobRequestFragment}
		}
	}
`;
