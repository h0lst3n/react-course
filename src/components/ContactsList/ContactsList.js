import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import css from './Contact.module.scss';

import Contact from './Contact';

class ContactsList extends React.Component {

  state = {
    contacts: [],
    contactName: ''
  }

  addContact = () => {
    this.setState(({contacts: prevContacts, contactName: name}) => ({
      contacts: [...prevContacts, { name, id: Date.now() }],
      contactName: ''
    }));
  };

  removeContact = (id) => {
    this.setState(({contacts: prevContacts}) => ({
      contacts: prevContacts.filter(contact => contact.id !== id)
    }));
  };

  handleContactNameEnter = (e) => {
    const { value: contactName } = e.target;
    this.setState({contactName});
  };

  render() {
    const { contacts, contactName } = this.state;

    return(
      <div>
        <b>Contacts</b>
        <div>
          <label>
            Contact name:
            <input type="text" onChange={this.handleContactNameEnter} value={contactName}/>
            <button onClick={this.addContact}>Add contact</button>
          </label>
          {
            contacts.length > 0
              ? (
                <TransitionGroup component="ul" className={css['contact-list']}>
                  {
                    contacts.map((contact) =>
                      <CSSTransition key={contact.id} classNames={css} timeout={700}>
                        <Contact {...contact} onDelete={this.removeContact}/>
                      </CSSTransition>)
                  }
                </TransitionGroup>
              )
              : (<ul><li>There is no contacts yet</li></ul>)
          }
        </div>
      </div>
    );
  }
}

export default ContactsList;
