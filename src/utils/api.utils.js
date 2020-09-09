import axios from 'axios';

const API_URL = 'https://hn.algolia.com/api/v1/search?query='; // DON'T HARDCODE on production!

export const fetchData = query => {
  return axios
    .get(`${API_URL}${query}`)
    .then(response => response.data.hits);
};
