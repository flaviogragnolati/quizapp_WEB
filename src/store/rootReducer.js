import authSlice from 'components/Auth/authSlice';
import actionsSlice from 'slices/actionsSlice';
import catalogueSlice from 'views/Catalogue/catalogueSlice';
import favoritesSlice from 'views/Catalogue/favoritesSlice';
import notificationSlice from 'views/Notifier/notificationSlice';
import QuizLoaderSlice from 'views/QuizLoader/QuizLoaderSlice';
import UserProfileSlice from 'views/UserProfile/UserProfileSlice';
import SchoolSlice from 'views/School/SchoolSlice';
import TeacherSlice from 'views/Teacher/TeacherSlice'
import quizDetailSlice from 'views/QuizProfile/quizDetailSlice';

// import UserRegisterSlice from 'views/Register/registerSlice';

const rootReducer = {
  notifications: notificationSlice.reducer,
  favorites: favoritesSlice.reducer,
  actions: actionsSlice.reducer,
  auth: authSlice.reducer,
  catalogue: catalogueSlice.reducer,
  QuizLoader: QuizLoaderSlice.reducer,
  Profile: UserProfileSlice.reducer,
  School: SchoolSlice.reducer,
  quizDetail: quizDetailSlice.reducer,
  Teacher: TeacherSlice.reducer,
};

export default rootReducer;

export const ACTIONS = {
  favorites: { ...favoritesSlice.actions },
  notifications: { ...notificationSlice.actions },
  actions: { ...actionsSlice.actions },
  auth: { ...authSlice.actions },
  catalogue: { ...catalogueSlice.actions },
  quizDetail: { ...quizDetailSlice.actions },
  School: { ...SchoolSlice.actions },
};
