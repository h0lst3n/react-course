import React from 'react';

// import InifiniteScroll from 'react-infinite-scroll-component';
import Article from './components/ArticlesList/components/Article';

import {fetchDataFromAPI} from './utils/APIutils';
import {normalize} from './utils/articleList.utils';

import ArticlesList from './components/ArticlesList';
import './App.scss';

class App extends React.Component {

  state = {
    articles: [],
    keyword: '',
    isLoading: false,
    error: null,
    page: 1
  }

  render() {
    const {articles, keyword, isLoading, error} = this.state;
    const articlesList = articles.map((article) => <Article {...article} key={article.id}/>);
    const emptyDataRow = this.renderEmtyDataRow();
    return (
      <div>
        <label>
          <h3>Search:</h3>
          <input
            type="text"
            placeholder="Type keyword to search"
            value={keyword}
            onChange={this.handleKeywordChange}
          />
        </label>
        <button type="button" onClick={this.doSearch}>Search</button>
      {/**<InifiniteScroll
          dataLength={articles.length}
          loader={<h4>Loading...</h4>}
          hasMore={true}
          next={this.fetchNextData}
        >
          {articlesList}
        </InifiniteScroll>**/}
        <>
          {error && <h3>Oooops! Something went wrong</h3>}
          {(articles.length > 0 && !isLoading) && <ArticlesList articles={articles}/>}
          {(articles.length === 0 && !error && !isLoading) && emptyDataRow}
          {isLoading && <h3>Loading...</h3>}
        </>
        {articles.length > 0 && <button type="button" onClick={this.fetchNextData}>Load more...</button>}
      </div>
    );
  }

  componentDidMount() {
  //  this.fetchData('react');
  }

  //toggleLoader = () => this.setState(({isLoading: prevIsLoading}) => ({isLoading: !prevIsLoading}))
  toggleLoader = () => this.setState(prevState => ({isLoading: !prevState.isLoading}));

  onResponse = data => this.setState(prevState => ({articles: [...prevState.articles, ...normalize(data.hits)]}));

  onError = error => this.setState({error});

  fetchNextData = () => {
    this.setState(
      prevState => ({page: prevState.page + 1}),
      () => this.fetchData(this.state.keyword, this.state.page)
    );
  };

  fetchData = (keyword, page) => {
    this.toggleLoader();
    fetchDataFromAPI(keyword, page)
      .then(this.onResponse)
      .catch(this.onError)
      .finally(this.toggleLoader);
  };


  renderEmtyDataRow = () => (
    <div>
      <h2>There is no data to show</h2>
    </div>
  );

  handleKeywordChange = (e) => {
    const {value: keyword} = e.target;
    this.setState({keyword});
  };

  doSearch = () => {
    this.setState(
      {page: 1, articles: []},
      () => this.fetchData(this.state.keyword, this.state.page)
    );
  };
}

export default App;
