import authSlice from 'components/Auth/authSlice';
import actionsSlice from 'slices/actionsSlice';
import favoritesSlice from 'views/Catalogue/favoritesSlice';
import notificationSlice from 'views/Notifier/notificationSlice';

const rootReducer = {
  notifications: notificationSlice.reducer,
  favorites: favoritesSlice.reducer,
  actions: actionsSlice.reducer,
  auth: authSlice.reducer,
};

export default rootReducer;

export const ACTIONS = {
  favorites: { ...favoritesSlice.actions },
  notifications: { ...notificationSlice.actions },
  actions: { ...actionsSlice.actions },
  auth: { ...authSlice.actions },
};
