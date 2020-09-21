import React from 'react';

export const AppContext = React.createContext(/*default value*/{value: 'default value', title: 'TITTTTLE'});

AppContext.displayName = 'AppContext';

//<AppContext.Consumer>
// { context => (
//  <div>{context.value /* default value */}</div>
// )
// }
//<AppContext.Consumer/>

//<AppContext.Provider value={{value: 'new value'}}>
//<AppContext.Provider value={{value: 'some new value'}}>
  //<AppContext.Consumer>
  // { context => (
  //  <div>{context.value /* some new value */}</div>
  // )
  // }
  //<AppContext.Consumer/>
//<AppContext.Provider/>
// <AppContext.Provider/>

// export const AppWithContext = () => (
//   <AppContext.Provider value="some value">
//     <div className="app-div">
//       <Container/>
//     </div>
//   </AppContext.Provider>
// );
//
// const Container = () => (
//   <div className="app-container">
//     <ContainerItem text="item-1"/>
//     <ContainerItem text="item-2"/>
//   </div>
// );
//
// const ContainerItem = ({text}) => (
//   <AppContext.Consumer>
//     {
//       title => (
//         <span>
//           {`${title} : ${text}`}
//         </span>
//       )
//     }
//   </AppContext.Consumer>
// );

// <AppContext.Provider value={contextValue}>
//   <SomeComponent> /* doesn't use context*/
//     <AppContext.Consumer>
//       {/* some content */} Will call re-render even if parent skips re-render using shouldComponentUpdate
//     </AppContext.Consumer>
//   </SomeComponent>
// </AppContext.Provider>
