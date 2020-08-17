import React, {Component} from 'react';
import {AppContext} from './index';

const withContext = WrappeComponent => {
  return function WithContext(props) {
    return (
      <AppContext.Consumer>
        {title => <WrappeComponent {...props} title={title} />}
      </AppContext.Consumer>
    );
  }
};

export default withContext;
