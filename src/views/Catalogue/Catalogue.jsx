import React, { useState } from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import QuizzCard from 'components/QuizzCard';

import data from './data';
import Filter from './components/Filter';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  courseCard: {
    height: '100%',
  },
}));

const Catalogue = () => {
  const classes = useStyles();
  const [courses] = useState(data);

  return (
    <Grid>
      <Filter />
      <Container>
        <Box mt={3}>
          <Grid container spacing={3}>
            {courses.map((course) => (
              <Grid item key={course.id} lg={4} md={6} xs={12}>
                <QuizzCard className={classes.courseCard} item={course} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mt={3} display="flex" justifyContent="center">
          <Pagination color="primary" count={3} size="small" />
        </Box>
      </Container>
    </Grid>
  );
};

export default Catalogue;
