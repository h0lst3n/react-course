import React from 'react';

const asyncComponent = ({loader, loading: Loading}) => {
  return class AsyncComponent extends React.Component {

    state = {
      component: null
    };

    async componentDidMount() {
      const { default: component } = await loader();

      ///loadComponentA().then(module => this.setState({component: module.default}));

      this.setState({ component });
    }

    render() {
      const { component: Component } = this.state;
      // const Component = this.state.component;
      return Component ? (
        <Component {...this.props} />
      ) : (
        <Loading />
      );
    }
  }
};

export default asyncComponent;
