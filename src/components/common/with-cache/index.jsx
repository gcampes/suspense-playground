import React from 'react';
let cache = null;

export default Component => props => (
  <Component
    cache={cache}
    setCache={data => cache = data}
    {...props}
  />
);
