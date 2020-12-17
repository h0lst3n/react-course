import React, { lazy, Suspense }  from 'react';
import { Switch, Route } from 'react-router-dom';

import Loading from './components/common/Loading';

// import pages from './components/pages';

const AsyncHomePage = lazy(() => import('./components/pages/HomePage' /* webpackChunkName: "home-page" */));
const AsyncContactsPage = lazy(() => import('./components/pages/ContactsPage' /* webpackChunkName: "home-page" */));

const HomePage = () => <Suspense fallback={<Loading/>}><AsyncHomePage/></Suspense>;
const ContactsPage = () => <Suspense fallback={<Loading/>}><AsyncContactsPage/></Suspense>;
//const loadComponentA = () => import('./components/ComponentA')

class App extends React.Component {



  render() {
    // const { HomePage, ContactsPage } = pages;
    // const HomePage = loadHomePage();
    // const ContactsPage = loadContactsPage();
    return (
      <div>
        <h2>Lesson 8 (Code Splitting)</h2>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/contacts" exact component={ContactsPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
