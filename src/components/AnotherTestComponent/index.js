import React from 'react';

import Toggler from '../../patterns/RenderProp/Toggler';

const AnotherTestComponent = () => (
  <div>
    <Toggler>
      {
        ({ isOpen, onToggle }) => (
          <>
            <button onClick={onToggle}>
              { isOpen ? 'Hide' : 'Show' }
            </button>
            {
              isOpen && (<ul>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
              </ul>)
            }
          </>
        )
      }
    </Toggler>

    <Toggler>
      {
        ({ isOpen, onToggle }) => (
          <>
            <button onClick={onToggle}>
              { isOpen ? 'Hide' : 'Show' }
            </button>
            {
              isOpen && (<ul>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
              </ul>)
            }
          </>
        )
      }
    </Toggler>
  </div>
);

export default AnotherTestComponent;
