import React from 'react';

class ExampleComponent extends React.Component {

  state = {
    name: '',
    hasError: false
  }

  timer = null;

  static getDerivedStateFromProps(props, prevState) {
    return prevState.name
    ? { ...prevState}
    : {...prevState, name: props.name };
  }

  render() {
    const {name, hasError} = this.state;
    return (
      <div>
        { !hasError && <h2>{name}</h2> }
        { hasError && <h2>Ooops, something went wrong</h2>}
      </div>
    );
  }

  componentDidMount() {
    this.runTimer();
  }

  shouldComponentUpdate(prevProps, nextState) {
    const { name: propsName } = prevProps;
    const { name: stateName } = nextState;
    return stateName.indexOf(propsName) > -1;
  }

  getSnapshotBeforeUpdate() {
    return document.activeElement.scrollHeight;
  }

  componentDidUpdate(prevProps, nextState, snapshot) {
    console.log(`Component did update. Snapshot value: ${snapshot}`);
    this.runTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  componentDidCatch() {
    this.setState({hasError: true})
  }

  runTimer = () => {
    this.stopTimer();
    this.timer = setTimeout(() => this.updateName(), 5000);
  }

  stopTimer = () => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  };

  updateName = () => {
    this.setState(prevState => ({name: `${prevState.name} 1`}));
  }
}

export default ExampleComponent;
