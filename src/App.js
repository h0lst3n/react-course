import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { logout, signIn } from './store/actions/session.actions';

import { checkIsTokenValid } from './utils/token.utils';

import { PublicRoute, PrivateRoute } from './Components/Routes';

import RegistrationPage from './Pages/Registartion';
import LoginPage from './Pages/Login';
import DashbaordPage from './Pages/Dashboard';
import SettingsPage from './Pages/Settings';
import ContactsPage from './Pages/Contacts';

class App extends React.Component {

  componentDidMount() {
    checkIsTokenValid().then(({isValid}) => {
      if (!isValid) {
        this.props.logout();
      } else {
        this.props.signIn();
      }
    });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <PrivateRoute path="/" exact component={DashbaordPage}/>
          <PrivateRoute path="/settings" component={SettingsPage}/>
          <PrivateRoute path="/contacts" component={ContactsPage}/>
          <PublicRoute path="/registration" component={RegistrationPage}/>
          <PublicRoute path="/login" component={LoginPage}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { logout, signIn})(App);
