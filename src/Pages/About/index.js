import React from 'react';
import queryString from 'query-string';

class AboutPage extends React.Component {

  state = {
    atricles: []
  }

  onSelectChange = (e) => {
    const { value: category } = e.target;
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`
    });
  }

  fetchArticles = () => {
    this.setState({
      articles: [
        {
          id: '1',
          text: '222222'
        },
        {
          id: '2',
          text: '333131'
        }
      ]
    })
  };

  getCategoryFromProps = props => queryString.parse(props.location.search).category;

  handleBack = () => {
    const { state } = this.props.location;
    if (state) {
      this.props.history.push(state.from);
      return;
    }

    this.props.history.push({
      pathname: '/contacts'
    });
  }

  componentDidMount() {
    const category = this.getCategoryFromProps(this.props);

    if (!category) {
      this.props.history.replace({
        pathname: this.props.location.pathname,
        search: 'category=all'
      });
    }
  }

  componentDidUpdate(prevProps) {
    const prevCategory = this.getCategoryFromProps(prevProps);
    const nextCategory = this.getCategoryFromProps(this.props);

    if (prevCategory !== nextCategory) {
      this.fetchArticles();
    }
  }

  shouldComponentUpdate(prevProps) {
    const prevCategory = this.getCategoryFromProps(prevProps);
    const nextCategory = this.getCategoryFromProps(this.props);
    return prevCategory !== nextCategory;
  }

  render() {

    return (
      <div>
        <h2>About page</h2>
        <strong onClick={this.handleBack}>Go Back</strong>
        <p>Please choose category:</p>
        <select onChange={this.onSelectChange}>
          <option disabled>...</option>
          <option value="manager">Manager</option>
          <option value="hr">HR</option>
          <option value="employee">Employee</option>
        </select>
      </div>
    );
  }
}

export default AboutPage;
