import React from 'react';
import { ThemeConsumer } from '../context/ThemeContext';

const withTheme = WrappedComponent => {
  return class WithTheme extends React.Component {

  render() {
    return (
      <ThemeConsumer>
        {
          context => <WrappedComponent {...this.props} theme={context.theme}/>
        }
      </ThemeConsumer>
    );
  }
  }
};

export default withTheme;
