const defaultMiddleware = store => next => action => next(action);

export default defaultMiddleware;
