import React from 'react';

import ItemList from './ItemList';


export default () => (

  <div>
    <ItemList>
      {({items, onAdd}) => (
        <div>
          <div>{JSON.stringify(items)}</div>
          <button type="button" onClick={() => {onAdd('item#1')}}>Add Item</button>
        </div>
      )}
    </ItemList>
  </div>
);
