import { Route } from 'react-router-dom';
import Home from 'views/Home';
import Login from 'views/Login/Login';
import NotFound from 'views/NotFound';
import UserProfile from 'views/UserProfile';
import SchoolProfile from 'views/School/SchoolProfile';
import QuizProfile from 'views/QuizProfile';
import Catalogue from 'views/Catalogue';
import Register from 'views/Register/Register';
import SchoolSubject from 'views/School/SchoolSubject';
import About from 'views/About/';
import SchoolTeacher from 'views/School/SchoolTeacher';
import SchoolQuiz from 'views/School/SchoolQuiz';
import RegisterSchool from 'views/Register/RegisterSchool';
import QuestionLoader from 'views/QuestionLoader';
import DatosQuiz from 'views/QuizLoader/DatosQuiz';
import SubjectLoader from 'views/School/SubjectLoader';
import LoginSchool from 'views/Login/LoginSchool';
import QuizTeacher from 'views/Teacher/QuizTeacher';
import EnrollTeacher from "views/Teacher/EnrollTeacher";


export const routes = [
  { path: ['/', '/home'], component: Home, access: 'guest', exact: true },
  { path: '/login', component: Login, access: 'guest' },
  { path: '/register', component: Register, access: 'guest' },
  { path: '/loginSchool', component: LoginSchool, access: 'guest' },
  { path: '/about', component: About, access: 'guest' },
  { path: '/registerSchool', component: RegisterSchool, access: 'guest' },
  { path: '/quiz-loader/', component: DatosQuiz, access: 'user' },
  { path: ['/subject-loader/:id','/subject-loader'], component: SubjectLoader, access: 'guest' },
  { path: '/question-loader/:id', component: QuestionLoader, access: 'user' },
  { path: '/profile/:id', component: UserProfile, access: 'guest' },
  { path: '/catalogue', component: Catalogue, access: 'guest' },
  { path: '/school-profile/:id', component: SchoolProfile, access: 'guest' },
  { path: '/quiz-detail/:id', component: QuizProfile, access: 'guest' },
  { path: '/school-subject', component: SchoolSubject, access: 'guest' },
  { path: '/school-teacher', component: SchoolTeacher, access: 'guest' },
  { path: '/school-quiz', component: SchoolQuiz, access: 'guest' },
  { path: '/quiz-list', component: QuizTeacher, access: 'guest' },
  { path: '/enroll-list/:id', component: EnrollTeacher, access: 'guest' },
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
