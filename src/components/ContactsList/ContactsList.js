import React from 'react';
import { connect } from 'react-redux';

import { addContact } from '../../store/slices/contacts.slice';

import List from './List';

const INITIAL_STATE = {
  contactName: '',
  contactNumber: ''
};

class ContactsList extends React.Component {

  state = {...INITIAL_STATE};

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  addContact = () => {
    const { contactName: name, contactNumber: number } = this.state;
    this.props.addContact({ name, number });
    this.setState({...INITIAL_STATE});
  };

  render() {
    const { contactName, contactNumber } = this.state;
    return (
      <>
        <div>
          <div>
            <input type="text"
              onChange={this.handleChange}
              value={contactName}
              placeholder="Enter new contact name"
              name="contactName"
            />
          </div>
          <div>
            <input type="text"
              onChange={this.handleChange}
              value={contactNumber}
              placeholder="Enter new contact number"
              name="contactNumber"
            />
          </div>
          <button onClick={this.addContact}>Add contact</button>
        </div>
        <List/>
      </>
    );
  }
};

// const mapDispatchToProps = dispatch => ({
//   actions: {
//     addContact: ({name, number}) => {
//       dispatch(addContact({name, number}))
//     }
//   }});

export default connect(null, /*mapDispatchToProps*/ { addContact })(ContactsList);
