const initialState = {
  user: {
    name: "John Doe",
    email: "johndoe@gmail.com"
  },
  authenticated: true,
  error: null
};

export default (state = initialState, action ) => state;
