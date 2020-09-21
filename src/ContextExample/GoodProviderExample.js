import React from 'react';
const {Provider, Consumer} = React.createContext();

export default class GoodContextProvider extends React.Component {

  static Consumer = Consumer;

  toggleProviderProp = () => {
    this.setState(state => ({
      prop: state.time === 'day' ? 'night' : 'day'
    }));
  };

  state = {
    time: 'day',
    toggleTime: this.toggleProviderProp
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
};
