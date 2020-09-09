import React from 'react';

export default class Search extends React.Component {

  state = {
    keyword: ''
  };

  handleKeywordChange = (e) => {
    const keyword = e.target.value;

    this.setState({keyword});
  };

  handleSearchClick = () => {
    this.props.onSearch(this.state.keyword);
  }

  render() {
    const {keyword} = this.state;
    return (
      <div>
        <label>
            <input type="text" value={keyword} placeholder="Enter keyword to search" onChange={this.handleKeywordChange}/>
            <button type="submit" onClick={this.handleSearchClick}>Search</button>
        </label>
      </div>
    )
  }

}
