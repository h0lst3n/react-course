import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.scss';

// import Layout from './Components/Layout';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import ContactsPage from './Pages/Contacts';
import NotFoundPage from './Pages/404';

const App = () => {
  return (
    <>
      <Switch> {/*Returns first matched child route*/}
        <Route path="/" exact component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/contacts"  component={ContactsPage}/>
        <Redirect to="/"/>
      </Switch>
    </>
  );
}

//PART #1
// <>
//   <Route path="/" exact component={HomePage}/> {/*location.pathname === '/' ? <HomePage/> : null*/}
//   <Route path="/about" component={AboutPage}/> {/*location.pathname.test('about') ? <AboutPage/> : null*/}
//   <Route path="/contacts"  component={ContactsPage}/> {/*location.pathname.test('contacts') ? <AboutPage/> : null*/}
// </>


// {/*<Layout>
//   <Switch>
//     {/*
//         BAD EXAMPLE!
//         Такая форма записи вызывает ре-рендер
//         <Route
//           path="/"
//           exact
//           component={props => <HomePage {...props} />}
//         />
//
//         GOOD EXAMPLE!#1
//         <Route
//           path="/"
//           exact
//           component={HomePage}}
//         />
//
//        GOOD EXAMPLE!#2
//        Такая форма записи не вызывает ререндер
//        pattern: render props
//        <Route
//         path="/"
//         exact
//         render={props => <HomePage {...props} customProps={somePropObject} />}
//         />
//         GOOD EXAMPLE!#3
//         <Route
//         path="/"
//         exact/>
//          <HomePage customProps={somePropObject}>
//         </Rpute>
//   </Switch>
// </Layout>*/}

export default App;
