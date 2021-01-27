import { createContext, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//Utils
import { ThemeWrapper } from './styles/ThemeWrapper';
import { useThemeMode } from './styles/ThemeWrapper/useThemeMode';
//Componentes
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar.jsx';
import Home from './views/Home';
import Login from './views/Login/Login';
import NotFound from './views/NotFound';
import Footer from 'components/Footer/';
import UserProfile from './views/UserProfile';
import SchoolProfile from './views/SchoolProfile';
import QuizProfile from './views/QuizProfile';
import Catalogue from './views/Catalogue';
import Register from './views/Register/Register';
import SchoolSubject from './views/SchoolSubject';
import About from './views/About/';
import SchoolTeacher from './views/SchoolTeacher';
import SchoolQuiz from 'views/SchoolQuiz';
import Notifier from 'views/Notifier';
import QuestionLoader from 'views/QuestionsLoader';
// import QuestionSideBar from 'components/SideBar/QuestionSideBar.jsx';

//*container de prueba para thema MUI / Styled cOmponents
// const StyledContainer = styled.div`
//   background: ${(p) => p.theme.palette.background.paper};
//   height: 64px;
//   border: 1px solid ${(p) => p.theme.palette.divider};
// `;
import TeacherProfile from 'views/TeacherProfile';
import QuizLoader from './views/QuizLoader';
import FloatingBack from './components/FloatingButtons/FloatingBack';
import FloatingTop from './components/FloatingButtons/FloatingTop';

export const SideBarContext = createContext({
  openSidebar: false,
  toggleSideBar: () => {},
});

function App(props) {
  //* vvvvvvvvvv THEME MANAGEMENT vvvvvvvvvv
  const [theme, toggleTheme] = useThemeMode();
  //* ^^^^^^^^^^^ THEME MANAGEMENT ^^^^^^^^^^^

  //* vvvvvvvvvv SIDEBAR MANAGEMENT vvvvvvvvvv
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleSideBar = () => {
    setOpenSidebar(!openSidebar);
  };
  const sidebarCtx = { openSidebar, toggleSideBar };
  //* ^^^^^^^^^^^ SIDEBAR MANAGEMENT ^^^^^^^^^^^

  //* vvvvvvvvvv AUTH MANAGEMENT vvvvvvvvvv
  //* ^^^^^^^^^^^ AUTH MANAGEMENT ^^^^^^^^^^^

  return (
    <ThemeWrapper theme={theme}>
      <div className="App">
        <Notifier />
        <SideBarContext.Provider value={sidebarCtx}>
          <div id="top-anchor">x</div>
          <NavBar toggleTheme={toggleTheme} theme={theme} checked={theme} />
          <SideBar />
        </SideBarContext.Provider>
        <div>
          <Switch>
            <Route exact path={['/', '/home']} component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/about" component={About} />
            <Route path="/quiz-loader" component={QuizLoader} />
            <Route path="/questionLoader" component={QuestionLoader} />
            <Route path="/user-profile/:id" component={UserProfile} />
            <Route path="/catalogue" component={Catalogue} />
            <Route path="/school-profile/:id" component={SchoolProfile} />
            <Route path="/teacher-profile" component={TeacherProfile} />
            <Route path="/quiz-detail/:id" component={QuizProfile} />
            <Route path="/school-subject" component={SchoolSubject} />
            <Route path="/school-teacher" component={SchoolTeacher} />
            <Route path="/school-Quiz" component={SchoolQuiz} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </div>
        <hr></hr>
        <Footer />
        <FloatingBack />
        <FloatingTop {...props} />
      </div>
    </ThemeWrapper>
  );
}

export default App;
