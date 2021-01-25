import {
  SET_ARTICLES,
  SELECT_TAG,
  UNSELECT_TAG,
  SET_SEARCH_KEYWORD
} from '../actions/articles.actions';

import { getTags } from '../../utils/normalization.utils';

const initialState = {
  items: [],
  loading: false,
  tags: [],
  selectedTags: [],
  searchKeyword: ''
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLES: {
      const { data: articles } = action.payload;
      return {
        ...state,
        items: articles,
        tags: getTags(articles)
      };
    }
    case SELECT_TAG: {
      const { tag: selectedTag } = action.payload;
      return {
        ...state,
        tags: state.tags.filter(tag => tag !== selectedTag),
        selectedTags: [...state.selectedTags, selectedTag]
      }
    }
    case UNSELECT_TAG: {
      const { tag: unselectedTag } = action.payload;
      return {
        ...state,
        tags: [...state.tags, unselectedTag],
        selectedTags: state.selectedTags.filter(tag => tag !== unselectedTag),
      };
    }
    case SET_SEARCH_KEYWORD: {
      const { keyword: searchKeyword } = action.payload;
      return {
        ...state,
        searchKeyword
      };
    }
    default:
      return state;
  }
};

export default articlesReducer;
