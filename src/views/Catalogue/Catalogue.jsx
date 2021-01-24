import React, { useState } from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import QuizzCard from 'components/QuizzCard';

import data from './data';
import Filter from './components/_Filter';
import FilterSidebar from 'views/Catalogue/components/FilterSidebar';

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
    <Grid
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="flex-start"
    >
      <Grid item sm={2}>
        <FilterSidebar />
      </Grid>
      <Grid item sm={7}>
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
    </Grid>
  );
};

export default Catalogue;
