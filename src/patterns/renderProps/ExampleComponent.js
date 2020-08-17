import React, {Component} from 'react';
import Toggler from './Toggler';Toggler


const ExampleComponent = () => (
  <div>
    <Toggler>
      {({ isOpen, onToggle}) => (
        <button onClick={onToggle}>
          {isOpen ? 'Hide' : 'Show'}
        </button>
        {isOpen && <span>Some text</span>}
      )}
    </Toggler>
  </div>
);

export default ExampleComponent;
