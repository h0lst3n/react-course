import React from 'react';

const withLog = WrappedComponent => {
  return class WithLog extends React.Component {

    componentDidMount = () => {
      console.group(`WithLog output @${WrappedComponent.name}`);
      console.log(this.props);
      console.groupEnd();
    }

    render = () => <WrappedComponent {...this.props} extraProps='extra props value'/>
  }
}

export default withLog;
