import React , {useEffect, useState} from 'react'; 
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  Drawer__paper: {
    backgroundColor:'grey'
  }
});

function SideBar ({open}) {
  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    toggleDrawer("left",open)
    // eslint-disable-next-line 
  }, [open])

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
        {['Home', 'Profile', 'Subjects', 'Quizzes', 'DashBoard'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index === 0 ? <InboxIcon /> : <LocalLibraryIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}>{"left"}</Button>
          <Drawer classes={{ paper: classes.Drawer__paper }}  style={{}} anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
            {list("left")}
          </Drawer>
        </React.Fragment>
    </div>
  );
}

export default SideBar
