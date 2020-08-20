import React from 'react';

import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group';
//import TransitionComponent from './TransitionComponent';
//import TransitionGroupComponent from './TransitionGroupComponent';
//
// import SwitchTransitionComponent from './SwitchTransitionComponent';
//
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import ContactsPage from './Pages/Contacts';
import './App.scss';

const routes = [
  { path: '/', name: 'Home', Component: HomePage},
  { path: '/contacts', name: 'Contacts', Component: ContactsPage},
  { path: '/about', name: 'About', Component: AboutPage}
];

const App = () => {
  // {/* <TransitionComponent/> */}
  // {/* <TransitionGroupComponent/> */}
  // {/* <SwitchTransitionComponent/> */}
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
                    timeout={500}
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
