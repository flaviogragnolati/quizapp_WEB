import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Account from '../../components/Account';
import ProfileDetails from '../../components/ProfileDetail';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const QuizProfile = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <Account quiz={true} />
        </Grid>
        <Grid item lg={8} md={6} xs={12}>
          <ProfileDetails profile="quiz" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default QuizProfile;
