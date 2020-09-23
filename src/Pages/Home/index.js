import React from 'react';
import {Transition, CSSTransition, TransitionGroup} from 'react-transition-group';
import css from './style.module.scss';
import './style.scss';

const transitionStyles = {
  entering: {opacity: 1},
  entered: {opacity: 0.7},
  exiting: {opacity: 1},
  exited: {opacity: 0.7}
};

class HomePage extends React.Component {

  state = {
    inProp: false,
    items: []
  };

  handleClick = () => {
    this.setState(
      prevState => ({
        items: [...prevState.items, ...[1]],
        inProp: !prevState.inProp
      }));
  };

  removeItem = (index) => {
    const {items} = this.state;
    items.splice(index, 1);
    this.setState({items});
  }

  renderItems = () => {
    const {items,inProp} = this.state;
    return (
      items.map((item, index) => (
        <CSSTransition in={inProp} classNames="list-item" key={index} timeout={1500}>
          <div>
            tranistion group item #{index}
            <button type="button" onClick={() => this.removeItem(index)}>remove</button>
          </div>
        </CSSTransition>
      ))
    );
  }

  render() {
    const {inProp} = this.state;
    const items = this.renderItems();
    return (
      <div>
        <h1>Home Page</h1>
        <div>
        <Transition in={inProp} timeout={2500}>
          {
            state => (
              <div style={{
                ...transitionStyles[state]
              }}>div with Tranisition <strong>{state}</strong></div>
            )
          }
        </Transition>
        <CSSTransition in={inProp} timeout={{appear: 2000, enter: 2000, exit: 2000}} classNames={{
          appear: 'my-fade',
          appearActive: 'my-fade-active-appear',
          appearDone: 'my-fade-done-appear',
          enter: 'my-fade-enter',
          enterActive: 'my-fade-active-enter',
          enterDone: 'my-fade-done-enter',
          exit: 'my-fade-exit',
          exitActive: 'my-fade-active-exit',
          exitDone: 'my-fade-done-exit'
        }}
          onEnter={() => console.log('on enter')}
          onEntering={() => console.log('on entering')}
          onEntered={() => console.log('on entered')}
          onExit={() => console.log('on exit')}
          onExiting={() => console.log('on exiting')}
          onExited={() => console.log('on exited')}
        >
          <div>div with CSSTransition</div>
        </CSSTransition>
        <TransitionGroup>
          {items}
        </TransitionGroup>
        </div>
        <button
          type="button"
          className={css['button']}
          onClick={this.handleClick}
        >Click Me!</button>
      </div>
    );
  }


}
export default HomePage;
