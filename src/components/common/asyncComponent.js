import React from 'react';

const Loading = () => (
  <div className='default-loading'>
    <span className="default-spinner">Loading...</span>
  </div>
);

const asyncComponent = ({loader, loading: Loading /* Default loading component*/}) => {
  return class AsyncComponent extends React.Component {
    state = {
      component: null
    };

    async componentDidMount() {
      const { default: component } = await loader();

      this.setState({component});
    }

    render() {
      const {component: LoadedComponent } = this.state;

      return LoadedComponent ? (
        <LoadedComponent {...this.props} />
      ) : (
        <Loading />
      );
    }
  }
}

export default asyncComponent;
