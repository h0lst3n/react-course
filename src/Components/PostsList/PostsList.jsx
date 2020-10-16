import React from 'react';

const PostsList = ({posts}) => (
  <div>
    {
      posts.map(({name, id, text, tags}) => (
        <div key={id}>
          <strong>{name}</strong>
          <p>{text}</p>
          <span>{tags.join(', ')}</span>
        </div>
      ))
    }
  </div>
);

export default PostsList;
