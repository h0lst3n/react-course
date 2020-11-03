import React from 'react';

const withFetchHoc = url => WrappedComponent => {
  return class WithFetchHoc extends React.Component {

    state={
      data: [],
      loading: false,
      error: null
    };

    componentDidMount() {
      this.setState({lading: true});
      fetch(url)
        .then(response => response.json())
        .then(data => {this.setState({data: data.hits})})
        .catch(error => this.setState({error}))
        .finally(() => this.setState({lading: false}))
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state}/>
    }
  }
};

export default withFetchHoc;
