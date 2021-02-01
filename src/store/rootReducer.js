import authSlice from 'components/Auth/authSlice';
import actionsSlice from 'slices/actionsSlice';
import catalogueSlice from 'views/Catalogue/catalogueSlice';
import favoritesSlice from 'views/Catalogue/favoritesSlice';
import notificationSlice from 'views/Notifier/notificationSlice';
import QuizInfoSlice from 'views/SchoolQuiz/QuizInfoSlice';
// import UserRegisterSlice from 'views/Register/registerSlice';

const rootReducer = {
  notifications: notificationSlice.reducer,
  favorites: favoritesSlice.reducer,
  actions: actionsSlice.reducer,
  // User: UserRegisterSlice.reducer,
  auth: authSlice.reducer,
  QuizInfo: QuizInfoSlice.reducer,
  catalogue: catalogueSlice.reducer,
};

export default rootReducer;

export const ACTIONS = {
  favorites: { ...favoritesSlice.actions },
  notifications: { ...notificationSlice.actions },
  actions: { ...actionsSlice.actions },
  auth: { ...authSlice.actions },
  // QuizInfo: { ...QuizInfoSlice.actions },
  catalogue: { ...catalogueSlice.actions },
};
