import React from 'react';
import {BrowserRouter, Switch, Redirect} from 'react-router-dom';
import { PublicRoute, PrivateRoute } from './Components/common/Routes';
import LoginPage from './Components/Pages/Login';
import HomePage from './Components/Pages/Home';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={HomePage} />
        <PublicRoute path="/login" component={LoginPage} />
        <Redirect to="/login"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
