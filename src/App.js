import React from 'react';

import ContactInput from './Components/ContactInput';
import ContactsList from './Components/ContactsList';
import ContactsFilter from './Components/ContactsFilter';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Lesson 15 (Homework #6)</h2>
        <ContactInput/>
        <ContactsFilter/>
        <ContactsList/>
      </div>
    );
  }
}

export default App;
