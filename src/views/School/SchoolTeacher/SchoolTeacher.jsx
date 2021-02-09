import React, { useEffect, useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import List from 'components/List';
import array from './data';
import Button from 'components/Home_MUI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getTeachersSchool } from 'views/School/SchoolSlice';
import { userSelector } from 'utils/selectors';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const SchoolTeacher = () => {
  // const classes = useStyles();


  // en este componente se deberia poder quitar un teacher de una quiz???
  // deberia tener un enlace al perfil del teacher??
  //la informacion que devuelve la api son solo IdQuiz y idUser, deberia recibir:
  //nombre de usuario.
  //nombre del quiz.
  //nombre del subject.
  // cantidad de alumnos???
  // reviews???
  const [customers] = useState(array);
  const columnName = ['Name', 'Subject', 'Quiz', 'Review', 'Alumnos' ];
  const propsNames=['name','subject','quiz','review', 'alumnos']
  const dispatch = useDispatch()
  const school = useSelector(userSelector)

  useEffect(() => {
    dispatch(getTeachersSchool({SchoolId:school.id}))
  }, [school])

  return (
    <Container maxWidth={false}>
      <Box mt={3}>
        <h3>Listado de Teachers</h3>
        <List customers={customers} columnName={columnName} propsNames={propsNames} />
      </Box>
      <Button>+ Agregar</Button>
    </Container>
  );
};

export default SchoolTeacher;
