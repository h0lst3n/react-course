import { configureStore } from '@reduxjs/toolkit';
import contacts from './slices/contacts.slice';

import inialState from './constants/initialState';

export const initializeStore = () => configureStore({
  reducer: { contacts },
  devTools: true,
  preloadedState: inialState
});

// import { createStore } from 'redux';
//
// import rootReducer from './reducers';
//
// import /* @type Object - preloadedState */ inialState from './constants/initialState';
//
// export const initializeStore = () => createStore(
//   /* reducer, [preloadedState], [enhancer] */
//   rootReducer,
//   inialState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
