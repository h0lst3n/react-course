import { createSelector } from 'reselect'

export const getAllPosts = state => state.posts.items;
export const isPostsLoading = state => state.posts.loading;
const getSelectedTags = state => state.posts.selectedTags;

export const getPostById = createSelector(
  [(state, id) => id, getAllPosts],
  (id, posts) => posts.find(post => post.id === id)
)

// export const getPostById = (state, id) => {
//   const posts = getAllPosts(state);
//
//   return posts.find(post => post.id === id);
// };

export const getPostsWithTags = createSelector(
  [getAllPosts, getSelectedTags],
  (posts, tags) => posts.filter(post => tags.some(tag => post.tags.includes(tag)))
)
// export const getPostsWithTags = state => {
//   const posts = getAllPosts(state);
//   const tags = getSelectedTags(state);
//
//   return posts.filter(post => tags.some(tag => post.tags.includes(tag)));
// };

export const getUserName = state => state.session.user.name;
export const isUserAuthenticated = state => state.session.authenticated;
