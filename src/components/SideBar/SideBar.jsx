import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react';
import { useStyles } from './SideBarStyle';
import { SideBarContext } from '../../App';

function SideBar() {
  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });
  let openSideBar = useContext(SideBarContext);

  const toggleDrawer = (anchor, isOpen) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: isOpen });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Typography component="h3">Headline</Typography>
        <Divider />
        {['Home', 'Profile', 'Subjects', 'Quizzes', 'DashBoard'].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? <InboxIcon /> : <LocalLibraryIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <React.Fragment key={'left'}>
        <Button onClick={toggleDrawer('left', true)}>{'left'}</Button>
        <Drawer
          classes={{ paper: classes.Drawer__paper }}
          style={{}}
          anchor={'left'}
          open={openSideBar}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default SideBar;
