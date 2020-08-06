import React from 'react';

const Article = ({title, url, author, created}) => (
  <li>
    <h3>{title}</h3>
    <strong>{author}</strong>
    <p>{created}</p>
    <a href={url}>Read more</a>
  </li>
);

export default Article;
