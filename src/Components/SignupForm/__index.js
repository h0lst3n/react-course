import React from 'react';
import { connect } from 'react-redux';

import { doSignup } from '../../store/actions/session.actions';

class SignUpForm extends React.Component {

  state = {
    login: '',
    password: '',
    repeatPassword: '',
    isSignupEnable: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { login, password } = this.state;
    this.props.doSignup({login, password});
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value}, () => {
      const { login, password, repeatPassword } = this.state;
      const isSignupEnable = login !== '' &&
        password !== '' &&
        password === repeatPassword;
      this.setState({isSignupEnable})
    });
  }

  render() {
    const { login, password, repeatPassword, isSignupEnable } = this.state;

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
        <fieldset>
          <label>
            Repeat password:
            <input type="password" placeholder="Repeat password" name="repeatPassword" value={repeatPassword} onChange={this.handleChange}/>
          </label>
        </fieldset>
        <button type="submit" onClick={this.handleSubmit} disabled={!isSignupEnable}>Sign Up</button>
      </form>
    );
  }
};

export default connect(null, { doSignup })(SignUpForm);
