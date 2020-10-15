import React from 'react';

const withFetch = url => WrappedComponent => {
  return class WithFetch extends React.Component {

    state = {
      data: [],
      loading: false,
      error: null
    }

    componentDidMount = () => {
      this.setState({loading: true});

      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({data: data.hits}))
        .catch(error => this.setState({error}))
        .finally(() => this.setState({loading:false}));
    }

    render = () => <WrappedComponent {...this.props} {...this.state}/>
  }
}

export default withFetch;
