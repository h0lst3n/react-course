import { configureStore } from '@reduxjs/toolkit';
import INITIAL_STATE from './constants/initialState';
import { notes } from './reducers';

export default () => configureStore({
  reducer: { notes },
  preloadedState: INITIAL_STATE,
  devTools: true
});


// import { createStore } from 'redux';
//
// import INITIAL_STATE from './constants/initialState';
// import rootReducer from './reducers';
//
// export default () => createStore(/* reducers, [initialState], [echancers] */
//   rootReducer,
//   INITIAL_STATE,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
