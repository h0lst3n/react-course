import React from 'react';

const withHOC = WrappedComponent => {
  return class WithHOC extends React.Component {
    render = () => <WrappedComponent {...this.props} extraProps='extra props value'/>
  }
}

export default withHOC;
