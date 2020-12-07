import React from 'react';

class LifecicleExample extends React.Component {

  /* MOUNTING PHASE */

  state = {};

  /**
   * Calling before each render
   * can be used to set state depends on props
   * @param {Object} props - props
   * @param {Object} prevState - previous state object
   * @return {Object|null} new state object or null
   * in case don't need to update state
   */
  static getDerivedStateFromProps(props, prevState) {
    return null;
  }

  /**
   * Using to create interface
   * WARNING!: Don't call setState();
   * @return {JSX}
   */
  render() {
    return (
      <div>Lifecicle example</div>
    );
  }

  /**
   * Calling right after component has been mounted
   * Can be uset to call side effects like HTTP-requests etc.
   * @return {[type]} [description]
   */
  componentDidMount() {
    console.log('componentDidMount');
  }

  /* UPDATING PHASE */

  /**
   * Calling only before render of existing component
   * using only for render optimization
   * you also use React.PureComponent instaed of Component
   * it's using not deep comparing
   * @param  {Object} prevProps previous props
   * @param  {Object} nextState next state
   * @return {Boolean}          return should we re-render component or not
   */
  shouldComponentUpdate(prevProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  /**
   * Calling right before add component to DOM
   * Has access to DOM directly
   * Can be used to receive some data from existing DOM elements
   * (e.g. scroll position)
   * @param  {Object} prevProps [description]
   * @param  {Object} prevState [description]
   * @return {any}  this result will be set to next function as snapshot
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }

  /**
   * Calling after re-render of component on update
   * can use setState() or call another side effects e.g. HTTP-requests
   * setState() should be wrapped in conditions
   * in opposit you can create infinity loop
   * @param  {Object} prevProps previous props
   * @param  {[type]} prevState previous state
   * @param  {[any} snapshot  snapshot that has been returned from getSnapshotBeforeUpdate
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  /* UNMOUNTING PHASE */

  /**
   * Calling before component will be removed from DOM
   */
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  /**
   * Can be used for render exceptions
   * Able to use setState
   * @param  {Object} error
   * @param  {String} info  error information
   */
  componentDidCatch(error, info) {

  }

}

export default LifecicleExample;
