import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import clsx from 'clsx';
import React, { useContext} from 'react';
import { useStyles } from './SideBarStyle';
import { SideBarContext } from '../../App';
import { Link } from 'react-router-dom';

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
        <Typography component="h3">Headline</Typography>
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
      </List>
      <Divider />
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
