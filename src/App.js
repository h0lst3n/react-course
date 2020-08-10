import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.scss';

import Layout from './Components/Layout';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import ContactsPage from './Pages/Contacts';
//import NotFoundPage from './Pages/404';

const App = () => {
  return (
    <Layout>
      <Switch>
        {/*
            BAD EXAMPLE!
            Такая форма записи вызывает ре-рендер
            <Route
              path="/"
              exact
              component={props => <HomePage {...props} />}
            />
        */}
       {/*
           GOOD EXAMPLE!
           Такая форма записи не вызывает ререндер
           patter: render props
           <Route
            path="/"
            exact
            render={props => <HomePage {...props} />}
            />
       */}
        <Route path='/' exact component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contacts' component={ContactsPage} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
