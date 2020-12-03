import React from 'react';

import Form from './components/Form';

const App = (props) => {
  const onSubmit = (data) => {
    console.log('Form has been submited:', data);
  }
  return (
    <div>
      <Form onSubmit={onSubmit}/>
    </div>
  );
};

export default App;
