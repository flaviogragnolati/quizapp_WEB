import favoritesSlice from 'views/Catalogue/favoritesSlice';
import notificationSlice from 'views/Notifier/notificationSlice';

const rootReducer = {
  notifications: notificationSlice.reducer,
  favorites: favoritesSlice.reducer,
};

export default rootReducer;

export const ACTIONS = {
  favorites: { ...favoritesSlice.actions },
  notifications: { ...notificationSlice.actions },
};
