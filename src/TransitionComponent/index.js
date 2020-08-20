import React from 'react';

import {CSSTransition} from 'react-transition-group';

import './style.scss';

class TransitionComponent extends React.Component {

  state = {
    inProp: true
  }

  handleClick = () => {
    this.setState(prevState => ({inProp: !prevState.inProp}));
  }
  //*-active *-enter-active *-exit *extit-active
  render() {
    const {inProp} = this.state;
    return (
      <div>
        <CSSTransition in={inProp} timeout={{appear: 3000, enter: 4000, exit: 4000}} className='example-node'>
          <div>
            I will recieve example-node-classes
          </div>
        </CSSTransition>
        <button type='button' onClick={this.handleClick}> Click on Enter</button>
      </div>
    );
  }
}

export default TransitionComponent;
