import React from 'react';
import { connect } from 'react-redux';

import { doLogout } from '../../store/actions/session.actions';
import { fetchUserData } from '../../store/actions/user.actions';

class DashboardPage extends React.Component {

  componentDidMount() {
    this.props.fetchUserData();
  }

  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <button type="button" onClick={this.props.doLogout}>Logout</button>
      </div>
    )
  }
}

export default connect(null, { doLogout, fetchUserData })(DashboardPage);
