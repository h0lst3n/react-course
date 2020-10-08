import React from 'react';
import {NavLink} from 'react-router-dom';

import css from './style.module.scss';

export default class Layout extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <header>
          <nav>
            <ul className={css['nav-panel']}>
              <NavLink
                exact
                to='/'
                className={css['link']}
                activeClassName={css['active-link']}
              >
              Home page<
              /NavLink>
              <NavLink to={
                {
                  pathname: '/about',
                  search: '?category=cats&size=medium',
                  hash: '#some-hash',
                  state: { from: '/layout' }
                }
              }
              className={css['link']}
              activeClassName={css['active-link']}
              >About page</NavLink>
              <NavLink
                to='/contacts'
                className={css['link']}
                activeClassName={css['active-link']}
              >
                Contacts page
              </NavLink>
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
