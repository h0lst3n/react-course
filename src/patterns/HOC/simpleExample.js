import React, { Component } from 'react';


const withHigherOrderComponent = WrapperComponent => {
  return class WithHigherOrderComponent extends Component {
    render() {
      return <WrapperComponent {...this.props} extraProp="Extra property"/>;
    }
  }
};

export default withHigherOrderComponent;
