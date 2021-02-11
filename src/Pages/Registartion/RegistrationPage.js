import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { register } from '../../store/actions/session.actions';

class RegistrationPage extends React.Component {

  state = {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    isRegisterDisabled: true
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value}, this.setIsRegisterDisabled);
  }

  setIsRegisterDisabled = () => {
    const { name, email, password, repeatPassword } = this.state;

    this.setState({
      isRegisterDisabled:
        name === '' ||
        email === '' ||
        password === '' ||
        password !== repeatPassword
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    this.props.register({name, email ,password});
  }

  render() {
    const { isLogedIn } = this.props;
    const { name, email, password, repeatPassword, isRegisterDisabled } = this.state;
    return (
      isLogedIn
      ? <Redirect to="/"/>
      : (<div>
        <h2>Registartion</h2>
        <form>
          <div>
            <label>
              <b>name</b>
              <input type="text" placeholder="Enter name" value={name} name="name" onChange={this.handleChange}/>
            </label>
          </div>
          <div>
            <label>
              <b>email</b>
              <input type="text" placeholder="Enter email" value={email} name="email" onChange={this.handleChange}/>
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
      </div>)
    );
  }
}

const mapStateToProps = state => ({
  isLogedIn: state.session.isLogedIn
});

export default connect(mapStateToProps, {register})(RegistrationPage);
