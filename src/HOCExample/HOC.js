import React, {Component} from 'react';

const withHigherOrderComponent = WrappedComponent => {
  return class WithHigherOrderComponent extends Component {
    render() {
      return (<WrappedComponent {...this.props} extraProp="Some text extra property"/>);
    }
  }
};

export default withHigherOrderComponent;
