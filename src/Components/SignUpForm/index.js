import React from 'react';
import { connect } from 'react-redux';

import { signUp } from '../../store/actions/auth.actions';

class SignUpForm extends React.Component {

  state = {
    login: '',
    password: '',
    repeatPassword: '',
    isSignUpEnable: false
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value}, this.validatePassword);
  }

  validatePassword = () => {
    const { password ,repeatPassword, login } = this.state;
    this.setState({
      isSignUpEnable: password.length > 3 &&
      password === repeatPassword &&
      login !== ''/* !!login | Boolean(login) */
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { login, password } = this.state;
    this.props.signUp({login, password});
  }

  render() {
    const { login, password, repeatPassword, isSignUpEnable } = this.state;
    return (
      <form>
        <h2>Sign Up form</h2>
        <div>
          <label>
            Login:
            <input
              type="text"
              placeholder="Login"
              value={login}
              name="login"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Repeat Password:
            <input
              type="password"
              placeholder="Repeat Password"
              value={repeatPassword}
              name="repeatPassword"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <button type="submit" disabled={!isSignUpEnable} onClick={this.handleSubmit}>Sign Up</button>
      </form>
    )
  }
};

export default connect(null, { signUp })(SignUpForm);
