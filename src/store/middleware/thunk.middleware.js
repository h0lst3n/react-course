const thunk = (/* store */ { dispatch, getState }) => next => action =>
  typeof action === 'function' ? action(dispatch, getState) : next(action);

export default thunk;
