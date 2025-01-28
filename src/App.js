import React, { Suspense } from 'react';
var App = function () {
  return React.createElement(
    Suspense,
    { fallback: React.createElement('div', null, 'Loading...') },
    React.createElement(
      'div',
      null,
      React.createElement('h1', null, 'Hello React with TypeScript!')
    )
  );
};
export default App;
