import store from '../store';
import { query, Relay } from '../utils/wire';

export const jobInvites = Relay.QL`
	query jobTransacts ($type: String!) {
		jobTransacts (type: $type) {
			id, workerId, requestId, requestorId
			description
			price
			time
			status
			category {
				id,	title
			},
			requestor {
				id, email, phone
			}
		}
	}
`;