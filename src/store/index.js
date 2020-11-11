import { configureStore } from '@reduxjs/toolkit';
import initialState from './constants/initialState';

import { notesReducer } from './reducers';

export default () => configureStore({
  reducer: {
    notes: notesReducer
  },
  preloadedState: initialState,
  devTools: true
});

// import { createStore } from 'redux';
// import initialState from './constants/initialState';
// import rootReducer from './reducers';
//
// const createStoreFunc = () =>
//   createStore(/* reducer, [preloadedState], [enhancer] */
//     rootReducer,
//     initialState,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
//
// export default createStoreFunc;
