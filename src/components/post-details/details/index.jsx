import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import { createUseFetch } from 'fetch-suspense';

// Could not find a package yet that can throw a promise
// out of multiple requests as to the Suspense spec, so I
// decided to do this wrapper for these particular requests.
const createFakeResponse= (body) => new Response(JSON.stringify(body), {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
});

const postsWithAuthorFetch = createUseFetch(async (_, id) => {
  const handleJsonResponse = data => data.json();
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(handleJsonResponse);
  const author = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`).then(handleJsonResponse)
  const postWithAuthor = {
    ...post,
    author,
  }

  return createFakeResponse(postWithAuthor);
});

const Posts = ({ match }) => {
  const post = postsWithAuthorFetch(null, match.params.id);

  return (
    <Fragment>
      <Link to="/">
        Back
      </Link>
      <h1>
        {post.title}
      </h1>
      <h4>
        {post.author.name}
      </h4>
      <p>
        {post.body}
      </p>
    </Fragment>
  );
};


export default withRouter(Posts);
