import React, {Component} from 'react';

const withToggle = WrappedComponent => {
  return class WithToggle extends Component {
    state = {
      isOpen: false
    };

    toggle = () => this.setState(prevState => ({isOpen: !prevState.isOpen}));

    render() {
      const {isOpen} = this.state;
      return (
        <>
          <button type="button" onClick={this.toggle}>
            {isOpen ? 'Hide' : 'Show'}
          </button>

          {isOpen && <WrappedComponent {...this.props}/>}
        </>
      );
    }
  }
};

export default withToggle;
