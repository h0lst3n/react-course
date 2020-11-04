import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export default class TransitionGroupComponent extends React.Component {

  state = {
    items: []
  }

  addItem = () => {
    this.setState(
      ({items: prevItems}) => ({
        items: [
          ...prevItems,
          {
            name: `item #${prevItems.length + 1}`,
            id: prevItems.length + 1
          }
        ]
      }));
  }

  deleteItem = (id) => {
    const {items} = this.state;
    const newItems = items.filter(({id: itemId}) => itemId !== id);
    this.setState({items: newItems});
  }

  render() {
    const { items } = this.state;

    return (
      <>
        <strong>TransitionGroup Example</strong>
        <button type="button" onClick={this.addItem}>Add Item</button>
        <TransitionGroup>
          {
            items.map(({name, id}) => (
              <CSSTransition
                timeout={1500}
                key={id}
                classNames="collection-item"
                onExited={() => console.log('collection item exited')}
              >
                <div>{name}<b onClick={() => this.deleteItem(id)}>X</b></div>
              </CSSTransition>
            ))
          }
        </TransitionGroup>
      </>
    );
  }
}
