import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import StarredVideoPage from '../../pages/StarredVideo';
import StarredHomePage from '../../pages/StarredHome';
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
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/starred">
        <StarredHomePage />
      </Route>
      <Route exact path="/starred_video=:id">
        <StarredVideoPage />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
