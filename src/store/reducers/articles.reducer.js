import { SET_ARTICLES } from '../actions/articles.actions';

const articlesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ARTICLES: {
      const { data: articles } = action.payload;
      return articles;
    }
    default:
      return state;
  }
};

export default articlesReducer;
