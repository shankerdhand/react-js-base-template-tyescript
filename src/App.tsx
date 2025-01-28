import React, { Suspense } from 'react';

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <h1>Hello React with TypeScript!</h1>
      </div>
    </Suspense>
  );
};

export default App;
