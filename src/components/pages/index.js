//import asyncComponent from '../common/asyncComponent';
import Loadable from 'react-loadable';

import React from 'react';

import Loading from '../common/Loading';

export const pagesMap = {
  HomePage: Loadable({ loader: () => import('./HomePage' /* webpackChunkName: "home-page" */), loading: Loading}),
  ContactsPage: Loadable({ loader: () => import('./ContactsPage' /* webpackChunkName: "contacts-page" */), loading: Loading})
};
export default pagesMap;
