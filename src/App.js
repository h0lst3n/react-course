import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import SignUpPage from './Pages/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SignUpPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
