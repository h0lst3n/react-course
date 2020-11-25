import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginForm from '../../Components/LoginForm';

const LoginPage = ({ isAuthenticated }) => (
  isAuthenticated
    ? <Redirect to="/" />
    : (
      <div>
        <h2>Login Page</h2>
        <LoginForm/>
      </div>
    )
);

const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated
});

export default connect(mapStateToProps)(LoginPage);
