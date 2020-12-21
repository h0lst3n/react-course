import React, { Component } from 'react';


const withToggle = WrapperComponent => {
  return class withToggle extends Component {

    state = {
        isOpen: false
    }

    toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

    render() {
      const { isOpen } = this.state;
      return (
        <>
          <button onClick={this.toggle}>
            { isOpen ? 'Hide' : 'Show' }
          </button>

          { isOpen && <WrapperComponent {...this.props} /> }
        </>
      );
    }
  }
};

export default withToggle;
