import React, { Fragment } from 'react';
import useFetch from 'fetch-suspense';

import Item from './item';

const Posts = ({ cache, setCache }) => {
  const data = useFetch('https://jsonplaceholder.typicode.com/posts');
  return (
    <Fragment>
      {data.map(Item)}
    </Fragment>
  );
};


export default Posts;
