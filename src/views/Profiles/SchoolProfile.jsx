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
import fakeUser from './components/fakeUser';
import EditIcon from '@material-ui/icons/Edit';
import styles from 'assets/jss/material-kit-react/views/profilePage.js';
import ProfileTabs from './components/ProfileTabs';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getSchoolData, getUserData } from './profileSlice';
import { schoolProfileSelector, profileStatusSelector } from 'utils/selectors';
import BackdropLoading from 'components/Loading/BackdropLoading';
import { useHistory } from 'react-router-dom';
import { getQuizList } from 'views/School/SchoolSlice';
import { SchoolQuizSelector } from 'utils/selectors';
import SchoolProfileQuizDetail from './components/SchoolProfileQuizDetail';
import { quizDetail } from '../Catalogue/quizDetail';
import { SchoolStatusSelector } from 'utils/selectors';
import { Container } from '@material-ui/core';

const bg_img =
  'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';

const useStyles = makeStyles(styles);

const { img, social, courses, favourites, activity, teacherIn } = fakeUser;

export default function ProfilePage(props) {
  const dispatch = useDispatch();
  const id = parseInt(useParams().id);
  console.log('ID school profile', id);
  const profileStatus = useSelector(profileStatusSelector);
  const school = useSelector(schoolProfileSelector);
  const quizList = useSelector(SchoolQuizSelector);
  const quizListStatus = useSelector(SchoolStatusSelector);

  useEffect(() => {
    if (profileStatus === 'idle' || school.id !== id) {
      dispatch(getSchoolData(id));
      dispatch(getQuizList({ id }));
    }
  }, [dispatch, profileStatus, school, id]);

  const classes = useStyles();

  const imageClasses = classNames(
    classes.imgRaised,
    // classes.imgRoundedCircle,
    classes.imgFluid
  );

  let content;
  if (profileStatus === 'pending') {
    content = <BackdropLoading />;
  } else if (profileStatus === 'error' || quizListStatus === 'error') {
    content = <h1>Ha ocurrido un error...metele F5</h1>;
  } else if (profileStatus === 'success' && quizListStatus === 'success') {
    const { id, name, email, description, country, city, logo } = school;
    console.log('quizlist', quizList);
    content = (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.profile}>
              <div>
                <img src={logo} alt="..." className={imageClasses} />
              </div>
              <div className={classes.name}>
                <h1 className={classes.title}>{name}</h1>
                <h3
                  className={classes.subtitle}
                >{`Sede en ${country}, ${city}`}</h3>
                <p>{description}</p>
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
                <h4>{email}</h4>
              </div>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <h2>Listado de Quizzes</h2>
            <br></br>
          </GridItem>
          <GridContainer justify="center">
            {quizList.map((quiz, idx) => (
              <GridItem xs={8} sm={6} md={4} className={classes.navWrapper}>
                <SchoolProfileQuizDetail key={idx} quizDetail={quiz} />
              </GridItem>
            ))}
          </GridContainer>
        </GridContainer>
      </div>
    );
  }

  return (
    <div>
      <>
        <Parallax small filter image={bg_img} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>{content}</div>
        </div>
      </>
    </div>
  );
}
