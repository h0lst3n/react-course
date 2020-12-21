import React, { Component } from 'react';


const withFetch = url => WrapperComponent => {
  return class WithFetch extends Component {

    state = {
      data: [],
      loading: false,
      error: null
    }

    componentDidMount() {
      this.setState({ loading: true });

      fetch(url)
        .then(res => res.json())
        .then(data => this.setState({ data: data.hits }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }

    componentDidUpdate() {
      console.group(`WithFetch did receive data ${WrapperComponent.name}`);
      console.log(JSON.stringify(this.state.data));
      console.groupEnd();
    }

    render() {
      return <WrapperComponent {...this.props} data={this.state.data}/>;
    }
  }
};

export default withFetch;
