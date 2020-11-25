import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, restricted, ...rest}) => (
  <Route {...rest}>
    {
      props => (
        restricted
          ? <Redirect to="/login" />
          : <Component {...props} />
      )
    }
  </Route>
);

export default PublicRoute;
