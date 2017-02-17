import store from '../store';
import { query, Relay } from '../utils/wire';

export let user = Relay.QL`{
  user {
    id
    type
    username
    email
    fullname
    phone
    creditNumber
    creditExp
  }
}`;