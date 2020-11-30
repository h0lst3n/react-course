import React from 'react';

import Counter from './components/Counter';
import Toggler from './components/Toggler';
//import ExampleClassComponent from './components/ExampleClassComponent';

const App = (props) => {
  return (
    <div>
      {/*<ExampleClassComponent {...{propOne: 1, propTwo: '2'}}/>*/}
      <Counter step={3} initialCounter={3}/>
      <Toggler>
        <div>
          <p><strong>Additional</strong></p>
          <p>toggler content</p>
        </div>
      </Toggler>
    </div>
  );
};

export default App;
