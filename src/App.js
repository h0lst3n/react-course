import React from 'react';
import PostsList from './Components/PostsList';
import './App.scss';

const App = () => {
  return (
    <>
      <div>React APP</div>
      <div>
        <h3>Posts list:</h3>
        <PostsList/>
      </div>
    </>
  );
}

export default App;
