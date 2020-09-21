import React from 'react';
import withToggle from '../withToggle';

const MyComponentWithToggle = props => (<div>Component with toggle HOC</div>);

export default withToggle(MyComponentWithToggle);
