import React from 'react';
import withContext from './withContextHOC';


const ComponentWithContext = ({title}) => (
  <>
    <span>Title: {title}</span>
  </>
);

export default withContext(ComponentWithContext);
