import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
  Typography,
} from '@material-ui/core/';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import Button from 'components/CustomButtons/Button.js';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import NavPills from 'components/NavPills/NavPills.jsx';
import Parallax from 'components/Parallax/Parallax.js';
import fakeUser from './fakeUser';
import EditIcon from '@material-ui/icons/Edit';

import styles from 'assets/jss/material-kit-react/views/profilePage.js';

import { fakeUsers } from '../QuizLoader/data';
import { Link } from 'react-router-dom';
import ProfileTabs from './ProfileTabs';

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
  teacherIn,
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
                  <Button color="secondary">
                    <EditIcon></EditIcon>
                    Editar perfil
                  </Button>
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
                <ProfileTabs
                  activity={activity}
                  courses={courses}
                  favourites={favourites}
                  teacherIn={teacherIn}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
