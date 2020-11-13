const loggerMiddleware = store => next => action => {
  console.group(action.type);
  console.log('dispatching', action);
  console.groupEnd(action.type);

  return next(action);
}

export default loggerMiddleware;
