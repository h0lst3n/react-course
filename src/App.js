import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { getTokenDetails } from './store/actions/session.actions';

import { PublicRoute, PrivateRoute } from './Components/Routes';

import RegistrationPage from './Pages/Registartion';
import LoginPage from './Pages/Login';
import DashbaordPage from './Pages/Dashboard';
import SettingsPage from './Pages/Settings';
import ContactsPage from './Pages/Contacts';

class App extends React.Component {

  componentDidMount() {
    this.props.getTokenDetails()
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

export default connect(null, { getTokenDetails })(App);
