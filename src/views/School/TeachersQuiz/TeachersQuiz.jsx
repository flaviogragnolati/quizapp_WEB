import React, { useEffect, useState } from 'react';
import { Box, Container, Link, makeStyles } from '@material-ui/core';
import List from 'components/List';

import Button from 'components/Home_MUI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector, SchoolTeachersSelector } from 'utils/selectors';
import { getTeachersQuiz } from 'views/School/SchoolSlice';
import { SchoolStatusSelector } from 'utils/selectors';
import BackdropLoading from 'components/Loading/BackdropLoading';
import { useHistory } from 'react-router-dom';


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

  const statusSchool = useSelector(SchoolStatusSelector)
  const teachers = useSelector(SchoolTeachersSelector)
  const columnName = ['Name', 'Apellido', 'Correo Electronico', ];
  const propsNames=['firstName','lastName','email']
  const dispatch = useDispatch()
  const school = useSelector(userSelector)
  const history  = useHistory()
  
  return (
    <Container maxWidth={false}>
      {statusSchool === "success" ? 
      <Box mt={3}>
        <h3>Listado de Profesores de este Quiz</h3>
        {teachers.length === 0 ? <h2>No hay Profesores en este Quiz,puedes cargar profesores en el listado de Quizes</h2> :<List customers={teachers} columnName={columnName} propsNames={propsNames} />}
      </Box> : statusSchool === undefined ? <><h2>403 forbidden</h2><Button onClick={() =>history.push('/')} >Regresar al Inicio</Button></> : <BackdropLoading/>}

    </Container>
  );
};

export default TeachersQuiz;
