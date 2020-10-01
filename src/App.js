import React from 'react';
import ComponetnWithLifeCycle from './components/ComponentWithLifeCycle';
import './App.scss';

class App extends React.Component {

  state = {
    isToggled: false,
    error: null
  }

  // componentDidCatch(e) {
  //   console.log('error');
  //   this.setState({error: true});
  // }

  render = () => (<div>
      {
        !this.state.error && (<>
          <button
              type="button"
              onClick={() => this.setState((prevState) => ({isToggled: !prevState.isToggled}))}
            >Toggle
            </button>
          {
            this.state.isToggled
              ? <ComponetnWithLifeCycle/>
              : null
            }
          </>)
        }
        {this.state.error && <div>Error</div>}
    </div>)
}

export default App;
