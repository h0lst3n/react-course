import React from 'react';
import TagsList from './Components/TagsList';
import NotesList from './Components/NotesList';
import './App.scss';

const App = () => {
  return (
    <>
      <div>Redux Basics</div>
      <TagsList/>
      <div>
        <NotesList/>
      </div>
    </>
  );
}

export default App;
