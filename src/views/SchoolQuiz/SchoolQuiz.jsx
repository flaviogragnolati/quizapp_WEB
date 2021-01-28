import React, { useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import List from '../../components/List';
import Button from 'components/Home_MUI/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const quizzes = [
  {
    id: 1,
    name: `The interpretation of Quantum Mechanics`,
    subject: 'Quantum I',
  },
  { id: 2, name: `Statistical Thermodynamics`, subject: 'Temodinamica II' },
  { id: 3, name: `Expanding Universes`, subject: 'Fisica III' },
  { id: 4, name: `My View of the World`, subject: 'Filosofia' },
  { id: 5, name: `Space-Time Structure`, subject: 'Relatividad' },
  { id: 6, name: `What Is Life? & Mind and Matter`, subject: 'Filosofia' },
];
const SchoolQuiz = () => {
  const classes = useStyles();
  let columnName = ['Name of Quiz', 'Subject', 'TRASH', ' EDIT'];
  let ButtonName = ['TRASH', 'EDIT']
  return (
    <Container maxWidth={false}>
      <Box mt={3}>
        <h3>Listado de Quizzes</h3>
        <List customers={quizzes} columnName={columnName} ButtonName={ButtonName} />
      </Box>

      <Button>+ Agregar</Button>
    </Container>
  );
};

export default SchoolQuiz;
