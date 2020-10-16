import { createSelector } from 'reselect';

export const getAllPosts = state => state.posts.items;

export const isPostsLoading = state => state.posts.loading;

// export const getPostsById = (state, id) => {
//   const posts = getAllPosts(state);
//   return posts.find(post => post.id === id);
// }

export const getPostById = createSelector(
  [(state, id) => id, getAllPosts],
  (id, posts) => posts.find(post => post.id === id)
);

export const getSelecedTags = state => state.posts.selectedTags;

export const getPostsWithTags = createSelector(
  [getAllPosts, getSelecedTags],
  (posts, tags) => posts.filter(post => tags.some(tag => post.tags.includes(tag)))
);

// export const getPostsWithTags = state => {
//   const posts = getAllPosts(state);
//   const tags = getSelecedTags(state);
//
//   return posts.filter(post => tags.some(tag => post.tags.includes(tag)));
// };
