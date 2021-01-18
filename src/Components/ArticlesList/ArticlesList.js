import React from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../../store/actions/articles.actions';

class ArticlesList extends React.Component {

  componentDidMount() {
    this.props.fetchArticles('https://hn.algolia.com/api/v1/search?query=react');
  }

  render() {
    return (
      <div>
        <h2>Articles List</h2>
        {
          this.props.articles.map(article =>
              <div key={article.objectID}>
                <b>{article.title}</b>
                <p>Author: {article.author}</p>
              </div>
          )
        }
      </div>
    );
  }
};

const mapStateToProps = state => ({
  articles: state.articles
});

export default connect(mapStateToProps, { fetchArticles })(ArticlesList);
