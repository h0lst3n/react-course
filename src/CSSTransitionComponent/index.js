import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './style.module.scss';

const CSSTransitionComponent = ({in: inProp}) => (
  <CSSTransition
    in={inProp}
    timeout={1500}
    classNames={
      /*{
      enter: 'css-transition-enter',
      enterActive: 'custom-class css-transition-enter-active',
      enterDone: 'custom-class css-transition-enter-done',
      exit: 'hell-exit',
      exitActive: 'custom-class css-transition-exit-active',
      exitDone: 'custom-class css-transition-exit-done'
    }*/
    styles
  }
  onEnter={() => console.log('enter')}
  onEntering={() => console.log('entering')}
  onEntered={() => console.log('entered')}
  onExit={() => console.log('exit')}
  onExiting={() => console.log('exiting')}
  onExited={() => console.log('exited')}
  >
    <div>CSSTransition Example</div>
  </CSSTransition>
);

export default CSSTransitionComponent;
