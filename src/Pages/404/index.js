import React from 'react';

export default class NotFoundPagePage extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>404</h1>
        <h2>Page not found</h2>
      </div>
    );
  }
}
