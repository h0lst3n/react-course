import React from 'react';
import {connect} from 'react-redux';

import { doLogin } from '../../store/actions/auth.actions';

class LoginForm extends React.Component {

  state = {
    login: '',
    password: ''
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {login, password} = this.state;
    this.props.doLogin(
      {login, password},
      this.props.onLogin
    );
  }

  render() {
    const {login, password} = this.state;
    return (
      <form>
        <div>
          <label>
            Login:
            <input type="text" placeholder="Login" value={login} onChange={this.handleChange} name="login"/>
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" placeholder="Password" value={password} onChange={this.handleChange} name="password"/>
          </label>
        </div>
        <div>
          <button type="submit" onClick={this.onSubmit}>Login</button>
        </div>
      </form>
    );
  }
};

export default connect(null , {doLogin})(LoginForm);
