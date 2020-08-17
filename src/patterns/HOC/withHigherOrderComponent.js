import React, {Component} from 'react';

const withHigherOrderComponent = WrappedComponent => {
  return class withHigherOrderComponent extends Component {
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
}

export default withHigherOrderComponent;
