import React from 'react';
import api from '../../utils/api';

import ArticleItem from './ArticleItem';

class ArticleList extends React.Component {

  state = {
    search: '',
    articles: [],
    isLoading: false,
    error: null,
    step: 10,
    page: 0
  };

  handleSearchChange = (e) => {
    const { value: search } = e.target;
    this.setState({ search });
  }

  handleSearchClick = () => {
    this.performSearch();
  }

  performSearch = () => {
    this.setState({
      isLoading: true,
      articles: [],
      page: 0
    });
    api.fetchArticlesWithQuery(this.state.search)
      .then(articles => this.setState(
        { articles, search: '' }
      ))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const {
      search,
      articles,
      isLoading,
      error,
      step,
      page
    } = this.state;

    console.log(Math.floor(articles.length / step));
    return (
      <div>
        <h2>Article List:</h2>
        <div>
          <label>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={this.handleSearchChange}
              name="search"
            />
            <button
              type="button"
              onClick={this.handleSearchClick}
            >
              Search
            </button>
          </label>
        </div>
        <div>
          <div>
            {
              Array(articles.length > 0? Math.floor(articles.length / step) : 0)
                .fill(0)
                .map((pageNumber, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => this.setState({ page: index })}
                  >
                    {index + 1}
                  </button>
                ))
            }
          </div>
          <ul>
            { error && <p>Ooops, something went wrong: {error.message}</p>}
            { isLoading && <p>Loading...</p> }
            { articles.length > 0 && articles.slice(step * page, step * page + step).map((article) => <ArticleItem key={article.id} {...article}/>) }
            { !isLoading && !error && articles.length === 0 && <li>There are no results.</li> }
          </ul>
        </div>
      </div>
    );
  }
};

export default ArticleList;
