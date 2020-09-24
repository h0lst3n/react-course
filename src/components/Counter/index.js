import React from 'react';
import CounterButton from './CounterButton';

class Counter extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   this.handleDecrement = this.handleDecrement.bind(this);
  //   this.state = {
  //    value: this.props.initialValue
  //   }
  // }
  //
  static defaultProps = {
    initialValue: 0,
    step: 1
  }

  state = {
    value: this.props.initialValue
  }

  handleIncrement = (e) => {
    //RIGHT WAY: this.setState(updater<Object|Function>, callback<Function>);
    //WRONG WAY: this.state.property = value;
    // const { value } = this.state
    // this.setState({value: value + 1});
    // console.log('before update', this.state.value);
    // this.setState(prevState => ({value: prevState.value + 1}));
    // console.log('after update', this.state.value);

    // for (let i = 0; i < 3; i++) {
    //   console.log('before update', this.state.value);
    //   // this.setState({value: this.state.value + 1}, () => console.log(this.state.value));
    //   //this.setState({value: 0 + 1});
    //   this.setState((prevState/*, props*/) => {
    //     console.log(prevState.value);
    //
    //     return {value: prevState.value + 1};
    //   }, () => console.log('after update', this.state.value));
    // }
    //
    this.setState((prevState, props) => ({value: prevState.value + props.step}));
  }

  handleDecrement = (e) => {
    this.setState((prevState, props) => ({value: prevState.value - props.step}))
  }

  render() {
    const {value} = this.state;

    return (
      <div >
        <strong>{value}</strong>
        <div>
          <CounterButton onClick={this.handleIncrement} action="Increment" value={value}/>
          <CounterButton onClick={this.handleDecrement} action="Decrement" value={value}/>
        </div>
      </div>
    );
  }
}

export default Counter;
