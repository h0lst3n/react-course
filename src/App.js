import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';

import Layout from './components/Layout';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import ContactsPage from './Pages/Contacts';
import NotFoundPage from './Pages/404';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/contacts" component={ContactsPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
      {
        /**
        BAD WAY
          <Route path="" component={props => <Component {...props} extraProps="props value">}>
        **/
      }
      {/** GOOD WAY
      <Route path="/about" render={props => <AboutPage {...props} extraProp="extra props value">}/>
      <Route path="/about">
        {props => <AboutPage {...props} extraProps="extra prop value"/>}
      </Route>
      **/}
    </Layout>
  );
}

export default App;
