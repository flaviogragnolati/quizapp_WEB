import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import QuizCard from 'components/QuizzCard';

import data from './data';
import FilterSidebar from 'views/Catalogue/components/FilterSidebar';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalogue } from './catalogueSlice';
import { catalogueStatusSelector } from 'utils/selectors';
import { allCatalogueSelector } from 'utils/selectors';
import BackdropLoading from 'components/Loading/BackdropLoading';

const useStyles = makeStyles((theme) => ({
  courseCard: {
    height: '100%',
  },
}));

const CatalogueSection = styled.section`
  margin-top: 5rem;
  background-color: ${(p) => p.theme.palette.background.default};
`;

const Catalogue = () => {
  const dispatch = useDispatch();
  const catStatus = useSelector(catalogueStatusSelector);
  const cat = useSelector(allCatalogueSelector);
  const classes = useStyles();

  useEffect(() => {
    if (catStatus === 'idle') {
      dispatch(getCatalogue());
    }
  }, [catStatus, dispatch]);
  let content;

  if (catStatus === 'pending') {
    content = <BackdropLoading />;
  } else if (catStatus === 'success') {
    content = cat.quizzes.byId.map((quiz, idx) => (
      <Grid item key={quiz.id} lg={4} md={6} xs={10}>
        <QuizCard className={classes.courseCard} quiz={quiz} />
      </Grid>
    ));
  } else if (catStatus === 'error') {
    content = <h1>ha ocurrido un error</h1>;
  }

  return (
    <CatalogueSection>
      <Grid
        container
        spacing={8}
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item sm={3}>
          <FilterSidebar />
        </Grid>
        <Grid container item sm={7}>
          <Box mt={3}>
            <Grid container spacing={3}>
              {content}
              {/* {data.map((course) => (
                <Grid item key={course.id} lg={4} md={6} xs={12}>
                  <QuizzCard className={classes.courseCard} item={course} />
                </Grid>
              ))} */}
            </Grid>
          </Box>
          <Box mt={3} display="flex" justifyContent="center">
            <Pagination color="primary" count={5} size="small" />
          </Box>
        </Grid>
      </Grid>
    </CatalogueSection>
  );
};

export default Catalogue;
