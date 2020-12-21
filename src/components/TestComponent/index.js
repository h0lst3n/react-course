import React from 'react';
import StyledAreaItem from '../StyledAreaItem';

const TestComponent = (props) => (
  <div>
  <b>Props</b>
  {props.children}
  <StyledAreaItem>Another example</StyledAreaItem>
  </div>

);

export default TestComponent;
