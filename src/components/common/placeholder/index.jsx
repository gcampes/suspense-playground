import React, { Timeout } from 'react';

const Placeholder = ({ delay, fallback, children }) => (
  <Timeout ms={delay}>
    {didTimeout => (didTimeout ? fallback : children)}
  </Timeout>
)

export default Placeholder;
