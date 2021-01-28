import React from 'react';

const ContactItem = ({ name, number, id, onDelete }) => (
  <li>
    <div>
      <p><b>Name:</b>&nbsp;{name}</p>
      <p><b>Number:</b>&nbsp;{number}</p>
      <button type="button" onClick={() => onDelete(id)}>Delete</button>
    </div>
  </li>
);

export default ContactItem;
