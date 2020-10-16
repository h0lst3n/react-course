import { connect } from 'react-redux';
import PostsList from './PostsList.jsx';

import {
  getAllPosts,
  getPostsWithTags,
  isPostsLoading
} from '../../store/selectors/posts.selectors';

const mapStateToProps = state => ({
  posts: getAllPosts(state),
  postsWithTags: getPostsWithTags(state),
  isLoadin: isPostsLoading(state)
});

export default connect(
  mapStateToProps,
  null
)(PostsList);
