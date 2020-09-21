import React from 'react';
import withLog from '../withLog';

const MyComponentWithLog = props => (<div>Component With Log</div>);

export default withLog(MyComponentWithLog);
