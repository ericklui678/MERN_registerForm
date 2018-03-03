import { CREATE_USER } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case CREATE_USER:
      console.log('create user reducer', action.payload.data);
      return state;
    default:
      return state;
  }
}
