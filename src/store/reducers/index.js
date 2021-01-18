import { combineReducers } from 'redux';

import articlesReducer from './articles.reducer';

export default combineReducers({articles: articlesReducer});
