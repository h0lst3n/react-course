import React from 'react';

import ExampleComponent from './components/LifecicleExample';

class App extends React.Component {

  state = {
    exampleItems: []
  };

  addExample = () => {
    const listLength = this.state.exampleItems.length;
    const id = `exmaple-item-${listLength + 1}`;
    const name = `Example Item #${listLength + 1}`;

    this.setState(prevState => (
      {
        exampleItems: prevState.exampleItems.concat([{ id, name }])
      }
    ));
  }

  removeExample = (id) => {
    this.setState(prevState => ({
      exampleItems: prevState.exampleItems.filter((item) => item.id !== id)
    }));
  };

  render() {
    const { exampleItems: items } = this.state;

    return (
      <div>
        <h2>React Lifecicle Methods (Lesson 5)</h2>
        <div><button type="button" onClick={this.addExample}>Add example</button></div>
        {
          items.map(({id, name}) =>
          (<div key={id}>
            <ExampleComponent {...{id, name}}/>
            <button type="button" onClick={() => this.removeExample(id)}><b>X</b></button>
          </div>)
        )
        }
      </div>
    );
  }
}

export default App;
