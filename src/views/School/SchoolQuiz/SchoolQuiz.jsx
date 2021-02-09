import React, { useEffect } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import List from 'components/List';
import Button from 'components/Home_MUI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getQuizList } from '../SchoolSlice';
import {
  SchoolQuizSelector,
<<<<<<< HEAD
  schoolQuizStatusSelector,
=======
  SchoolStatusSelector,
>>>>>>> c6396f7af89d3f8e7cf5088f289390e1fa5d7ede
} from 'utils/selectors';
import { userSelector } from 'utils/selectors';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const SchoolQuiz = () => {
  const dispatch = useDispatch();
  const quizes = useSelector(SchoolQuizSelector);
<<<<<<< HEAD
  const status = useSelector(schoolQuizStatusSelector);
=======
  const status = useSelector(SchoolStatusSelector);
>>>>>>> c6396f7af89d3f8e7cf5088f289390e1fa5d7ede
  const school = useSelector(userSelector)
  const classes = useStyles();
  let columnName = ['Name of Quiz', 'Subject', 'Description' ,'TRASH','TEACHER'];
  let ButtonName = ['Borrar Quiz','TEACHER'];

  useEffect(() => {
    dispatch(getQuizList({id: school.id}));
  }, [school]);

  return (
    <Container maxWidth={false}>
      <Box mt={3}>
        <h3>Listado de Quizzes</h3>
        {status === 'success' ? (
          <List
            customers={quizes}
            columnName={columnName}
            ButtonName={ButtonName}
          />
        ) : (
          <h1>Cargando</h1>
        )}
      </Box>
      <Button>Agregar + </Button>
    </Container>
  );
};

export default SchoolQuiz;