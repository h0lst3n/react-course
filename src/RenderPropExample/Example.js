import React from 'react';

import Toggler from './Toggler';


export default () => (
  <div>
    <Toggler>
      {({isOpen, onToggle}) => (
        <>
          <button type="button" onClick={onToggle}>
            {isOpen? 'Hide' : 'Show'}
          </button>
          {isOpen && <p>Toggle component with render props</p>}
        </>
      )}
    </Toggler>

    <Toggler>
      {({isOpen, onToggle}) => (
        <>
        <label>
          <input type="checkbox" checked={isOpen} onChange={onToggle}/>
          {isOpen? 'Hide' : 'Show'}
        </label>
          {isOpen && <p>Toggle component with render props</p>}
        </>
      )}
    </Toggler>
  </div>
);
