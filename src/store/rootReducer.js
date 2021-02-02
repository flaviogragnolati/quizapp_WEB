import authSlice from 'components/Auth/authSlice';
import actionsSlice from 'slices/actionsSlice';
import catalogueSlice from 'views/Catalogue/catalogueSlice';
import favoritesSlice from 'views/Catalogue/favoritesSlice';
import notificationSlice from 'views/Notifier/notificationSlice';
import QuizLoaderSlice from 'views/QuizLoader/QuizLoaderSlice';
import SchoolQuizSlice from 'views/SchoolQuiz/SchoolQuizSlice';
import SubjectLoaderSlice from 'views/SubjectLoader/SubjectLoaderSlice';
import UserProfileSlice from 'views/UserProfile/UserProfileSlice';


// import UserRegisterSlice from 'views/Register/registerSlice';


const rootReducer = {
  notifications: notificationSlice.reducer,
  favorites: favoritesSlice.reducer,
  actions: actionsSlice.reducer,
  auth: authSlice.reducer,
  QuizInfo: SchoolQuizSlice.reducer,
  catalogue: catalogueSlice.reducer,
  QuizLoader: QuizLoaderSlice.reducer,
  SubjectLoader: SubjectLoaderSlice.reducer,
  Profile: UserProfileSlice.reducer,
};

export default rootReducer;

export const ACTIONS = {
  favorites: { ...favoritesSlice.actions },
  notifications: { ...notificationSlice.actions },
  actions: { ...actionsSlice.actions },
  auth: { ...authSlice.actions },
  // QuizInfo: { ...SchoolQuizSlice.actions },
  catalogue: { ...catalogueSlice.actions },
};
