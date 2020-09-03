const INITITAL_STATE = {
  user: {
    name: 'John',
    email: 'john@doe.com'
  },
  authenticated: true,
  error: null,
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
      default:
        return state;
  }
}
