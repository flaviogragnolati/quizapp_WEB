import React, { useEffect, useState } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
// @material-ui/icons
import Icon from '@material-ui/core/Icon';
import Email from '@material-ui/icons/Email';
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import LoginHeader from 'components/Form/LoginHeader';

import styles from 'assets/jss/material-kit-react/views/loginPage.js';

import {
  registerModel,
  initialState_Login,
  loginValidationSchema,
} from 'utils/forms/register';
import { TextField } from 'formik-material-ui';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from 'store/rootReducer';
import { localLogin } from 'components/Auth/authSlice';
import { userSelector } from 'utils/selectors';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(styles);
const image =
  'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';

function Login(props) {
  const { email, password } = registerModel;
  const dispatch = useDispatch();
  const [cardAnimaton, setCardAnimation] = useState('cardHidden');
  const user = useSelector(userSelector);
  const History = useHistory();

  setTimeout(function () {
    setCardAnimation('');
  }, 700);

  useEffect(() => {
    if (user.id) {
      History.push(`/profile/${user.id}`);
    }
  }, [user]);

  const classes = useStyles();

  const handleSubmit = (values, formik) => {
    dispatch(localLogin(values));
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
            <GridItem xs={12} sm={12} md={8}>
              <Card className={classes[cardAnimaton]}>
                <LoginHeader />
                <p className={classes.divider}>Or Be Classical</p>
                <Formik
                  onSubmit={handleSubmit}
                  initialValues={initialState_Login}
                  validationSchema={loginValidationSchema}
                >
                  {(formik) => (
                    <Form>
                      <CardBody>
                        <Field
                          className={classes.Register__Fields}
                          component={TextField}
                          name={email.name}
                          label={email.label}
                          fullWidth
                          color="secondary"
                          InputProps={{
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
                          name={password.name}
                          label={password.label}
                          fullWidth
                          InputProps={{
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
                      </CardBody>
                      <CardFooter className={classes.cardFooter}>
                        <Button color="primary" size="lg" type="submit">
                          Login
                        </Button>
                      </CardFooter>
                    </Form>
                  )}
                </Formik>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default Login;
