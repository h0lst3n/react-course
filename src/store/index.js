import { createStore } from 'redux';
import initialState from './constants/initialState';
import rootReducer from './reducers';

const createStoreFunc = () =>
  createStore(/* reducer, [preloadedState], [enhancer] */
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default createStoreFunc;
