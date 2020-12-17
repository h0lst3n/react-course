import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h2>Home Page</h2>
    <Link to="/contacts">To contacts page</Link>
  </div>
);

export default HomePage;
