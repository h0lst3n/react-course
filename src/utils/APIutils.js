import axios from 'axios';

const API_URL = 'https://hn.algolia.com/api/v1/search?query=';

const getSearchUrl = (query, page) => `https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`;

export const fetchDataFromAPI = (searchQuery, page) => {
  return axios
        .get(getSearchUrl(searchQuery, page))
        .then(response => response.data)
};
