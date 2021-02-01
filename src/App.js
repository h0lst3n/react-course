import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import RegistrationPage from './Pages/Registartion';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/registration" exact component={RegistrationPage}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
