import React from 'react';

import ArticlesList from './Components/ArticlesList';
import TagsList from './Components/TagsList';

class App extends React.Component {
  render() {
    return (
      <div>
      <h2>Lesson 14 (Redux Selectors)</h2>
      <TagsList/>
      <ArticlesList/>
      </div>
    );
  }
}

export default App;
