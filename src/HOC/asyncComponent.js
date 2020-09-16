import React from 'react';

const DefaultLoading = () => (<div>Loading...</div>);

const asyncComponent = ({loader, loading: Loading}) => {
  return class AsyncComponent extends React.Component {
    state = {
      component: null
    };

    async componentDidMount() {
      const { default: component } = await loader();

      this.setState({ component });
    }

    render() {
      const { component: LoadedComponent } = this.state;

      return LoadedComponent
        ? <LoadedComponent {...this.props}/>
        : Loading ? <Loading/> : <DefaultLoading/>
    }

  }
};

export {asyncComponent, DefaultLoading };
