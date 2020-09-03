const INITIAL_STATE = {
  posts: {
    items: [],
    loading: false,
    selectedTags: []
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
