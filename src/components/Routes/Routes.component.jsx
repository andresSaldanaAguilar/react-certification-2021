import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import VideoPage from '../../pages/Video';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/video=:id">
        <VideoPage />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
