import React from 'react';
import withHigherOrderComponent from '../HOC';

const MyComponent = props => (<div>{JSON.stringify(props, null, 2)}</div>);

export default withHigherOrderComponent(MyComponent);
