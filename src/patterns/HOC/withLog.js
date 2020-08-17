import React, {Component} from 'react';

const withLog = WrappedComponent => {
  return class WithLog extends Component {
    componentDidMount() {
      console.group(`WithLog output @${WrappedComponent.name}`);
      console.log(this.props);
      console.groupEnd();
    }

    render() {
      return <WrappedComponent {...this.ptops}/>
    }
  }
};

export default withLog;
