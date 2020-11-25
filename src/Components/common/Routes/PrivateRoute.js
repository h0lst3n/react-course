import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({component: Component, isAuthenticated, ...rest}) => (
  <Route {...rest}>
    {
      props => (
        isAuthenticated
          ? <Component {...props} />
          : <Redirect to="/login" />
      )
    }
  </Route>
);

const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated
});

export default connect(mapStateToProps)(PublicRoute);
