import React from 'react';

import Button from './button';

class Counter extends React.Component {
  static defaultProps = {
    step: 1,
    initialCounter: 0
  };

  state = {
    counter: this.props.initialCounter,
    optionalStep: 1
  };

  handleIncrement = (e) => {
    // this.setState(/* updater, callback */);
    // this.setState({ counter: 10 }, this.onStateUpdate);
    // this.onStateUpdate();
    // this.setState({ optionalStep: 2 }, this.onStateUpdate);
    // this.setState({ counter: 4 }, this.onStateUpdate);
    // this.setState({ optionalStep: 1 }, this.onStateUpdate);
    // this.setState({ counter: 10 }, this.onStateUpdate);
    this.setState(prevState => {
      return { counter: prevState.counter + this.props.step};
    });
  };

  onStateUpdate = () => {
    console.log('The component state has been updated', this.state);
  };

  handleDecrement = (e) => {
    // this.setState(/* updater, callback */);
    this.setState(prevState => {
      return { counter: prevState.counter - this.props.step};
    });
  };

  render() {
    const { step } = this.props;
    const { counter } = this.state;
    return (
      <div>
        <strong>{counter}</strong>
        <Button label={`Decrement by ${step}`} onClick={this.handleDecrement}/>
        <Button label={`Increment by ${step}`} onClick={this.handleIncrement}/>
      </div>
    );
  };
}

export default Counter;
