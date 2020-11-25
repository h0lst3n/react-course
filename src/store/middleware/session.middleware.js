const sessionMiddleware = state => next => action => {
  if (!action.meta || !action.meta.token) {
    return next(action);
  }

  const actionType = action.meta.token.action;

  if (actionType === 'save') {
    const { access } = action.payload.data;

    localStorage.setItem('access', access);
  }

  if (actionType === 'delete') {
    localStorage.removeItem('access');
  }

  delete action.meta.token;

  return next(action);
};

export default sessionMiddleware;
