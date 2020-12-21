import React from 'react';

import { ThemeProvider } from '../../context/ThemeContext';

class StyledArea extends React.Component {

  state = {
    theme: 'white'
  }

  toggleTheme = () => {
    this.setState(prevState => ({theme: prevState.theme === 'white' ? 'black' : 'white'}));
  }

  render() {
    const { theme } = this.state;

    return (
      <>
        <button onClick={this.toggleTheme}>Toggle theme</button>
        <ThemeProvider value={{ theme }}>
          { this.props.children }
        </ThemeProvider>
      </>
    );
  }
}

export default StyledArea;
