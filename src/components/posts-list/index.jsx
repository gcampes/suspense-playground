import React from 'react';

import Loader from '../common/loader';
import Placeholder from '../common/placeholder';
import Posts from './posts';

const PostsList = () => (
  <section className="page">
    <Placeholder
      delay={2000}
      fallback={<Loader />}
    >
      <Posts />
    </Placeholder>
  </section>
);

export default PostsList;