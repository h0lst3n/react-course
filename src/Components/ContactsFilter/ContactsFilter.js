import React from 'react';
import { connect } from 'react-redux';

import { applyFilter } from '../../store/actions/contacts.actions';

const ContactsFilter = ({ value, applyFilter }) => (
  <div>
    <h2>Filter: </h2>
    <input
      type="text"
      placeholder="Enter name to search"
      value={value}
      onChange={e => applyFilter(e.target.value)}
    />
  </div>
);

const mapStateToProps = state => ({
  value: state.contacts.filter
});

export default connect(mapStateToProps, { applyFilter })(ContactsFilter);
