import React from 'react';

import AppContext from './ContextExample';

import ConsumerComponent from './ContextExample/ConsumerComponent';

import ComponentWithContext from './ContextExample/ComponentWithContext';

// import Toggler from './patterns/renderProps/Toggler';
//

// import TestComponent from './components/TestComponent';

// import withHOC from './patterns/HOC/withHOC';
// import withLog from './patterns/HOC/withLog';
// import withFetch from './patterns/HOC/withFetch';
// import withToggle from './patterns/HOC/withToggle';

import './App.scss';

// const WithHOCExample = withHOC(TestComponent);
// const WithLogExample = withLog(TestComponent);
// const WithFetchExample = withFetch('https://hn.algolia.com/api/v1/search?query=react')(TestComponent);
// const WithToggleExample = withToggle(TestComponent);
//
//
class WrappedWithContext extends React.Component {
  state = {
    valueOne: 1,
    valueTwo: 2
  }

  updateState = () => {
    this.setState(prevState => ({
      valueOne: prevState.valueOne + 1,
      valueTwo:  prevState.valueTwo + 1
    }));
  }

  render() {
    return (
      <>
        <button type="button" onClick={this.updateState}>Change Context Value</button>
        <AppContext.Provider value={this.state}>
          <ConsumerComponent index="1"/>
          <ComponentWithContext />
        </AppContext.Provider>
      </>
      );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        React patterns
          <WrappedWithContext/>
          <ConsumerComponent  index="2"/>
          <ComponentWithContext />
      </div>
    )
  }
}

// const App = () => (
//   <div>
//   React patterns
//   <AppContext.Provider value={{a: 2, b: 3, c: 4}}>
//     <ConsumerComponent/>
//   </AppContext.Provider>
//     <ConsumerComponent/>
//   {/** Context **/}
//   {/** RENDER PROPS **/}
//   {/**<Toggler>
//     {
//       ({isOpen, onToggle}) => (
//         <>
//           <>
//             <button type="button" onClick={onToggle}>
//               {isOpen ? 'Hide' : 'Show'}
//             </button>
//
//             {isOpen && <div>Toggler content</div>}
//           </>
//           <>
//           <button type="button" onClick={onToggle}>
//             {isOpen ? 'AnotherHide' : 'AnotherShow'}
//           </button>
//           </>
//         </>
//       )
//     }
//   </Toggler>**/}
//
//   {/** Hogher Order Compoent **/}
//   {/**<WithHOCExample/>
//   <WithLogExample someProp="some prop value"/>
//   <WithToggleExample/>
//   <WithFetchExample/>**/}
//   </div>
// );

export default App;
