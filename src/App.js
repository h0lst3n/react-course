import React from 'react';

import StyledArea from './components/StyledArea';
import StyledAreaItem from './components/StyledAreaItem';

import TestComponent from './components/TestComponent';
// import BitTestComponent from './components/BigTestComponent';
// import AnotherTestComponent from './components/AnotherTestComponent';
//
// import { withHigherOrderComponent, withLog, withFetch, withToggle } from './patterns/HOC';
//
// import { AppContextProvider, AppContextConsumer } from './context/AppContext';
//
// const WithHigherOrderComponent = withHigherOrderComponent(TestComponent);
// const WithLogComponent = withLog(TestComponent);
// // const WithFetchComponent = withFetch('https://hn.algolia.com/api/v1/search?query=react')(TestComponent);
// const WithFetchToggleComponent = withFetch('https://hn.algolia.com/api/v1/search?query=react')(withToggle(BitTestComponent));



class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Lesson 9 (React Patterns)</h2>
      {/*  <WithHigherOrderComponent propOne="One" propTwo="Two"/>
        <WithLogComponent descirption="Component with log"/>
        {/*<WithFetchComponent>With fetch</WithFetchComponent>
        <WithFetchToggleComponent/>
        <AnotherTestComponent/>
        <AppContextProvider value={{ theme: 'red' }}>

          <AppContextConsumer>
            {
              context => (<div>{context.theme}</div>)
            }
          </AppContextConsumer>

          <AppContextProvider value={{ theme: 'green' }}>
            <AppContextConsumer>
              {
                context => (
                  <div>
                  {context.theme}
                  <AppContextProvider value={{ theme: 'blue' }}>
                    <AppContextConsumer>
                      {
                        context => (<div>{context.theme}</div>)
                      }
                    </AppContextConsumer>
                  </AppContextProvider>
                  </div>
                )
              }
            </AppContextConsumer>
          </AppContextProvider>
        </AppContextProvider>*/}
        <StyledArea>
          <TestComponent> asdasdad </TestComponent>
          <StyledAreaItem>
            Example #2
          </StyledAreaItem>
        </StyledArea>
      </div>
    );
  }
}

export default App;
