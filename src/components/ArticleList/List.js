import React from 'react';

const List = ({articles}) => (
  <ul>
    {articles.map(item => <ListItem key={item.objectID} {...item}/>)}
  </ul>
);

const ListItem = ({url, title, created_at}) => (
  <li>
    <a href={url}><strong>{title}</strong></a>
    <div>Created: {created_at}</div>
  </li>
);

export default List;
