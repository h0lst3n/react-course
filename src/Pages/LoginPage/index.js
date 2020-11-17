import React from 'react';
import LoginForm from '../../Components/LoginForm';

const LoginPage = ({history}) => {
  return (
    <div>
      <LoginForm onLogin={() => history.push('/')}/>
    </div>
  )
};

export default LoginPage;
