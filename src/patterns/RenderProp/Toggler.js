import React, { Component } from 'react';

class Toggler extends Component {

  state = {
    isOpen: false
  };

  toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { isOpen } = this.state;
    return this.props.children({
      isOpen: isOpen,
      onToggle: this.toggle
    });
  }

}

export default Toggler;
