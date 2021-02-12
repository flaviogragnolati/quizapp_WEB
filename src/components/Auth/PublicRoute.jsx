import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from 'components/Auth/AuthContext';

function PublicRoute({ component: Component, ...rest }) {
  const user = useAuth();
  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

export default PublicRoute;
