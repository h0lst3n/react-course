export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const SET_ARTICLES = 'SET_ARTICLES';

export const fetchArticles = (url) => ({
  type: FETCH_ARTICLES,
  meta: {
    api: true
  },
  payload: {
    url,
    onSuccess: setArticles
  }
});

// export const fetchArticles = args => dispatch => {
//   fetch('https://hn.algolia.com/api/v1/search?query=react')
//     .then(response => response.json())
//     .then(data => dispatch(setArticles(data.hits)));
// }

export const setArticles = data => ({
  type: SET_ARTICLES,
  payload: {
    data: data.hits
  }
});
