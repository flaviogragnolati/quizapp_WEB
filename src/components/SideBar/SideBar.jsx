import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
//?Material UI
import {
  Divider,
  List,
  Drawer,
  Box,
  IconButton,
  Typography,
} from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
//?Custom Styles and Context
import { SideBarContext } from '../../App';
import SidebarItem from './components/SidebarItem';
import { ACTIONS } from 'store/rootReducer';
import { useDispatch } from 'react-redux';
import { useAuth } from 'components/Auth/AuthContext';

const HeaderBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
  margin-top: 2rem;
  align-self: end;
`;

const SidebarContainer = styled.div`
  background-color: ${(p) => p.theme.main};
  height: 100%;
  width: 15vw;
`;

function SideBar() {
  const { openSidebar, toggleSideBar } = useContext(SideBarContext);
  const Dispatch = useDispatch();
  const user = useAuth();

  const handleLogout = () => {

    Dispatch(ACTIONS.auth.logout());
  };

  const SidebarContent = (
    <SidebarContainer
      role="presentation"
      onClick={() => toggleSideBar()}
      onKeyDown={() => toggleSideBar()}
    >
      <List>
        <HeaderBox>
          <Typography component="h3">QuizApp?</Typography>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </HeaderBox>
        <Divider />
        <SidebarItem
          label="Teacher Account"
          link={{
            pathname: '/profile/1',
            state: {
              owner: true,
              role: 'teacher',
            },
          }}
          icon={<AccountBoxIcon />}
        />
        <SidebarItem
          label="Student Account"
          link={{
            pathname: '/profile/1',
            state: {
              owner: true,
              role: 'student',
            },
          }}
          icon={<AccountBoxIcon />}
        />
        <Divider />
        <SidebarItem label="Home" link="/" icon={<HomeIcon />} />
        <SidebarItem
          label="Catalogue"
          link="/catalogue"
          icon={<LocalLibraryIcon />}
        />
   {Boolean(user) ? (  <div>
      <SidebarItem
          label="Create Quiz"
          link="/quiz-loader"
          icon={<FormatListNumberedIcon />}
        />
        <SidebarItem
          label="Create Questions"
          link="/question-loader"
          icon={<FormatListNumberedIcon />}
        />
        <SidebarItem
          label="Quiz de Escuela"
          link="/school-quiz"
          icon={<FormatListNumberedIcon />}
        />
        <SidebarItem
          label="Teacher de Escuela"
          link="/school-teacher"
          icon={<FormatListNumberedIcon />}
        />
        <SidebarItem
          label="Materias de Escuela"
          link="/school-subject"
          icon={<FormatListNumberedIcon />}
        />
        <SidebarItem
          label="Cargar materias"
          link="/subject-loader"
          icon={<FormatListNumberedIcon />}
        />
        <SidebarItem
          label="Cargar Quiz"
          link="/quiz-loader"
          icon={<FormatListNumberedIcon />}
        /></div>) : (null)}
        <Divider />
        {Boolean(user) ? ( <div onClick={handleLogout}>
          <SidebarItem label="Logout" link="/" icon={<ExitToAppIcon />} />
        </div> ) :(null)}
      </List>
    </SidebarContainer>
  );

  return (
    <div>
      <React.Fragment key={'left'}>
        <Drawer
          anchor={'left'}
          open={openSidebar}
          onClose={() => toggleSideBar()}
        >
          {SidebarContent}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default SideBar;
