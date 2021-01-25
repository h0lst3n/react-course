import React from 'react';
import { connect } from 'react-redux';

import { fetchArticles, setArticleSearchKeyword } from '../../store/actions/articles.actions';

import { getArticlesBySelectedTags, searchArticleByTitle } from '../../store/selectors/articles.selectors';

class ArticlesList extends React.Component {

  componentDidMount() {
    this.props.fetchArticles('https://hn.algolia.com/api/v1/search?query=react');
  }

  onArticleSearch = (e) => {
    const { value } = e.target;
    this.props.setArticleSearchKeyword(value);
  }

  render() {
    const { articles = [], searchedArticle } = this.props;
    return (
      <div>
        <h2>Articles List by Tags:</h2>
        <input type="text" placeholder="Seach" onChange={this.onArticleSearch}/>
        <h3>Searched article:</h3>
        {
          searchedArticle &&
          (<div key={searchedArticle.objectID}>
            <b>{searchedArticle.title}</b>
            <p>Author: {searchedArticle.author}</p>
          </div>)
        }
        {
          articles.map(article =>
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
  articles: getArticlesBySelectedTags(state),
  searchedArticle: searchArticleByTitle(state)
});

export default connect(mapStateToProps, { fetchArticles, setArticleSearchKeyword })(ArticlesList);
