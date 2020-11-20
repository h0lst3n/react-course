import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';

import SignUpPage from './Pages/SignupPage';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignUpPage}/>
    </BrowserRouter>
  );
}

export default App;
