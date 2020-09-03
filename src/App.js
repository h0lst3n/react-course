import React from 'react';
import PostsContainer from './Components/PostsContainer';
import './App.scss';

const App = () => {
  return (
    <>
      <div>React APP</div>
      <div>
        <h3>Posts list:</h3>
        <PostsContainer/>
      </div>
    </>
  );
}

export default App;
