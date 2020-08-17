import React from 'react';
import withHigherOrderComponent from './withHigherOrderComponent';


const SomeComponent = props => <div>{JSON.stringify(props)}</div>;

export default withHigherOrderComponent(SomeComponent);
