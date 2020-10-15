import React from 'react';

import AppContext from './index';

const withContext = WrappedComponent => {

  return function WithContext(props) {
    return (
      <AppContext.Consumer>
        {
          context => <WrappedComponent context={context} {...props}/>
        }
      </AppContext.Consumer>
    );
  }
}

export default withContext;
