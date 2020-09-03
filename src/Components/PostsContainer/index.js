import {connect} from 'react-redux';
import Posts from './Posts.jsx';
import {
  getAllPosts,
  getPostsWithTags,
  isPostsLoading
} from '../../selectors/posts.selectors';


const mapStateToProps = state => ({
  posts:  getAllPosts(state),
  postsWithTags: getPostsWithTags(state),
  isLoadin: isPostsLoading(state)
});

export default connect(mapStateToProps, null)(Posts);
