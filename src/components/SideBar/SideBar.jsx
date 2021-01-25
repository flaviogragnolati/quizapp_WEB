import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//?Material UI
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Box,
  IconButton,
  Typography,
} from '@material-ui/core';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import styled from 'styled-components';
//?Custom Styles and Context
import { useStyles } from './SideBarStyle';
import { SideBarContext } from '../../App';

const HeaderBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
  margin-top: 2rem;
`;

function SideBar() {
  const classes = useStyles();

  const { openSidebar, toggleSideBar } = useContext(SideBarContext);

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
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
        {['Home', 'Profile', 'Catalogue', 'Quizzes', 'Dashboard'].map(
          (text, index) => (
            <Link to={`/${text.toLowerCase()}`}>
              <ListItem button key={text}>
                <ListItemIcon>
                  {index === 0 ? <InboxIcon /> : <LocalLibraryIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          )
        )}
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={'left'}>
        <Drawer
          classes={{ paper: classes.Drawer__paper }}
          style={{}}
          anchor={'left'}
          open={openSidebar}
          onClose={() => toggleSideBar()}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default SideBar;
