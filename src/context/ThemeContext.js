import React, { createContext } from 'react';

const ThemeContext = createContext({ theme: 'black' });
ThemeContext.displayName = 'ThemeContext';

const ThemeConsumer = ThemeContext.Consumer;
const ThemeProvider = ThemeContext.Provider;

export { ThemeConsumer, ThemeProvider };
