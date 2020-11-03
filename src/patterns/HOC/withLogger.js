import React from 'react';

const withLoggerHOC = WrappedComponent => {
  return class WithLoggerHOC extends React.Component {

    componentDidMount() {
      console.group(`WithLoggerHOC output @${WrappedComponent.name}`)
      console.log(this.props);
      console.groupEnd();
    }

    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
};

export default withLoggerHOC;
