import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { login } from '../../store/actions/session.actions';

class LoginPage extends React.Component {

  state = {
    login: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handeLogin = (e) => {
    e.preventDefault();
    const { login, password } = this.state;
    this.props.login({login, password});
  }

  render() {
    const { login, password } = this.state;
    const { isLogedIn } = this.props;
    return (
      isLogedIn
      ? <Redirect to="/" />
      : <div>
        <div>
          <label>
            Login:
            <input type="text" name="login" value={login} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <Link to="/registration">Sign Up</Link>
        </div>
        <button type="submit" onClick={this.handeLogin}>Login</button>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  isLogedIn: state.session.isLogedIn
});

export default connect(mapStateToProps, { login })(LoginPage);
