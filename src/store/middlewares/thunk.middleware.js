const thunk = (state /* REDUX store API */) => next => action => {
  const {dispatch, getState } = state;
  return typeof action === 'function'
    ? action(dispatch, getState)
    : next(action);
}


  export default thunk;
