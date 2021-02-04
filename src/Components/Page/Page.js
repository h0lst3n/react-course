import React from 'react';

import Header from '../Header';

const Page = ({ children }) => (
  <div>
    <Header />
    <div>Page</div>
    { children }
  </div>
);

export default Page;
