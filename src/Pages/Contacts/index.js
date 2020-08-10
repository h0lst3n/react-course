import React from 'react';
import {NavLink} from 'react-router-dom';
import queryString from 'query-string';

export default class ContactsPage extends React.Component {

  state = {
    contacts: [
      {
        id: '12',
        name: 'Contact #1'
      },
      {
        id: '13',
        name: 'Contact #2'
      },
      {
        id: '14',
        name: 'Contact #3'
      }
    ]
  }

  onCategoryChange = (e) => {
    const category = e.target.value;
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`
    });
  };

  getGategoryFromProps = props => queryString.parse(props.location.search).category

  renderContacts = () => {
    return this.state.contacts.map(
      (contact) => (<NavLink key={contact.id} to={{
        pathname: `/contacts/${contact.id}`,
        state: { from: this.props.location }
      }}>
      {contact.name}
      </NavLink>
    ));
  }

  handleBackClick = () => {
    const {from} = this.props.location.state;

    if (from) {
      this.props.history.push(from);
    }
  }

  componentDidMount() {
    const category = this.getGategoryFromProps(this.props);

    if (!category) {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: 'category=all'
      });
    }
  }

  render() {
    const params = queryString.parse(this.props.location.search);
    const contacts = this.renderContacts();
    return (
      <div>
        <h2>Contacts page</h2>
        <span onClick={this.handleBackClick}>Back</span>
        {contacts}
        <label>
        Please select contact group:
          <select onChange={this.onCategoryChange}>
            <option value="">Select category</option>
            <option value="manager">Manager</option>
            <option value="regular">Regular employee</option>
            <option value="hr">HR</option>
          </select>
        </label>
      </div>
    );
  }

  //proptocol://hostname.domain/contacs/:contactId
  componentDidUpdate(prevProps) {
    const prevCategory = this.getGategoryFromProps(prevProps);
    const nextCategory = this.getGategoryFromProps(this.props);

    if (prevCategory !== nextCategory) {
      console.log('Should fetch articles with new category from API');
    }

  }
}
