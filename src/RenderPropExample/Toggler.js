import React from 'react';

class Toggler extends React.Component {

  state = {
    isOpen: false
  };

  toggle = () => this.setState(prevState => ({isOpen: !prevState.isOpen}));

  render() {
    return this.props.children({
      isOpen: this.state.isOpen,
      onToggle: this.toggle
    });
  }
}

export default Toggler;
