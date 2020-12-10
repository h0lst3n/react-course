import axios from 'axios';

const API_URL = 'https://hn.algolia.com/api/v1'

const fetchArticlesWithQuery = query => {
  return axios
    .get(`${API_URL}//search?query=${query}`)
    .then(normalizeArticlesData);
}

const normalizeArticlesData = ({data}) => {
  return data.hits.map(article => ({
    title: article.title,
    url: article.url,
    id: article.objectID,
    author: article.author,
    created: article['created_at'].split('T')[0]
  }));
};

export default {
  fetchArticlesWithQuery
}
