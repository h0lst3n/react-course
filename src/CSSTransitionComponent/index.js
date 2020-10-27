import React from 'react';
import {CSSTransition} from 'react-transition-group';
import style from './style.module.scss';

const classNames = {
  appear: 'css-appear',
  appearActive: 'css-appear-active',
  appearDone: 'css-appear-done',
  enter: 'css-enter',
  enterActive: 'css-enter-active',
  enterDone: 'css-enter-done',
  exit: 'css-exit',
  exitActive: 'css-exit-active',
  exitDone: 'css-exit-done'
};

const CSSTransitionComponent = ({in: inProp}) => (
  <CSSTransition
    in={inProp}
    timeout={3000}
    classNames={style/*classNames*/}
    onEnter={() => console.log('onEnter')}
    onEntering={() => console.log('onEntering')}
    onEntered={() => console.log('onEntered')}
    onExit={() => console.log('onExit')}
    onExiting={() => console.log('onExiting')}
    onExited={() => console.log('onExited')}
  >
    <div>
      CSS Transition Component
    </div>
  </CSSTransition>
);

export default CSSTransitionComponent;
