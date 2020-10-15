import React from 'react';

export default class TestComponent extends React.Component {
  render = () => (<div>{JSON.stringify(this.props)}</div>)
};
