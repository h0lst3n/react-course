import React from 'react';
import { connect } from 'react-redux';
import { doLogout } from '../../../store/actions/session.actions';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h2>Home page</h2>
        <button type="button" onClick={this.props.actions.doLogout}>Logout</button>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  actions: {
    doLogout: () => dispatch(doLogout())
  }
});

export default connect(null ,mapDispatchToProps)(HomePage);
