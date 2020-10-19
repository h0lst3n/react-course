export default state => next => action => {
  if (action.meta.REST) {
    const {payload, onSuccess} = action;
    const {path} = action.metha;
    const token = state.session.token;
    if (/*not expired*/) {
      //do api call
      fetch(url, {
        data: payload,
        token
      }).then(response => response.json())
      .then(onSuccess);
    } else {
      fetch(/* refresh token url*/)
      .then(/* update access token*/)
      .then(/*do api call*/);
    }
  }
  return next(action);
}
