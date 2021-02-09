import React, { useEffect, useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import List from 'components/List';

import Button from 'components/Home_MUI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector, SchoolTeachersSelector } from 'utils/selectors';
import { getTeachersQuiz } from 'views/School/SchoolSlice';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const TeachersQuiz = () => {
  // const classes = useStyles();
 // en este componente se deberia poder quitar un teacher de una quiz???
  // deberia tener un enlace al perfil del teacher??
  //la informacion que devuelve la api son solo IdQuiz y idUser, deberia recibir:
  //nombre de usuario.
  //nombre del quiz.
  //nombre del subject.
  // cantidad de alumnos???
  // reviews???

  const teachers = useSelector(SchoolTeachersSelector)
  const columnName = ['Name', 'Apellido', 'Correo Electronico', ];
  const propsNames=['firstName','lastName','email']
  const dispatch = useDispatch()
  const school = useSelector(userSelector)

  return (
    <Container maxWidth={false}>
      <Box mt={3}>
        <h3>Listado de Teachers de este Quiz</h3>
        <List customers={teachers} columnName={columnName} propsNames={propsNames} />
      </Box>
      <Button>+ Agregar</Button>
    </Container>
  );
};

export default TeachersQuiz;
