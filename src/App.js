import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { PublicRoute, PrivateRoute } from './Components/common/Routes';

import './App.scss';

import SignUpPage from './Pages/SignUp';
import LoginPage from './Pages/LoginPage';
import DashboardPage from './Pages/DashboardPage';

import NotesList from './Components/NotesList';

const App = () => {
  return (
    <div>
      <NotesList/>
    </div>
  );
}

export default App;
