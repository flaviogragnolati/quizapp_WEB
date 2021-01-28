import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuthContext } from './authContext';

function GuestRoute({ component: Component, ...rest }) {
  const authStatus = useAuthContext();
  const REDIRECT = '/catalogue';
  return (
    <Route
      {...rest}
      render={(props) =>
        !authStatus ? <Component {...props} /> : <Redirect to={REDIRECT} />
      }
    />
  );
}

export default GuestRoute;
