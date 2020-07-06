import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import * as routes from './constants/routes';
import Programming from './Programming';
import Installation from './Installation';

const App = title => {
  return (
    <BrowserRouter>
      <h1>{title.title}</h1>

      <ul>
        <li>
          <Link to={routes.PROGRAMMING}>Programming</Link>
        </li>
        <li>
          <Link to={routes.INSTALLATION}>Installation</Link>
        </li>
      </ul>

      <Switch>
        <Route
          exact
          path={routes.PROGRAMMING}
          component={Programming}
        />
        <Route
          exact
          path={routes.INSTALLATION}
          component={Installation}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
