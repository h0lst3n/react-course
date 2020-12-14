import React from 'react';

import { Link, NavLink } from 'react-router-dom';

const HomePage = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Home page</h2>
      <NavLink
        to="/"
        activeClassName="active"
        activeStyle={
          { backgroundColor: 'black'}
        }
        exact
        >
          Home&nbsp;
        </NavLink>
      <NavLink to="/contacts">Contacts&nbsp;</NavLink>
      <Link to={
        {
          pathname: '/about',
          search: 'category=manager',
          state: {
            from: '/home'
          }
        }
      }>About</Link>
    </div>
  );
}

export default HomePage;
