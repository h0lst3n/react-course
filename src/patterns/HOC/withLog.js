import React, { Component } from 'react';

const withLog = WrapperComponent => {
  return class WithLog extends Component {

    componentDidMount() {
      console.group(`WithLog output ${WrapperComponent.name}`);
      console.log(this.props);
      console.groupEnd();
    }

    render() {
      return <WrapperComponent {...this.props} extraProp="Extra property"/>;
    }
  }
};

export default withLog;
