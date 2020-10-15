import React from 'react';
import withContext from './withContext';


const ComponentWithContext = ({context}) => (
  <>
    <span>A: {context.a}</span>
    <span>B: {context.b}</span>
  </>
);

export default withContext(ComponentWithContext);
