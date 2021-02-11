import React from 'react';

//@material-ui/core
import {
  // Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
  // Typography,
} from '@material-ui/core/';

// import Button from 'components/CustomButtons/Button.js';
import GridContainer from 'components/Grid/GridContainer.jsx';
// import GridItem from 'components/Grid/GridItem.jsx';
import NavPills from 'components/NavPills/NavPills.jsx';
// import Parallax from 'components/Parallax/Parallax.js';
// import EditIcon from '@material-ui/icons/Edit';
import SchoolIcon from '@material-ui/icons/School';
// @material-ui/icons
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import MenuBookIcon from '@material-ui/icons/MenuBook';
// import Palette from '@material-ui/icons/Palette';
import Favorite from '@material-ui/icons/Favorite';
// import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import DescriptionIcon from '@material-ui/icons/Description';
import InfoIcon from '@material-ui/icons/Info';
import DoneAllIcon from '@material-ui/icons/DoneAll';
// import ErrorIcon from '@material-ui/icons/Error';
import CancelIcon from '@material-ui/icons/Cancel';
import WarningIcon from '@material-ui/icons/Warning';

// import fakeUser from './fakeUser';
import { Link } from 'react-router-dom';

function ProfileTabs({
  activity,
  courses,
  favourites,
  teacherIn,
  role,
  ...props
}) {
  const tabs = [
    {
      tabButton: 'Actividad',
      tabIcon: LocalActivityIcon,
      tabContent: (
        <GridContainer justify="center">
          <List>
            {activity.map((item, idx) => {
              return (
                <ListItem key={idx}>
                  <ListItemIcon>
                    {item.type === 'success' ? (
                      <DoneAllIcon color="secondary" />
                    ) : item.type === 'info' ? (
                      <InfoIcon color="primary" />
                    ) : item.type === 'error' ? (
                      <CancelIcon color="error" />
                    ) : (
                      <WarningIcon color="error" />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={item.action} />
                  <ListItemSecondaryAction>
                    <Tooltip
                      disableFocusListener
                      placement="right"
                      title="Informacion relacionada a la accion"
                    >
                      <IconButton edge="end" aria-label="more info">
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </GridContainer>
      ),
    },
    {
      tabButton: 'Mis Cursos',
      tabIcon: MenuBookIcon,
      tabContent: (
        <GridContainer justify="center">
          <List>
            {courses.map((course, idx) => {
              return (
                <ListItem button key={idx} component={Link} to={`/quiz-detail/${course.id}`}>
                  <ListItemIcon>
                    <DescriptionIcon />
                  </ListItemIcon>
                  <ListItemText primary={course.name} />
                  <ListItemSecondaryAction>
                    <Tooltip
                      disableFocusListener
                      placement="right"
                      title={course.description}
                    >
                      <IconButton edge="end" aria-label="more info">
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </GridContainer>
      ),
    },
    {
      tabButton: 'Favoritos',
      tabIcon: Favorite,
      tabContent: (
        <GridContainer justify="center">
          <List>
            {favourites.map((fav, idx) => {
              return (
                <ListItem button key={idx} component={Link} to={`/quiz-detail/${fav.id}`}>
                  <ListItemIcon>
                    <DescriptionIcon />
                  </ListItemIcon>
                  <ListItemText primary={fav.name} />
                  <ListItemSecondaryAction>
                    <Tooltip
                      disableFocusListener
                      placement="right"
                      title={fav.description}
                    >
                      <IconButton edge="end" aria-label="more info">
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </GridContainer>
      ),
    },
  ];
  if (role === 'teacher') {
    tabs.push({
      tabButton: 'Teacher In',
      tabIcon: SchoolIcon,
      tabContent: (
        <GridContainer justify="center">
          <List>
            {teacherIn.map((fav, idx) => {
              return (
                <ListItem button key={idx} component={Link} to="/quiz-detail/1">
                  <ListItemIcon>
                    <DescriptionIcon />
                  </ListItemIcon>
                  <ListItemText primary={fav.title} />
                  <ListItemSecondaryAction>
                    <Tooltip
                      disableFocusListener
                      placement="right"
                      title="EL curso todavia no ha comenzado"
                    >
                      <IconButton edge="end" aria-label="more info">
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </GridContainer>
      ),
    });
  }

  return <NavPills alignCenter color="info" tabs={tabs} {...props} />;
}

export default ProfileTabs;
