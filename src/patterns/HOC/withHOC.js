import React from 'react';

const withHigherOrderComponent = WrappedComponent => {
  return class WithHigherOrderComponent extends React.Component {

    render() {
      return <WrappedComponent {...this.props} extraProperty="extra property"/>
    }
  }
};

export default withHigherOrderComponent;
