import { Route } from 'react-router-dom';
import Home from 'views/Home';
import Login from 'views/Login/Login';
import NotFound from 'views/NotFound';
import UserProfile from 'views/UserProfile';
import SchoolProfile from 'views/SchoolProfile';
import QuizProfile from 'views/QuizProfile';
import Catalogue from 'views/Catalogue';
import Register from 'views/Register/Register';
import SchoolSubject from 'views/SchoolSubject';
import About from 'views/About/';
import SchoolTeacher from 'views/SchoolTeacher';
import SchoolQuiz from 'views/SchoolQuiz';
import RegisterSchool from 'views/Register/RegisterSchool';
import QuizLoader from 'views/QuizLoader';
import QuestionLoader from 'views/QuestionLoader';
import DatosQuiz from 'views/QuizLoader/DatosQuiz';
export const routes = [
  { path: ['/', '/home'], component: Home, access: 'guest', exact: true },
  { path: '/login', component: Login, access: 'guest' },
  { path: '/register', component: Register, access: 'guest' },
  { path: '/registerSchool', component: RegisterSchool, access: 'guest' },
  { path: '/about', component: About, access: 'guest' },
  { path: '/registerSchool', component: RegisterSchool, access: 'guest' },
  { path: '/quiz-loader', component: DatosQuiz, access: 'user' },
  { path: '/question-loader', component: QuestionLoader, access: 'user' },
  { path: '/profile/:id', component: UserProfile, access: 'guest' },
  { path: '/catalogue', component: Catalogue, access: 'guest' },
  { path: '/school-profile/:id', component: SchoolProfile, access: 'guest' },
  { path: '/quiz-detail/:id', component: QuizProfile, access: 'guest' },
  { path: '/school-subject', component: SchoolSubject, access: 'guest' },
  { path: '/school-teacher', component: SchoolTeacher, access: 'guest' },
  { path: '/school-quiz', component: SchoolQuiz, access: 'guest' },
  { path: '/404', component: NotFound, access: 'guest' },
];

export const createRoutes = (routes) => {
  if (routes.lenght < 1) return null;

  return routes.map((route, idx) => {
    switch (route.access) {
      case 'guest':
        return (
          <Route
            key={route.path + idx}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        );
      case 'user':
        return (
          <Route
            key={route.path + idx}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        );

      case 'admin':
        return (
          <Route
            key={route.path + idx}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        );

      default:
        console.error('ACCESS LEVEL NOT DEFINED');
        return (
          <Route
            key={route.path + idx}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        );
    }
  });
};
