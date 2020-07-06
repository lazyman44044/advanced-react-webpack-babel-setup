import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Programming = ({ isStandalone }) => (
  <div style={{ backgroundColor: 'green', padding: '20px' }}>
    <h1>Programming {isStandalone}</h1>
    {console.log(isStandalone)}
    {!isStandalone && (
      <ul>
        <li>
          <Link to={routes.INSTALLATION}>Back to Installation</Link>
        </li>
      </ul>
    )}
  </div>
);

export default Programming;
