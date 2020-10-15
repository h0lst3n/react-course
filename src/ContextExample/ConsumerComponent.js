import React from 'react';

import AppContext from './index';

class ConsumerComponent extends React.Component {

  render() {
    console.log('Render Index: ', this.props.index);
    return (
      <AppContext.Consumer>
      {
        context => (
          <div>{`Context Consumer ${JSON.stringify(context)}`}</div>
        )
      }
      </AppContext.Consumer>
    )
  }
}


export default ConsumerComponent;
