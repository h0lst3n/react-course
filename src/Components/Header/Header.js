import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../store/actions/session.actions';

const Header = ({ logout }) => (
  <div>
    <span>Navigation</span>
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
    <button type="button" onClick={logout}>Logout</button>
  </div>
);

export default connect(null, { logout })(Header);
