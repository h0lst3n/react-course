import React from 'react';

export const AppContext = React.createContext('default text');

AppContext.displayName = 'AppContext';

//<AppContext.Provider value={someValue}>
//<AppContext.Consumer>
// { context => {
//    returns JSX
//   }
// }
//<AppContext.Consumer/>
//<AppContext.Provider/>

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
