import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../store/actions/contacts.actions';

import { filteredContactsSelector } from '../../store/selectors/contacts.selector';

import ContactItem from './ContactItem';

class ContactsList extends React.Component {

  onContactDelete = (id) => {
    this.props.deleteContact(id);
  }

  render() {
    const { contacts } = this.props;

    return (
    <div>
      <h2>Contacts list:</h2>
      <ul>
        {
          contacts.length > 0
            ? contacts.map(({name, number, id}) =>
              <ContactItem
                key={id}
                name={name}
                number={number}
                id={id}
                onDelete={this.onContactDelete}/>
            )
            : <li>The are no contacts added yet</li>
        }
      </ul>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: filteredContactsSelector(state)
});

export default connect(mapStateToProps, { deleteContact })(ContactsList);
