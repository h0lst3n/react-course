import axios from 'axios';
import { getToken } from './token.utils';

const API_URL = 'https://goit-phonebook-api.herokuapp.com/';

export const request = ({method = 'get', url, data, authorized = false }) => {
  const headers = {};
  if (authorized) {
    headers['Authorization'] = getToken();
  }

  return axios({
    method,
    url: `${API_URL}${url}`,
    data,
    headers
  });
};
