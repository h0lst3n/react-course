import React from 'react';

export default (props) => (
  <div>
    <button type="button" onClick={props.onClick}>{props.action} by {props.value}</button>
  </div>
);
