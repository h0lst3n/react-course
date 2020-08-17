import React from 'react';
import withContext from './withContextHOC';


const ComponentWithContext = ({label, title}) => (
  <>
    <span>Label: {label}</span>
    <span>Title: {title}</span>
  </>
);

export default withContext(ComponentWithContext);
