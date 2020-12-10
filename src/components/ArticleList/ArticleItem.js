import React from 'react';

const ArticleItem = ({
  url,
  title,
  created,
  author
}) => (
  <li>
    <a href={url} target="_blank" rel="noreferrer noopener">
      {title || "No title"}
    </a>
    <p>Created: {created} by <strong>{author}</strong></p>
  </li>
);

export default ArticleItem;
