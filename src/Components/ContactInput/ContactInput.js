import React from 'react';
import { connect } from 'react-redux';

import { addContact } from '../../store/actions/contacts.actions';

class ContactInput extends React.Component {

  state = {
    name: '',
    number: '',
    isAddDisable: true
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value }, this.setIsAddEnable);
  };

  setIsAddEnable = () => {
    const { name, number } = this.state;
    this.setState({
      isAddDisable: name === '' || number === ''
    });
  }

  addContact = () => {
    const { name, number } = this.state;

    this.props.addContact({name, number});
  };

  render() {
    const { name, number, isAddDisable } = this.state;
    return (
      <div>
        <h2>Add contact</h2>

        <div>
          <label htmlFor="contact-name">
            Contact name:
            <input
              type="text"
              id="contact-name"
              placeholder="Enter contact name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="contact-number">
            Contact number:
            <input
              type="text"
              id="contact-number"
              placeholder="Enter contact number"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div>
          <button
            type="button"
            onClick={this.addContact}
            disabled={isAddDisable}
          >
            Add contact
          </button>
        </div>

      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addContact: ({name, number}) => dispatch(addContact({name, number}))
//   }
// };

export default connect(null, /*mapDispatchToProps*/{ addContact })(ContactInput);
