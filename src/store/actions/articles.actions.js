export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const SET_ARTICLES = 'SET_ARTICLES';
export const SELECT_TAG = 'SELECT_TAG';
export const UNSELECT_TAG = 'UNSELECT_TAG';
export const SET_SEARCH_KEYWORD = 'SET_SEARCH_KEYWORD';

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

export const selectTag = tag => ({
  type: SELECT_TAG,
  payload: {
    tag
  }
});

export const unselectTag = tag => ({
  type: UNSELECT_TAG,
  payload: {
    tag
  }
});

export const setArticleSearchKeyword = keyword => ({
  type: SET_SEARCH_KEYWORD,
  payload: {
    keyword
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
