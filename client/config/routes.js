import { Route, IndexRoute } from 'react-router';
import React from 'react';

import { App, HomePage, Game } from '../containers';
import { NotFound } from '../components';
import Root from '../Root';

const routes = (
  <Route path="/" component={Root}>
    <Route component={App}>
      <IndexRoute component={HomePage} />
      <Route path="games/:gsisId" component={Game} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
