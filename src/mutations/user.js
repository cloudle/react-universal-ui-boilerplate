import { query, Relay } from '../utils/wire';

export const login = Relay.QL`
  mutation login($username:String!, $password:String!) {
    login(username: $username, password: $password) {
      status {error}
      payload {
        token
        type
      }
    }
  }
`;

export const insertUser =  Relay.QL`
  mutation insertUser(
    $username: String!,
    $password: String!,
    $email: String!,
    $type: String!,
    $fullname: String!,
    $phone: String!,
    $creditNumber: String,
    $creditExp: String) {
      insertUser(
        username: $username,
        password: $password,
        email: $email,
        type: $type,
        fullname: $fullname,
        phone: $phone,
        creditNumber: $creditNumber,
        creditExp: $creditExp) {
          payload {
            id, token, type,
          }
        }
    }
`;
