import React from 'react';

const withToggle = WrappedComponent => {
  return class WitToggle extends React.Component {

    state = {
      isOpen: false
    }

    toggle = () => this.setState(prevState => ({isOpen: !prevState.isOpen}));

    render = () => (
      <>
        <button type="button" onClick={this.toggle}>
          {this.state.isOpen ? 'Hide' : 'Show'}
        </button>

        {this.state.isOpen && <WrappedComponent {...this.props} />}
      </>
    );
  }
}

export default withToggle;
