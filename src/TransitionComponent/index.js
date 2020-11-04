import React from 'react';
import { Transition } from 'react-transition-group';

const duration = 1000;

const defaultStyle = {
  tranistion: `opacity ${duration} linear`,
  opacity: 0
};

const transitionStyle = {
  entering: { opacity: 0.7 },
  entered: { opacity: 1 },
  exiting: { opacity: 0.7 },
  exited: { opacity: 0 },
}

const TranistionComponent = ({in: inProp}) => (
  <Transition in={inProp} timeout={{appear: 500, enter: duration, exit: 300}} mountOnEnter={true}>
    {
      state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyle[state]
        }}>
          I'm tranistion example component
          <div>
            <span>My current state is: <strong>{state}</strong></span>
          </div>

        </div>
      )
    }
  </Transition>
);

export default TranistionComponent;
