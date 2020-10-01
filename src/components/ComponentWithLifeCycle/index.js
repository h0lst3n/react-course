import React from 'react';

class ComponetnWithLifeCycle extends React.Component {

  /** Mounting phase **/

  /**
   * - Initialize initial state
   * - Bind context to methods
   *
   * Can't call setState()
   */
  constructor() {
    super();
    console.log('constructor');
    this.state = {
      isTextVisible: false,
      keyword: '',
      data: []
    };
  }

  bounceTimer = null;

  /**
   * - Is calling before render() every time than state is updating
   * - Can use to set state depends on props
   * - Are not able to use `this`
   *
   * @param  {Object} nextProps next props
   * @param  {Object} prevState previos state
   * @return {Object}           should return object (new state) or null
   *
   * using very rare
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    console.group('getDerivedStateFromProps');
    console.log('nextProps:', nextProps);
    console.log('prevState', prevState);
    console.groupEnd();
    return null;
  }

  /**
   * Render method
   * Don't call setState()!!!!
   *
   * @return {JSX} JSX
   */
  render() {
    console.log('render');
    const {keyword, data} = this.state;
    return (<div>
        <p>Component with life cycle</p>
        {this.state.isTextVisible && <strong>Revealed text</strong>}
        <input
          type="text"
          name="keyword"
          value={keyword}
          placeholder="Enter keyword to search"
          onChange={this.onKeywordChange}
          />
        {/**<button
          type="button"
          onClick={() => this.setState((prevState) => ({isTextVisible: !prevState.isTextVisible}))}
        >
          Show text
        </button>**/}
        {/**
          <button
            type="button"
            onClick={() => {throw Error('new error')}}
          >
            Throw Error
          </button>
        **/}
        {data && data.map((item, index) => (<div key={index}>{item.name}</div>))}
      </div>)
  }

  /**
   * Executing after component has been mounted in DOM
   *
   * - We are able call anyy side effect (e.g. HTTP-requests)
   *
   */
  componentDidMount() {
    console.log('componentDidMount');
  }

  /** Updating phase **/
  // Executing after setState, receiving new props or forceUpdate()


  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('getDerivedStateFromProps');
  //   console.log('nextProps:', nextProps);
  //   console.log('prevState', prevState);
  //   return null;
  // }

  /**
   * Here we can set do we need call re-render
   * Gives you possibility to compare prev state and props
   *
   * Don't call setState()!!!!
   *
   * You can use React.PureComponent that will perform not deep comparing
   *
   * @param  {Object} nextProps next props
   * @param  {Object} prevState previos state
   * @return {Boolean}          returns decision do we need call re-render or not
   */
  shouldComponentUpdate(nextProps, prevState) {
    console.log('shouldComponentUpdate');
    console.log(this.state, prevState);
    const {keyword, data} = prevState;
    const newKeywod = this.state.keyword;
    const newData = this.state.data;
    return keyword.trim() !== newKeywod.trim() || data.length !== newData.length;
  }



  /**
   * Executes before DOM update when all updated are ready to adding
   * Can use it to get previous DOM values before update (e.g. scroll position)
   *
   * @param  {Object} prevProps previous props
   * @param  {Object} prevState previous state
   * @return {any|null}         this value will as third arg in componentDidUpdate
   */

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return 1;
  }

  /**
   * Executing after DOM update
   * Doesn't execute after first render
   * Can use setState() with condition
   * Can call side effects (e.g. HTTP-request)
   * Can use third party libs with new data
   *
   * @param  {Object} prevProps previous props
   * @param  {Object} prevState previous state
   * @param  {any}    snapshot  getSnapshotBeforeUpdate excuting result
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    if (this.bounceTimer) {
      clearTimeout(this.bounceTimer);
    }
    this.bounceTimer = setTimeout(() => {
      console.log('Here should API request');
      this.onApiResponse([{name: `New item #1`}]);
    }, 2000);
  }

  /** Unmouing phase **/

  /**
   * Executes right before unmounting from DOM
   * Good place do remove HTTP-requests, timer or event listeners
   * There is no reason call setState()
   *
   */
  componentWillUnmount() {
    console.log('componentWillUnmount');
    if (this.bounceTimer) {
      setTimeout(this.bounceTimer);
      this.bounceTimer = null;
    }
  }

  onKeywordChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  onApiResponse = (newData) => {
    this.setState(({data}) => ({data: [...data, ...newData]}));
    clearTimeout(this.bounceTimer);
    this.bounceTimer = null;
  }


}

export default ComponetnWithLifeCycle;
