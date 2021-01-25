import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import Camera from '@material-ui/icons/Camera';
import Palette from '@material-ui/icons/Palette';
import Favorite from '@material-ui/icons/Favorite';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
// core components
import Button from 'components/CustomButtons/Button.js';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import NavPills from 'components/NavPills/NavPills.jsx';
import Parallax from 'components/Parallax/Parallax.js';

import profile from 'assets/img/faces/christian.jpg';

import styles from 'assets/jss/material-kit-react/views/profilePage.js';

import { List, ListItem, ListItemText } from '@material-ui/core/';
const img =
  'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Parallax small filter image={img} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>USER NAME</h3>
                    <h5 className={classes.subtitle}>
                      USER TYPE: STUDENT | TEACHEAR | SCHOOL?
                    </h5>
                    <Button justIcon link className={classes.margin5}>
                      <i className={'fab fa-twitter'} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={'fab fa-instagram'} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={'fab fa-facebook'} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{' '}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: '?????',
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <p className={classes.description}>asdasdasd</p>
                            <p className={classes.description}>asdasdasd</p>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p className={classes.description}>asdasdasd</p>
                            <p className={classes.description}>asdasdasd</p>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: 'Mis Cursos',
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}></GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <List>
                              <ListItem>
                                <ImportContactsIcon />
                                <ListItemText>Curso N1</ListItemText>
                              </ListItem>
                              <ListItem>
                                <ImportContactsIcon />
                                <ListItemText>Curso N2</ListItemText>
                              </ListItem>
                              <ListItem>
                                <ImportContactsIcon />
                                <ListItemText>Curso N3</ListItemText>
                              </ListItem>
                            </List>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: 'Favoritos',
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}></GridItem>
                          <GridItem xs={12} sm={12} md={4}></GridItem>
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
