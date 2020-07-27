import React from 'react';

const ListItem = ({name, isCompleted, id, clickHandler}) =>(
  <li onClick={() => { clickHandler(id); }}>{`${isCompleted ? '[COMPLETED]': ''} ${name}`}</li>
);


export default ListItem;
