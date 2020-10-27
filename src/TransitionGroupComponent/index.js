import React from 'react';
import { TransitionGroup, CSSTransition} from 'react-transition-group';

class TransitionGroupComponent extends React.Component {

  state = {
    list: []
  }

  handleAdd = () => {
    const id = Date.now();
    this.setState((prevState) => ({list: [...prevState.list, {name: `List item #${id}`, id}]}));
  };

  handleRemove = (id) => {
    this.setState(prevState => ({list: prevState.list.filter((item) => item.id !== id) }));
  };


  render() {
    const {list} = this.state;

    return (
      <>
        <button type="button" onClick={this.handleAdd}>Add item</button>
        <TransitionGroup>
          {list.map(
            (item) => (
              <CSSTransition key={item.id} timeout={1000}>
                <div>
                  {item.name}&nbsp;
                  <button type="button" onClick={() => this.handleRemove(item.id)}>X</button>
                </div>
              </CSSTransition>)
          )}
        </TransitionGroup>
      </>
    );
  }
}

export default TransitionGroupComponent;
