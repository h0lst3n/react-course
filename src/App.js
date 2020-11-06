import React from 'react';
import NotesList from './Components/NotesList';
import './App.scss';

const App = () => {
  return (
    <>
      <div>Redux Basics</div>
      <div>
        <NotesList/>
      </div>
    </>
  );
}

export default App;
