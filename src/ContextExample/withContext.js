import React from 'react';

const withContext = Context => WrappedComponent => {

  return function WithContext(props) {
    return (
      <Context.Consumer>
        {
          context => <WrappedComponent context={context} {...props}/>
        }
      </Context.Consumer>
    );
  }
}

export default withContext;
