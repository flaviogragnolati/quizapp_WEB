import React, { useEffect, useState } from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import QuizCard from 'components/QuizCard';

import FilterSidebar from 'views/Catalogue/components/FilterSidebar';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalogue } from './catalogueSlice';
import { catalogueStatusSelector } from 'utils/selectors';
import {
  catalogueEntitiesSelector,
  catalogueResultSelector,
  catalogueFilterSelector,
} from 'utils/selectors';
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

const qtyToDisplay = 6; //variable para definir la cantidad de `quiz cards` que se muestran por pagina del catalogo

const Catalogue = () => {
  const dispatch = useDispatch();

  const catStatus = useSelector(catalogueStatusSelector);
  const entities = useSelector(catalogueEntitiesSelector);
  const filter = useSelector(catalogueFilterSelector);

  const quizList = useSelector((state) =>
    catalogueResultSelector(state, filter)
  );
  const classes = useStyles();

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (catStatus === 'idle') {
      dispatch(getCatalogue());
    }
  }, [catStatus, dispatch]);
  let content;

  if (catStatus === 'pending') {
    content = <BackdropLoading />;
  } else if (catStatus === 'success') {
    if (quizList.length < 1) {
      content = <h3>No hay cursos que se ajusten a ese criterio</h3>;
    } else {
      content = quizList
        .slice(
          (page - 1) * qtyToDisplay,
          (page - 1) * qtyToDisplay + qtyToDisplay
        )
        .map((quizId, idx) => (
          <Grid item key={entities.quizzes[quizId].id} lg={4} md={6} xs={10}>
            <QuizCard
              className={classes.courseCard}
              quiz={entities.quizzes[quizId]}
            />
          </Grid>
        ));
    }
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
            </Grid>
          </Box>
          <Grid item container>
            <Box mt={10}>
              <Pagination
                color="secondary"
                variant="outlined"
                shape="rounded"
                size="large"
                showFirstButton
                showLastButton
                count={Math.ceil(quizList.length / qtyToDisplay)}
                page={page}
                onChange={handleChange}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </CatalogueSection>
  );
};

export default Catalogue;
