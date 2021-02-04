import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, isLogedIn, ...rest}) => (
  isLogedIn ? <Route
    render={props => <Component {...props}/>}
    {...rest}
    />
    : <Redirect to="/login" />
);

const mapStateToProps = ({session}) => ({
  isLogedIn: session.isLogedIn
});

export default connect(mapStateToProps)(PrivateRoute);
