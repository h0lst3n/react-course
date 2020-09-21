import React from 'react';
import ExampleComponentWithHOC from './HOCExample/ExampleComponent/withHOC';
import ExampleComponentWithLog from './HOCExample/ExampleComponent/withLog';
import ExampleComponentWithFetch from './HOCExample/ExampleComponent/withFetch';
import ExampleComoponentWithToggle from './HOCExample/ExampleComponent/withToggle';
import TogglerExample from './RenderPropExample/Example';
import ItemListExample from './RenderPropExample/ItemListExample';
import ComponentWithContext from './ContextExample/ComponentWithContext';

import './App.scss';

const App = () => {
  return (
    <>
      <ExampleComponentWithHOC {...{title: 'with HOC title'}}/>
      <ExampleComponentWithLog {...{title: 'with log title'}}/>
      <ExampleComponentWithFetch {...{title: 'with fetch title'}}/>
      <ExampleComoponentWithToggle/>
      Toggler Component With Render Prop
      <TogglerExample/>
      <ItemListExample/>
      Component with context example
      <ComponentWithContext/>
    </>
  );
}

export default App;
