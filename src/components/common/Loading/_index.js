import React from 'react';

const Loading = ({ error, timedOut, pastDelay, retry}) => {
  if (error) {
    return (
      <div>
        Ooops! Something went wrong.
        <button onClick={retry}>Retry</button>
      </div>
    );
  }

  if (timedOut) {
    return (
      <div>
        It's taking a long time...
        <button onClick={retry}>Retry</button>
      </div>
    );
  }

  if (pastDelay) {
    return (<div>Loading...</div>);
  }

  return null;

};

export default Loading;
