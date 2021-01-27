import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Palette from '@material-ui/icons/Palette';
import Favorite from '@material-ui/icons/Favorite';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import DescriptionIcon from '@material-ui/icons/Description';
import InfoIcon from '@material-ui/icons/Info';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import ErrorIcon from '@material-ui/icons/Error';
import CancelIcon from '@material-ui/icons/Cancel';
import WarningIcon from '@material-ui/icons/Warning';
// core components
import Button from 'components/CustomButtons/Button.js';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import NavPills from 'components/NavPills/NavPills.jsx';
import Parallax from 'components/Parallax/Parallax.js';
import fakeUser from './fakeUser';

import styles from 'assets/jss/material-kit-react/views/profilePage.js';

import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
  Typography,
} from '@material-ui/core/';
import { fakeUsers } from '../QuizLoader/data';
import { Link } from 'react-router-dom';

const bg_img =
  'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';

const useStyles = makeStyles(styles);

const {
  id,
  img,
  social,
  name,
  type,
  bio,
  courses,
  favourites,
  activity,
} = fakeUser;

export default function ProfilePage(props) {
  const classes = useStyles();

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div>
      <Parallax small filter image={bg_img} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={img} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h1 className={classes.title}>{name}</h1>
                    <h5 className={classes.subtitle}>{`#${id}`}</h5>
                    <h3 className={classes.subtitle}>{`Role: ${type}`}</h3>
                    <Button
                      justIcon
                      link
                      className={classes.margin5}
                      component={Link}
                      to={social.tw}
                    >
                      <i className={'fab fa-twitter'} />
                    </Button>
                    <Button
                      justIcon
                      link
                      className={classes.margin5}
                      component={Link}
                      to={social.ig}
                    >
                      <i className={'fab fa-instagram'} />
                    </Button>
                    <Button
                      justIcon
                      link
                      className={classes.margin5}
                      component={Link}
                      to={social.fb}
                    >
                      <i className={'fab fa-facebook'} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <hr></hr>
              <p>{bio}</p>
              <hr></hr>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="info"
                  tabs={[
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
                                      <IconButton
                                        edge="end"
                                        aria-label="more info"
                                      >
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
                                <ListItem
                                  button
                                  key={idx}
                                  component={Link}
                                  to="/quiz-detail/1"
                                >
                                  <ListItemIcon>
                                    <DescriptionIcon />
                                  </ListItemIcon>
                                  <ListItemText
                                    // disableTypography
                                    // primary={
                                    //   <Typography
                                    //     variant="body1"
                                    //     style={{
                                    //       color: `black`,
                                    //       display: 'flex',
                                    //       flexGrow: '1',
                                    //     }}
                                    //   >
                                    //     {course.title}
                                    //   </Typography>
                                    // }
                                    primary={course.title}
                                  />
                                  <ListItemSecondaryAction>
                                    <Tooltip
                                      disableFocusListener
                                      placement="right"
                                      title="Todavia estas a tiempo de finalizar el curso"
                                    >
                                      <IconButton
                                        edge="end"
                                        aria-label="more info"
                                      >
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
                                <ListItem
                                  button
                                  key={idx}
                                  component={Link}
                                  to="/quiz-detail/1"
                                >
                                  <ListItemIcon>
                                    <DescriptionIcon />
                                  </ListItemIcon>
                                  <ListItemText
                                    // disableTypography
                                    // primary={
                                    //   <Typography
                                    //     variant="body1"
                                    //     style={{
                                    //       color: `black`,
                                    //       display: 'flex',
                                    //       flexGrow: '1',
                                    //     }}
                                    //   >
                                    //     {course.title}
                                    //   </Typography>
                                    // }
                                    primary={fav.title}
                                  />
                                  <ListItemSecondaryAction>
                                    <Tooltip
                                      disableFocusListener
                                      placement="right"
                                      title="EL curso todavia no ha comenzado"
                                    >
                                      <IconButton
                                        edge="end"
                                        aria-label="more info"
                                      >
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
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
