import React from 'react';
import { Route } from 'react-router-dom';


const PublicRoute = ({component: Component, ...rest}) => (
  <Route {...rest}>
    {
      props => <Component {...props}/>
    }
  </Route>
);

export default PublicRoute;
