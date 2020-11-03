import React from 'react';

const withToggleHOC = WrappedComponent => {
  return class WithToggleHOC extends React.Component {

    state = {
      isOpen: false
    };

    toggle = () => this.setState(({isOpen: prevIsOpen}) => ({isOpen: !prevIsOpen}));

    render = () => (
      <>
        <button type="button" onClick={this.toggle}>
          {this.state.isOpen ? 'Hide' : 'Show'}
        </button>

        {this.state.isOpen && <WrappedComponent {...this.props}/>}
      </>
    )
  }
};

export default withToggleHOC;
