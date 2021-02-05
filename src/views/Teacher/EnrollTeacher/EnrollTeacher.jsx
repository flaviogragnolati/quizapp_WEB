import React, { useEffect } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import List from 'components/List';
import Button from 'components/Home_MUI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getQuizList } from 'views/School/SchoolSlice';
import {
    TeacherEnrollSelector,
    TeacherEnrollStatusSelector,
    userSelector,
} from 'utils/selectors';
import { getToEnrollList } from 'views/Teacher/TeacherSlice';
import { useParams } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

function EnrollTeacher() {
    const params = useParams();
    const dispatch = useDispatch();
    const students = useSelector(TeacherEnrollSelector);
    const status = useSelector(TeacherEnrollStatusSelector);
    const user = useSelector(userSelector);
  
    const classes = useStyles();
    let columnName = ['Nombre del Quiz', 'Description' ,'Preguntas', 'Editar','Aceptar alumnos'];
    let ButtonName = ['Editar Preguntas', 'Editar Quiz','Enrolar'];

    useEffect(() => {
      dispatch(getToEnrollList(params.id));
    }, [user]);

    return (
      <Container maxWidth={false}>
        <Box mt={3}>
          <h3>Listado de Quizzes</h3>
          {(status === 'success' && !students ? <h3>No hay alumnos por enrolar</h3> : status === 'success' ? (
            <List
              customers={students}
              columnName={columnName}
              ButtonName={ButtonName}
              User={user}
            />
          ) : <h1>Cargando</h1>
          )}
        </Box>
        <Button>+ Agregar</Button>
      </Container>
    );
  };


export default EnrollTeacher
