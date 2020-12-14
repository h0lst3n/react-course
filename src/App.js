import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import ContactsPage from './Pages/Contacts';
// import NotFoundPage from './Pages/NotFound';

class App extends React.Component {

  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact >
            {
              props => <HomePage {...props} extraProps="value" />
            }
          </Route>
          <Route path="/about" component={AboutPage} />
          <Route path="/contacts" component={ContactsPage} />
          <Redirect to="/" />
          {/* <Route component={NotFoundPage}/> */}
        </Switch>
      </>
    );
  }
}

export default App;
