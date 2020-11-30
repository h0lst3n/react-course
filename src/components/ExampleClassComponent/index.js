import React from 'react';


class ExampleClassComponent extends React.Component {

  renderHeader() {
    return (
        <h2>Example Class Component</h2>
    );
  }

  render() {
    console.log(this.props);
    return (
      <div onClick={(e) => console.log(e)}>
        {this.renderHeader()}
      </div>
    );
  }

}

export default ExampleClassComponent;
