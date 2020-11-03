import React from 'react';

const AppContext = React.createContext(/** default value **/{a:1, b:2, c:3});
AppContext.displayName = 'ExampleAppContext';

//AppContext.Provider
//AppContext.Consume


export default AppContext;
