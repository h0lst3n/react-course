import React from 'react';

class Toggler extends React.Component {

  state = {
    isOpen: false
  }

  toggle = () => this.setState(({isOpen: prevIsOpen}) => ({isOpen: !prevIsOpen}));

  render = () => this.props.children({
    isOpen: this.state.isOpen,
    onToggle: this.toggle
  });

}

export default Toggler;
