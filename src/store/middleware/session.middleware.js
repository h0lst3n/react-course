const sessionMiddleware = state => next => action => {
  if (!action.meta && !action.meta.saveToken) {
    return next(action);
  }

  const { access } = action.payload.data;

  localStorage.setItem('access', access);

  delete action.meta.saveToken;

  return next(action);
};

export default sessionMiddleware;
