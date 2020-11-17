import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({match, component: Component, isAuthenticated, ...rest}) => (
  <Route {...rest}>{
    props => (
      isAuthenticated
        ? <Component {...props}/>
        : <Redirect to='/login'/>
    )
  }
  </Route>
)

const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);
