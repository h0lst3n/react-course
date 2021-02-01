import { request } from '../../utils/api.utils';

const dispatchActions = (dispatch, data, actions) => {
  if (Array.isArray(actions)) {
    actions.forEach((action) => {
      dispatch(action(data));
    });
  } else {
    dispatch(actions(data));
  }
};

const apiMiddleware = store => next => action => {
  if (!action.meta || !action.meta.api) {
    return next(action);
  }

  const { meta, payload } = action;

  request(meta.url).then((data) => {
    console.log('received data', data);

    delete action.meta.api;

    const { onSuccess, onSuccessCallback } = payload;

    if  (onSuccessCallback) {
      onSuccessCallback(data);
    }

    if (onSuccess) {
      dispatchActions(store.dispatch, data, onSuccess);
    }

    next(action);
  });
};

export default apiMiddleware;
