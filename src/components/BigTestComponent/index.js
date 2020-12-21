import React from 'react';

const BigTestComponent = ({data}) => (
  <div>
    <b>List:</b>
    {
      data.map(item => (
        <li>
          <b>{item.title}</b>
        </li>
      ))
    }
  </div>
);

export default BigTestComponent;
