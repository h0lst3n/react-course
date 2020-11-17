import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { PublicRoute, PrivateRoute } from './Components/common/Routes';

import './App.scss';

import SignUpPage from './Pages/SignUp';
import LoginPage from './Pages/LoginPage';
import DashboardPage from './Pages/DashboardPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/signup" component={SignUpPage} />
        <PublicRoute path="/login" component={LoginPage} />
        <PrivateRoute path="/" component={DashboardPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
