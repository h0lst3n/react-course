import React, {Component, Fragment} from 'react';

import {fetchDataFromAPI} from '../../utils/APIutils';

import Article from './components/Article';

export default class ArticlesList extends Component {

  cache = {}

  state = {
    keyword: '',
    articles: [],
    isLoading: false,
    hasError: false
  }

  renderArticles = () => {
    const {articles} = this.state;
    return (articles.length
      ? articles.map((article, index) => <Article {...article} key={`article-${index}`}/>)
      : <li>There are no search results...</li>)
  }

  handleKeywordChange = (e) => {
    this.setState({keyword: e.target.value})
  }

  setIsLoading = () => {
    this.setState({
      isLoading: true,
      hasError: false
    });
  };

  handleSearch = () => {
    const {keyword} = this.state;
    const cached = this.getFromCache(keyword);
    if (cached) {
      this.updateArticlesInState(cached);
    } else {
      this.setIsLoading();
      fetchDataFromAPI(keyword)
        .then(this.onSearchSuccess)
        .catch(error => this.setState({hasError: true}))
        .finally(() => this.setState({isLoading: false}));
    }
  }

  getFromCache = (keyword) => this.cache[keyword] || null;

  onSearchSuccess = (articles) => {
    this.updateCache(articles);
    this.updateArticlesInState(articles);

  }

  updateCache = (articles) => {
    const {keyword} = this.state;
    this.cache[keyword] = articles;
  }

  updateArticlesInState = (articles) => {
    this.setState({
      articles,
      keyword: ''
    });
  }

  render() {
    const articles = this.renderArticles();
    const {keyword, isLoading, hasError} = this.state;
    const isAbleToRender = !hasError && !isLoading;
    return (
      <Fragment>
        <div className="search-field-container">
          <label htmlFor="search-input">Search:</label>
          <div>
            <input
              type="text"
              placeholder="Enter keyword to search"
              id="search-input"
              onChange={this.handleKeywordChange}
              value={keyword}/>
            <button onClick={this.handleSearch}>Search</button>
          </div>
        </div>
        <div className="atricles-list-container">
          {hasError && <span>Oops! Something has broken...</span>}
          {isLoading && <span>Data is loading...</span>}
          {isAbleToRender && <ul className="atricles-list">{articles}</ul>}
        </div>
      </Fragment>
    );
  }

  componentDidUpdate () {
    console.log(this.state);
  }
}
