import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from 'components/Auth/AuthContext';

function ProtectRoute({ component: Component, ...rest }) {
  const user = useAuth();
  const HOME = '/home';
  return (
    <Route
      {...rest}
      render={(props) =>
        user.type === 'school' ? (
          <Component {...props} />
        ) : (
          <Redirect to={HOME} />
        )
      }
    />
  );
}

export default ProtectRoute;
