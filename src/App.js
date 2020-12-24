import React from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group';

import css from './App.module.scss';

import HomePage from './Pages/Home';
import ContactsPage from './Pages/Contacts';
// Aimport ContactsList from './components/ContactsList';

const routes = [
  { path: '/', name: 'Home', Component: HomePage},
  { path: '/contacts', name: 'Contacts', Component: ContactsPage}
];

class App extends React.Component {
  render() {
    return (
     <BrowserRouter>
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </div>
        <div>
          <h2>Lesson 10 (React Animations)</h2>
          <div className={css['animated-item']}>Animated item</div>
          {/*<ContactsList/>*/}
          <div className="container">
            {routes.map(({path, Component}) => (
              <Route key={path} exact path={path}>
                {
                  ({match}) => (
                    <CSSTransition
                      in={match !== null}
                      timeout={500}
                      classNames={css}
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
        </div>
     </BrowserRouter>
    );
  }
}

export default App;
