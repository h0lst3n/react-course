
const apiMiddleware = ({dispatch}) => next => action => {
  if (!action.meta || !action.meta.api) {
    return next(action);
  }

  const { onSuccess, url } = action.payload;

  fetch(url)
    .then(response => response.json())
    .then(data => {

      delete action.meta.api;

      if (onSuccess) {
        dispatch(onSuccess(data))
      }

      return next(action);
    });
}

export default apiMiddleware;
