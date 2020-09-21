import React from 'react';
import {AppContext} from './index';

const withContext = WrappedComponent => {
  return function WithContext(props) {
    return (
      <AppContext.Consumer>
        {({title}/*as property of context*/) => <WrappedComponent {...props} title={title} />}
      </AppContext.Consumer>
    );
  }
};

export default withContext;
