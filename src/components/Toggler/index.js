import React from 'react';

class Toggler extends React.Component {

  state = {
    isOpen: true
  }

  handleToggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <h2>Toggler</h2>
        <button
          type="button"
          onClick={this.handleToggle}
        >
          {
            isOpen ? 'Hide' : 'Show'
          }
        </button>
        <div>
          {
            isOpen
              ? (
                <>
                  <span>Toggler content</span>
                  <span>Toggler content</span>
                  {this.props.children}
                </>
              )
              : null
          }
        </div>
      </div>
    );
  }
}

export default Toggler;
