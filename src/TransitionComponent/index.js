import React from 'react';
import  { Transition } from 'react-transition-group';

const phaseDuration = 1000;

const defaultStyle = {
  tranistion: `opacity ${phaseDuration}ms lienear`,
  opacity: 0
};

const transitionStyle = {
  entering: { opacity: 0.7 },
  entered: { opacity: 1 },
  exiting: { opacity: 0.5 },
  exited: { opacity: 0.2 }
};

const TransitionComponent = ({in: inProp}) => (
  <Transition in={inProp} timeout={phaseDuration} unmountOnExit={true}>
    {state => (
      <div style={
        {
          ...defaultStyle,
          ...transitionStyle[state]
        }
      }>
        I'm tranistion component. Current phase is {state}
      </div>
    )}
  </Transition>
);

export default TransitionComponent;
