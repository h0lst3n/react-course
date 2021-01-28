import { createSelector } from 'reselect';

const contactsSelector = state => state.contacts.items;
const filterSelector = state => state.contacts.filter;

export const filteredContactsSelector = createSelector(
  contactsSelector, filterSelector,
  (contacts, filter) => {
    if (filter && filter.length > 0) {
      return contacts.filter(contact => contact.name.match(filter) !== null);
    }
    return contacts;
  }
);
