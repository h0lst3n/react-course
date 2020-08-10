import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Layout extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <header>
          <nav>
            <ul>
              <NavLink to='/'>Home page</NavLink>
              <NavLink to={
                {
                  pathname: '/about',
                  search: '?category=cats',
                  hash: '#some-hash',
                  state: { from: '/layout'}
                }
              }
              className="some-class-name"
              activeClassName="active-link-classname"
              >About page</NavLink>
              <NavLink to='/contacts'>Contacts page</NavLink>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer></footer>
      </React.Fragment>
    )
  }
}
