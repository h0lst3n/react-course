import React from 'react';
import NotesList from './Components/NotesList';
import './App.scss';

const App = () => {
  return (
    <>
      <div>React APP</div>
      <div>
        <h3>Notes list:</h3>
        <NotesList/>
      </div>
    </>
  );
}

export default App;
