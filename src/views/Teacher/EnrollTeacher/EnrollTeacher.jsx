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
    let columnName = ['Nombre Alumno' , 'Email Alumno', 'Editar','Aceptar alumnos'];
    let ButtonName = ['Aceptar En Quiz','Rechazar'];

    useEffect(() => {
      dispatch(getToEnrollList(params.id));
    }, [user]);
    console.log(students)
    return (
      <Container maxWidth={false}>
        <Box mt={3}>
          <h2>Listado de Usuarios solicitando ser enrolados en el Quiz</h2>
          {(status === 'success' && students.length === 0 ? <h3>No hay alumnos esperando a ser agregados al Quiz</h3> : status === 'success' ? (
            <List
              customers={students}
              columnName={columnName}
              ButtonName={ButtonName}
              User={user}
            />
          ) : <h1>Cargando</h1>
          )}
        </Box>
      </Container>
    );
  };


export default EnrollTeacher
