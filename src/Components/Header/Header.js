import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../store/actions/session.actions';

const Header = ({ logout, email }) => (
  <div>
    <span>{email}</span>
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
    <button type="button" onClick={logout}>Logout</button>
  </div>
);

const mapStateToProps = state => ({
  email: state.session.user.email
});

export default connect(mapStateToProps, { logout })(Header);
