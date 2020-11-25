import React from 'react';
import { connect } from 'react-redux';

import { doLogin } from '../../store/actions/session.actions';

class LoginForm extends React.Component {

  state = {
    login: '',
    password: '',
    isLoginEnable: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { login, password } = this.state;
    this.props.doLogin({login, password});
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value}, () => {
      const { login, password } = this.state;
      const isLoginEnable = login !== '' &&
        password !== '';
      this.setState({isLoginEnable})
    });
  }

  render() {
    const { login, password, isLoginEnable } = this.state;

    return (
      <form>
        <fieldset>
          <label>
            Login:
            <input type="text" placeholder="Enter login" name="login" value={login} onChange={this.handleChange}/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            Password:
            <input type="password" placeholder="Enter password" name="password" value={password} onChange={this.handleChange}/>
          </label>
        </fieldset>
        <button type="submit" onClick={this.handleSubmit} disabled={!isLoginEnable}>Login</button>
      </form>
    );
  }
};

export default connect(null, { doLogin })(LoginForm);
