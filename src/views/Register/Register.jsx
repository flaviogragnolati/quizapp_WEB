import React, { useEffect, useState } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import DateRangeIcon from '@material-ui/icons/DateRange';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardFooter from 'components/Card/CardFooter.js';

import { useDispatch, useSelector } from 'react-redux';
// import { createUser } from './registerSlice';
import { Formik, Form, Field } from 'formik';

import styles from 'assets/jss/material-kit-react/views/loginPage.js';
import { TextField } from 'formik-material-ui';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { createUser } from 'components/Auth/authSlice';
import {authStatusSelector, userSelector} from '../../utils/selectors'

const useStyles = makeStyles(styles);
const image =
  'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';
const GreyText = styled(Link)`
  color: ${(p) => p.theme.grey};
`;

function Register(props) {
  const [cardAnimaton, setCardAnimation] = useState('cardHidden');
  setTimeout(function () {
    setCardAnimation('');
  }, 700);
  const classes = useStyles();
  //const { ...rest } = props;
  const dispatch = useDispatch();
  const userStatus = useSelector(authStatusSelector);
  const History = useHistory()
  const user = useSelector(userSelector)

  // const user = {
  //   name: "jorgito",
  //   email: "jorgito@gmail.com",
  //   description: "sssssss",
  //   city: "sssssss",
  //   country: "sssssss",
  //   logo: "sssssss",
  // };
  useEffect(() => {
    if(userStatus === 'success'){
      History.push(`/profile/${user.id}`)
    }
  }, [userStatus])
  
  const registerInitialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cellphone: '',
    birthdate: '',
  };

  const handleSubmit = (data, formik) => {
    console.log(data);
    dispatch(createUser(data));
  };

  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: 'url(' + image + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>Register with:</h4>
                  <div className={classes.socialLine}>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className={'fab fa-twitter'} />
                    </Button>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className={'fab fa-facebook'} />
                    </Button>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className={'fab fa-google-plus-g'} />
                    </Button>
                  </div>
                </CardHeader>
                <Formik
                  onSubmit={handleSubmit}
                  initialValues={registerInitialValues}
                >
                  {(formik) => (
                    <Form className={classes.form}>
                      <p className={classes.divider}>Or Be Classical</p>

                      <CardBody>
                        <Field
                          className={classes.Register__Fields}
                          component={TextField}
                          name="firstName"
                          label="firstName"
                          fullWidth
                          color="secondary"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <People className={classes.inputIconsColor} />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Field
                          className={classes.Register__Fields}
                          component={TextField}
                          label="Last Name"
                          name="lastName"
                          fullWidth
                          InputProps={{
                            type: 'text',
                            endAdornment: (
                              <InputAdornment position="end">
                                <SupervisorAccountIcon
                                  className={classes.inputIconsColor}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Field
                          className={classes.Register__Fields}
                          component={TextField}
                          label="Email..."
                          name="email"
                          fullWidth
                          InputProps={{
                            type: 'email',
                            endAdornment: (
                              <InputAdornment position="end">
                                <Email className={classes.inputIconsColor} />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Field
                          className={classes.Register__Fields}
                          component={TextField}
                          label="Password"
                          name="password"
                          fullWidth
                          InputProps={{
                            type: 'password',
                            endAdornment: (
                              <InputAdornment position="end">
                                <Icon className={classes.inputIconsColor}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            ),
                            autoComplete: 'off',
                          }}
                        />
                        <Field
                          className={classes.Register__Fields}
                          component={TextField}
                          label="Phone Number"
                          name="cellphone"
                          fullWidth
                          InputProps={{
                            type: 'tel',
                            endAdornment: (
                              <InputAdornment position="end">
                                <PhoneAndroidIcon
                                  className={classes.inputIconsColor}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Field
                          className={classes.Register__Date}
                          component={TextField}
                          name="birthdate"
                          fullWidth
                          InputProps={{
                            type: 'date',
                            endAdornment: (
                              <InputAdornment position="end">
                                <DateRangeIcon
                                  className={classes.inputIconsColor}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </CardBody>
                      <CardFooter className={classes.cardFooter}>
                        <Button
                          type="submit"
                          // onClick={() => handleSubmit()}
                          color="primary"
                          size="lg"
                        >
                          Register
                        </Button>{' '}
                      </CardFooter>
                    </Form>
                  )}
                </Formik>
                <GreyText
                  to="/registerSchool"
                  className={classes.Register__School}
                >
                  Registrar como escuela
                </GreyText>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default Register;
