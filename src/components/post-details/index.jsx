import React from 'react';

import Loader from '../common/loader';
import Placeholder from '../common/placeholder';
import Details from './details';

const PostDetails = () => (
  <section className="page">
    <Placeholder
      delay={2000}
      fallback={<Loader />}
    >
      <Details />
    </Placeholder>
  </section>
);

export default PostDetails;