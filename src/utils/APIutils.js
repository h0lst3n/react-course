import axios from 'axios';

const API_URL = 'https://hn.algolia.com/api/v1/search?query=';

export const fetchDataFromAPI = searchQuery => {
  return axios
        .get(`${API_URL}${searchQuery}`)
        .then(response => normalize(response.data.hits))
};


const normalize = (data) => {
  return data.map((item, index) =>
     ({
      title: item.title || `Untitled #${index}`,
      author: item.author,
      url: item.url,
      created: item.created_at
    })
  );
};
