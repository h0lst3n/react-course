import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import Counter from './Counter';

let newItemId = 0;

const getNewItemId = () => {
  newItemId++;
  return newItemId;
}

class ListItemModel {

  constructor(name) {
    this.name = name;
    this.isCompleted = false;
    this.id = getNewItemId();
  }

  complete(value) {
    this.isCompleted = value;
  }

  serializeData() {
    return {
      name: this.name,
      isCompleted: this.isCompleted,
      id: this.id
    };
  }
};

class ToDoList extends React.Component {

  state = {
    newItemNameDraft: '',
    items: []
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState((state, props) => {
      return {newItemNameDraft: value};
    }/*, () => {
      console.log('The state has benn updated');
    }*/);
    // this.setState({newItemNameDraft: event.target.value});
  }

  handleAddItemClick = () => {
    this.setState((state) => {
      const {items} = state;
      items.push({
        isCompleted: false,
        id: getNewItemId(),
        name: state.newItemNameDraft
      });
      return {
        items,
        newItemNameDraft: ''
      }
    });
  }

  onListItemClick = (id) => {
    this.setState((state) => {
      let newList = state.items;
      const index = state.items.findIndex((item) => item.id === id);
      if (index > -1) {
        newList.splice(index, 1);
      }
      return { items: newList };
    });
  }

  renderListItems(items) {
    return items.map((item, index) => <ListItem {...item} key={index} clickHandler={this.onListItemClick} />)
  }

  render() {
    const { newItemNameDraft, items } = this.state;
    const listItems = this.renderListItems(items);
    return (
      <div className="list-container">
        <div className="input-container">
          <input type="text" placeholder="Enter item name" onChange={this.handleInputChange} value={newItemNameDraft}/>
          <button className="add-button" onClick={this.handleAddItemClick}>Add item</button>
        </div>
        <ul className="list">
          {listItems}
        </ul>
        <Counter amount={items.length}/>
      </div>
    );
  }
};

export default ToDoList;
