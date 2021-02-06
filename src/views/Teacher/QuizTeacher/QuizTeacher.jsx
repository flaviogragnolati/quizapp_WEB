import React, { useEffect } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import List from 'components/List';
import Button from 'components/Home_MUI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getQuizList } from 'views/School/SchoolSlice';
import {
    TeacherQuizSelector,
    TeacherQuizStatusSelector,
    userSelector,
} from 'utils/selectors';
import { getQuizesTeacher } from 'views/Teacher/TeacherSlice';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));


function QuizTeacher() {
  const dispatch = useDispatch();
  const quizes = useSelector(TeacherQuizSelector);
  const status = useSelector(TeacherQuizStatusSelector);
  const user = useSelector(userSelector);

  const classes = useStyles();
  let columnName = ['Nombre del Quiz', 'Description' ,'Preguntas', 'Editar','Aceptar alumnos'];
  let ButtonName = ['Editar Preguntas', 'Editar Quiz','Enrolar'];

  useEffect(() => {
    dispatch(getQuizesTeacher(user.id));
  }, [user]);

  return (
    <Container maxWidth={false}>
      <Box mt={3}>
        <h3>Listado de Quizzes</h3>
        {status === 'success' ? (
          <List
            customers={quizes}
            columnName={columnName}
            ButtonName={ButtonName}
            User={user}
          />
        ) : (
          <h1>Cargando</h1>
        )}
      </Box>
    </Container>
  );
};

export default QuizTeacher
