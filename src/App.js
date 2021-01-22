import { createContext, useMemo, useState } from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar.jsx';
import Home from './views/Home/Index.jsx';
import { ThemeWrapper } from './styles/ThemeWrapper';
import customTheme from './styles/ThemeWrapper/customTheme';
import { useThemeMode } from './styles/ThemeWrapper/useThemeMode';
import Login from './views/Login/Login';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from './views/NotFound';
import Footer from 'components/Footer/';
import UserProfile from './views/UserProfile';
import SchoolProfile from './views/SchoolProfile'
import Catalogue from './views/Catalogue'
//*container de prueba para thema MUI / Styled cOmponents
const StyledContainer = styled.div`
  background: ${(p) => p.theme.palette.background.paper};
  height: 64px;
  border: 1px solid ${(p) => p.theme.palette.divider};
`;

export const SideBarContext = createContext({
  openSidebar: false,
  toggleSideBar: () => {},
});

function App() {
  //* vvvvvvvvvv THEME MANAGEMENT vvvvvvvvvv
  const [theme, toggleTheme] = useThemeMode();
  // let themeMode = theme === 'light' ? customTheme('light') : customTheme('dark');
  let themeMode = useMemo(() => customTheme(theme), [theme]);
  //* ^^^^^^^^^^^ THEME MANAGEMENT ^^^^^^^^^^^

  //* vvvvvvvvvv SIDEBAR MANAGEMENT vvvvvvvvvv
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleSideBar = () => {
    setOpenSidebar(!openSidebar);
  };
  const sidebarCtx = { openSidebar, toggleSideBar };
  //* ^^^^^^^^^^^ SIDEBAR MANAGEMENT ^^^^^^^^^^^

  return (
    <ThemeWrapper theme={themeMode}>
      <div className="App">
        <SideBarContext.Provider value={sidebarCtx}>
          <NavBar toggleTheme={toggleTheme} />
          <SideBar />
        </SideBarContext.Provider>
        <Switch>
          <Route exact path={['/', '/home']} component={Home} />
          <Route path="/login" component={Login} />
          <Route path={['/user-profile', '/profile']} component={UserProfile} />
          <Route path={['/school-profile', '/profile']} component={SchoolProfile} />          
          <Route path={['/catalogue']} component={Catalogue} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
        <hr></hr>
        <Footer />
      </div>
    </ThemeWrapper>
  );
}

export default App;
