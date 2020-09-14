import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class HomePage extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Home page</h2>
        <Link to={{ pathname: '/contacts?category=all', state: { from: '/'}}}><strong>Go to</strong> Contacts page</Link>
        <NavLink to='/contacts'><strong>Navigate to</strong> Contacts page</NavLink>
      </div>
    );
  }
}
