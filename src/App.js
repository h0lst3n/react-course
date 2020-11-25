import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import './App.scss';

import { PublicRoute, PrivateRoute } from './Components/common/Routes';

import SignUpPage from './Pages/SignupPage';
import DashboardPage from './Pages/DashboardPage';
import LoginPage from './Pages/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact component={DashboardPage}/>
        <PublicRoute path="/login" exact component={LoginPage}/>
        <PublicRoute path="/signup" exact component={SignUpPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
