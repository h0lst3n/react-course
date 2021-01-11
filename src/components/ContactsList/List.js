import React from 'react';
import { connect } from 'react-redux';

import { deleteContact } from '../../store/actions/contacts.actions';

const List = ({contacts, deleteContact}) => (
  <div>
    <h2>Contacts:</h2>
    <div>
      {
        contacts.map(({name, number, id }) => (
          <div key={id}>
            <b>Name: {name}</b>
            <b>Number: {number}</b>
            <button onClick={() => deleteContact(id)}>Delete contact</button>
          </div>
        ))
      }
    </div>
  </div>
);

const mapStateToProps = state => ({
  contacts: state.contacts
});

export default connect(/*mapStateToProps, maoDispatchToProps */mapStateToProps, { deleteContact })(List);
