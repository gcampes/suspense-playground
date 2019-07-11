import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostsList from './components/posts-list';
import PostDetails from './components/post-details';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PostsList} />
        <Route path="/:id" component={PostDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
