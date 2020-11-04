import React from 'react';
// import TransitionComponent from './TransitionComponent';
// import CSSTransitionComponent from './CSSTransitionComponent';
// import TransitionGroupComponent from './TransitionGroupComponent';

import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group';

import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import ContactsPage from './Pages/Contacts';
import './App.scss';

// class App extends React.Component {
//
//   state = {
//     inProp: false
//   };
//
//   handleClick = () => {
//     this.setState(({inProp: prevInProp}) => ({inProp: !prevInProp}));
//   };
//
//   render() {
//     return (
//       <>
//         <button type="button" onClick={this.handleClick}>Update inProp</button>
//         <div>Animation with React transition group</div>
//         <div className="animated-div">Animated div</div>
//         <TransitionComponent in={this.state.inProp}/>
//         <CSSTransitionComponent in={this.state.inProp}/>
//         <TransitionGroupComponent/>
//       </>
//     );
//   }
// }

const routes = [
  { path: '/', name: 'Home', Component: HomePage},
  { path: '/contacts', name: 'Contacts', Component: ContactsPage},
  { path: '/about', name: 'About', Component: AboutPage}
];

const App = () => {
  return (
    <BrowserRouter>
      <>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="container">
          {routes.map(({path, Component}) => (
            <Route key={path} exact path={path}>
              {
                ({match}) => (
                  <CSSTransition
                    in={match !== null}
                    timeout={1500}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Component/>
                    </div>
                  </CSSTransition>
                )
              }
            </Route>
          ))}
        </div>
      </>
    </BrowserRouter>

  );
}

export default App;
