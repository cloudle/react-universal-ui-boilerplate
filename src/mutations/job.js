import { query, Relay } from '../utils/wire';

export const inviteRequest = Relay.QL`
  mutation inviteRequest(
  $workerId: String!, 
  $requestId: String!,
  $registrationId: String!,
  $description: String!,
  $time: String!,
  $price: String!,
  $nonce: String!) {
  insertJobTransact (
    workerId: $workerId,
    requestId: $requestId,
    registrationId: $registrationId,
    description: $description,
    time: $time,
    price: $price,
    nonce: $nonce,
    ) {
	  
      payload {
        id,
				
      }
    }
  }
`;

export const deleteJobTransact = Relay.QL`
  mutation deleteJobTransact($id: String!) {
    deleteJobTransact(id: $id) {
      payload {
        id
      }
    }
  }
`;

export const updateJobTransact = Relay.QL`
  mutation updateJobTransact($id: String!, $type: String!) {
    updateJobTransact (id: $id, type: $type) {
      payload {
        id, status
      }
    }
  }
`;