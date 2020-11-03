import React from 'react';

import './App.scss';

import ExampleComponent from './patterns/HOC/Example';
import withHigherOrderComponent from './patterns/HOC/withHOC';
import withLoggerHOC from './patterns/HOC/withLogger';
import withFetchHOC from './patterns/HOC/withFetch';
import withToggleHOC from './patterns/HOC/withToggle';
import Toggler from './patterns/RenderProps/Toggler';

/** Context examples **/
import AppContext from './ContextExample';
import ConsumerComponent from './ContextExample/ConsumerComponent';
import withContextHOC from './ContextExample/withContext';

const WithContextHOCExample = withContextHOC(AppContext)(ExampleComponent);

const WithTogglerComponent = () => (
  <div>
    <Toggler>
      {
        ({isOpen, onToggle}) => (
          <>
            <button type="button" onClick={onToggle}>
              {isOpen ? 'Hide' : 'Show'}
            </button>

            {isOpen && <strong>First toggler's child</strong>}
          </>
        )
      }
    </Toggler>

    <Toggler>
      {
        ({isOpen, onToggle}) => (
          <>
            <button type="button" onClick={onToggle}>
              {isOpen ? 'Hide' : 'Show'}
            </button>

            {isOpen && <strong>Second toggler's child</strong>}
          </>
        )
      }
    </Toggler>
  </div>
);

const ContextExampleSection = () => (
  <>
    <strong>Context Usage Exmaple:</strong>

    <AppContext.Provider value={{a:3, b:1, c:5}}>
      <ConsumerComponent/>
      <AppContext.Consumer>
        { context => <ExampleComponent {...context}/>}
      </AppContext.Consumer>

      <AppContext.Consumer>
        { context => (
          <AppContext.Provider value={{a: context.a + 2, b: context.b -3, c:5}}>
            <ConsumerComponent/>
            <AppContext.Consumer>
              { context => <ExampleComponent {...context}/>}
            </AppContext.Consumer>
          </AppContext.Provider>
        )}
      </AppContext.Consumer>

    </AppContext.Provider>

    <AppContext.Consumer>
      { context => <ExampleComponent {...context}/>}
    </AppContext.Consumer>

    <WithContextHOCExample/>
  </>

);

class App extends React.Component {

    render() {
      const WithHOCExample = withHigherOrderComponent(ExampleComponent);
      const WithLoggerExample = withLoggerHOC(ExampleComponent);
      const WithFetchExample =
        withFetchHOC('http://hn.algolia.com/api/v1/search?query=react')(ExampleComponent);
      const WithToggleExample = withToggleHOC(ExampleComponent);

      return (
        <>
          <div>
            <strong>With HOC Example:</strong>
            <WithHOCExample propOne="prop one" propTwo="prop two"/>
          </div>

          <div>
            <strong>With Logger Example:</strong>
            <WithLoggerExample propOne="With Logger Component"/>
          </div>

          <div>
            <strong>With Toggle Example:</strong>
            <WithToggleExample propOne="With Toggle Component"/>
          </div>

          <div>
            <strong>With Render Props Example:</strong>
            <WithTogglerComponent/>
          </div>

          <ContextExampleSection/>
          <div>
            <strong>With Fetch Example:</strong>
            <WithFetchExample/>
          </div>

        </>
      )
    }
  };

  export default App;
