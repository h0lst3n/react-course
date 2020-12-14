import React from 'react';

import { Link } from 'react-router-dom';

const ContactsPage = (props) => {
  return (
    <div>
      <h2>Contacts page</h2>
      <Link to="/about">About</Link>
    </div>
  );
}

export default ContactsPage;
