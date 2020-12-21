import React from 'react';

const AppContext = React.createContext({ theme: 'light' });

AppContext.displayName = 'AppContext';

const AppContextProvider = AppContext.Provider;
const AppContextConsumer = AppContext.Consumer;

export { AppContextProvider, AppContextConsumer}; 
