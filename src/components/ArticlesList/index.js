import React from 'react';
import Article from './components/Article';

const ArticlesList = ({articles}) => (
  <ul>
    {articles.map((article) => <Article {...article} key={article.id}/>)}
  </ul>
);

export default ArticlesList;
