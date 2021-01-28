import QuestionSideBar from 'components/SideBar/QuestionSideBar';
import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Questions from 'components/Questions/Questions';

const useStyles = makeStyles(() => ({
  div_Questions: {
    marginTop: '50px',
  },
}));

function QuestionLoader() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={5}
      direction="row"
      justify="center"
      alignItems="flex-start"
    >
      <Grid item sm={2}>
        <QuestionSideBar />
      </Grid>
      <Grid
        container
        item
        sm={8}
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Questions />
      </Grid>
    </Grid>
  );
}

export default QuestionLoader;
