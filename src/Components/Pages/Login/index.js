import React from 'react';
import { connect } from 'react-redux';
import { doLogin } from '../../../store/actions/session.actions';

class LoginPage extends React.Component {

  state = {
    login: '',
    password: ''
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actions.doLogin().then(() => {
      this.props.history.push('/dashboard');
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Login:
            <input type="text" placeholder="login" name="login" onChange={this.handleChange}/>
          </label>
          <label>
            Password:
            <input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    doLogin: () => dispatch(doLogin())
  }
});

export default connect(null ,mapDispatchToProps)(LoginPage);
