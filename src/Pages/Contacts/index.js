import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import queryString from 'query-string'; // or you can use URLSearchParams

//!! Link calls method `push` of HistoryAPI
//!! NavLink calls method `replace` of HistoryAPI
//!! EXAMPLES
//!! <Link to="/contacts/3"/>
//!!
//!! property to can be string or object
//!!
//!! to object example
//!! {
//!!    pathname: <equal to (===) href in `a` tag>,
//!!    search: <search params>,
//!!    hash: <additional hash value>,
//!!    state: <Object wich will be written to location.state>
//!!    ^ here we can put in object information about source/refferrer
//!! }
//!!
//!! As well <NavLink> can use such props as:
//!! activeClassName <string> - class name for active link,
//!! activeStyle <object> - object with inline styles
//!! exact <boolean> - in case `true` activeClassName and activeStyle will be applied

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
      this.props.history.replace({
        pathname: this.props.location.pathname,
        search: 'category=all'
      });
    }

    // here you can do API request to receive required data
  }

  render() {
    console.log(this.props);
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
