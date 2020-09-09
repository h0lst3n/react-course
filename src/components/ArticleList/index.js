import React from 'react';
import {fetchData} from '../../utils/api.utils';

import Search from './Search';
import List from './List';

export default class ArticleList extends React.Component {

  state = {
    articles: [],
    isLoading: false,
    error: null
  }

  handleSearch = (keyword) => {
    this.setState({isLoading: true});

    fetchData(keyword)
      .then(this.onArticlesLoad)
      .catch(this.onError)
      .finally(this.onComplete);
  }

  onArticlesLoad = (articles) => {
    this.setState({ articles });
  }

  onError = (error) => {
    this.setState({error});
  };

  onComplete = () => {
    this.setState({isLoading: false});
  };

  componentDidMount() {
    // Here you can do inital API call to fetch required data for render
    console.log('Component did mount');
  }

  componentDidUpdate() {
    // Here yon can proceed with API calls
    // in case you need additional data or somethig has been changed
    console.log('Component did update');
  }

  render() {
    const {isLoading, articles, error} = this.state;

    return (
        <div onSubmit={this.handleSearch}>
          <h2>Atricles list</h2>
          <Search onSearch={this.handleSearch}/>
          <div>
              {error && <strong>Oooops! Something went wrong!</strong>}
              {isLoading && <p>Loading...</p>}
              {articles.length > 0 && <List articles={articles}/>}
          </div>
        </div>
    );
  }
}
