import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import notificationMiddleware from './notificationMiddleware';

const store = configureStore({
  reducer: rootReducer,
<<<<<<< HEAD
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
=======
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(notificationMiddleware).concat(logger),
    getDefaultMiddleware().concat(logger),
>>>>>>> 4fc064f2d6ad900b07f5bd24a4d67ace282c6967
});

export default store;
