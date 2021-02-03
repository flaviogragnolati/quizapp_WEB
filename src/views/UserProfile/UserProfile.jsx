import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Button from 'components/CustomButtons/Button.js';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Parallax from 'components/Parallax/Parallax.js';
import fakeUser from './fakeUser';
import EditIcon from '@material-ui/icons/Edit';
import styles from 'assets/jss/material-kit-react/views/profilePage.js';
import ProfileTabs from './ProfileTabs';
import { AuthContext } from 'components/Auth/AuthContext';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getProfileData } from 'views/UserProfile/UserProfileSlice';
import {
  ProfileSelector,
  ProfileStatusSelector,
} from 'utils/selectors';

const bg_img =
  'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';

const useStyles = makeStyles(styles);

const {
  id,
  img,
  social,
  name,
  role: propRole,
  bio,
  courses,
  favourites,
  activity,
  teacherIn,
} = fakeUser;

export default function ProfilePage(props) {
  const user = useContext(AuthContext);
  const dispatch = useDispatch();
  const profile = useSelector(ProfileSelector);
  const status = useSelector(ProfileStatusSelector);
  const datos = useParams();


  useEffect(() => {

    dispatch(getProfileData(datos.id));
  }, []);

  const classes = useStyles();
  let showDetails =
    props.location && props.location.state && props.location.state.owner;
  let role =
    (props.location && props.location.state && props.location.state.role) ||
    propRole;

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div>
      {status === 'success' ? (
        <>
          <Parallax small filter image={bg_img} />
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div>
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={6}>
                    <div className={classes.profile}>
                      <div>
                        <img
                          src={profile.photo}
                          alt="..."
                          className={imageClasses}
                        />
                      </div>
                      {showDetails && (
                        <Button color="secondary">
                          <EditIcon></EditIcon>
                          Editar perfil
                        </Button>
                      )}
                      <div className={classes.name}>
                        <h1
                          className={classes.title}
                        >{`${profile.firstName} ${profile.lastName}`}</h1>
                        <h3 className={classes.subtitle}>
                          {profile.birthdate}
                        </h3>
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
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={8}
                    className={classes.navWrapper}
                  >
                    {showDetails && (
                      <ProfileTabs
                        activity={activity}
                        courses={courses}
                        favourites={favourites}
                        teacherIn={teacherIn}
                        role={role}
                      />
                    )}
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
