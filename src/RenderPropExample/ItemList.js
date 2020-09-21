import React from 'react';

class ItemList extends React.Component {

  state = {
    items: []
  }

  add = (item) => this.setState(prevState => ({items: [...prevState.items, item]}))

  render() {
    return (
      this.props.children(
        {
          items: this.state.items,
          onAdd: this.add
        }
      )
    );
  }
}

export default ItemList;
