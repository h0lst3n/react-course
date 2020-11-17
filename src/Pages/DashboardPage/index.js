import React from 'react';
import { connect } from 'react-redux';
import { doLogout } from '../../store/actions/auth.actions';
import { resetNotes, fetchNotes } from '../../store/actions/notes.actions';

const DashboardPage = ({doLogout, resetNotes, fetchNotes}) => (
  <div>
    <h2>Dashboard Page</h2>
    <button onClick={
      () => fetchNotes('https://hn.algolia.com/api/v1/search?query=react')
    }>
      fetch notes
    </button>
    <button type="button" onClick={() => doLogout(resetNotes)}>Logout</button>
  </div>
);

export default connect(null, { doLogout, resetNotes, fetchNotes })(DashboardPage);
