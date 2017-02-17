import { query, Relay } from '../utils/wire';

export const jobRequestMutationFragment = Relay.QL`
  fragment jonRequestMutationFragment on JobRequest {
    id, description, time, type, price,
    category {
      id, title
    }
  }
`;

export const insertRequest = Relay.QL`
  mutation insertJobRequest(
  $categoryId: String!,
  $description: String!,
  $price: Int!,
  $time: String!,
  $type: String!,
  $address: String!,
  $longitude: Float!,
  $latitude: Float!,
  $notice: String,
  $workTime: String,
  ) {
    insertJobRequest(
    categoryId: $categoryId,
    description: $description,
    price: $price,
    time: $time,
    type: $type,
    address: $address,
    longitude: $longitude,
    latitude: $latitude,
    notice: $notice,
    workTime: $workTime) {

      payload {
        ${jobRequestMutationFragment}
      }
    }
  }
`;

export const updateRequest = Relay.QL`
  mutation updateJobRequest(
  $id: String!,
  $categoryId: String,
  $description: String,
  $price: Int,
  $time: String,
  $address: String,
  $longitude: Float,
  $latitude: Float,
  $notice: String,
  $workTime: String,
  ) {
    updateJobRequest(
    id: $id,
    categoryId: $categoryId,
    description: $description,
    price: $price,
    time: $time,
    address: $address,
    longitude: $longitude,
    latitude: $latitude,
    notice: $notice,
    workTime: $workTime) {

      payload {
        ${jobRequestMutationFragment}
      }
    }
  }
`;

export const deleteRequest = Relay.QL`
  mutation deleteRequest($id: String!) {
    deleteJobRequest (id: $id) {
      payload {
        id
      }
    }
  }
`;
