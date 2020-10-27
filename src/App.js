import React from 'react';

import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group';

import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import ContactsPage from './Pages/Contacts';
import './App.scss';

const routes = [
  { path: '/', name: 'Home', Component: HomePage },
  { path: '/contacts', name: 'Contacts', Component: ContactsPage },
  { path: '/about', name: 'About', Component: AboutPage }
];

const App = () => (
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

export default App;

//
// import TransitionComponent from './TransitionComponent';
// import CSSTransitionComponent from './CSSTransitionComponent';
// import TransitionGroupComponent from './TransitionGroupComponent';
// import SwitchTransitionComponent from './SwitchTransitionComponent';
//
// import style from './app.module.scss';

// class App extends React.Component {
//
//   state = {
//     inProp: false
//   };
//
//   setInProp = () => {
//     this.setState(prevState => ({inProp: !prevState.inProp}));
//     //this.setState(({inProp: prevInProp}) => ({inProp: !prevInProp}));
//   }
//
//   render() {
//     return (
//         <>
//           <button type="button" onClick={this.setInProp}>Clicm Me!</button>
//           <div className={style['animated-div']}>Animated div</div>
//           <TransitionComponent in={this.state.inProp}/>
//           <CSSTransitionComponent in={this.state.inProp}/>
//           <SwitchTransitionComponent />
//           <TransitionGroupComponent/>
//         </>
//       );
//   }
// }
