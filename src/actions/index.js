import axios from 'axios';

export const CREATE_USER = 'create_user';

export function createUser(values) {
  const request = axios.get(`http://localhost:3001`);
  
  return {
    type: CREATE_USER,
    payload: request
  };
}
