import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './style.scss';

class TransitionGroupComponent extends React.Component {

  state = {
    items: [
      `User`
    ]
  }

  handleAdd = () => {
    this.setState(prevState => ({items: prevState.items.concat('User Copy')}));
  }

  handleRemove = (index) => {
   let newItems = this.state.items;
   newItems.splice(index, 1);
   this.setState({items: newItems});
  }

  renderItem = (name, index) => {
    return (
      <CSSTransition timeout={1000} key={index} className="list-item">
      <div>
        <span>{name}</span><button onClick={() => {this.handleRemove(index)}}>X</button>
      </div>
      </CSSTransition>
    );
  }

  render() {
    const items = this.state.items.map((item, i ) => {
      return this.renderItem(item, i);
    });

    return (
      <>
        <button onClick={this.handleAdd}>Add Item</button>
        <div className="list">
          <TransitionGroup className="item-list"
          >
            {items}
          </TransitionGroup>
        </div>
      </>
    );
  }


}

export default TransitionGroupComponent;
