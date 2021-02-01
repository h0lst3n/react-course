import React from 'react';
import { connect } from 'react-redux';

import { register } from '../../store/actions/session.actions';

class RegistrationPage extends React.Component {

  state = {
    login: '',
    password: '',
    repeatPassword: '',
    isRegisterDisabled: true
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value}, this.setIsRegisterDisabled);
  }

  setIsRegisterDisabled = () => {
    const { login, password, repeatPassword } = this.state;

    this.setState({
      isRegisterDisabled: login === '' ||
        password === '' ||
        password !== repeatPassword
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { login, password } = this.state;
    this.props.register({login ,password});
  }

  render() {
    const { login, password, repeatPassword, isRegisterDisabled } = this.state;
    return (
      <div>
        <h2>Registartion</h2>
        <form>
          <div>
            <label>
              <b>Login</b>
              <input type="text" placeholder="Enter login" value={login} name="login" onChange={this.handleChange}/>
            </label>
          </div>
          <div>
            <label>
              <b>Password</b>
              <input type="password" placeholder="Enter password" value={password} name="password" onChange={this.handleChange}/>
            </label>
          </div>
          <div>
            <label>
              <b>Repeat password</b>
              <input type="password" placeholder="Enter password again" value={repeatPassword} name="repeatPassword" onChange={this.handleChange}/>
            </label>
          </div>
          <button type="submit" onClick={this.onSubmit} disabled={isRegisterDisabled}>Register</button>
        </form>
      </div>
    );
  }
}

export default connect(null, {register})(RegistrationPage);
