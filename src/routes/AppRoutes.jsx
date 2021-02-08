import React from 'react';
import { routes, createRoutes } from './routes';

function AppRoutes() {
  console.log(createRoutes(routes));
  return <>{createRoutes(routes)}</>;
}

export default AppRoutes;
