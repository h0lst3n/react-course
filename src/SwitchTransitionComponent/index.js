import React from 'react';
import {SwitchTransition, CSSTransition} from 'react-transition-group';
import './style.scss';

class SwitchTranstitionComponent extends React.Component {

  state = {
    someProp: false
  }

  handleSwitch = () => {
    this.setState(prevState => ({someProp: !prevState.someProp}));
  }

  render() {
    const {someProp} = this.state;
    return (
      <SwitchTransition>
        <CSSTransition
          key={someProp ? 'key-1' : 'key-2'}
          timeout={1500}
          addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
          classNames='toggle'
          >
          <button type="button" onClick={this.handleSwitch}>
            { someProp  ? "Switch OFF" :  "Switch ON" }
          </button>
      </CSSTransition>
      </SwitchTransition>
    );
  }
}

export default SwitchTranstitionComponent;
