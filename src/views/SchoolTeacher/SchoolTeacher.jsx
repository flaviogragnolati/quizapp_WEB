import React, { useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import List from '../../components/List';
import array from './data';
import Button from 'components/Home_MUI/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const SchoolTeacher = () => {
  const classes = useStyles();
  const [customers] = useState(array);
  let columnName = ['Name', 'Subject', 'Quiz', 'Review', 'Alumnos' ];
  return (
    <Container maxWidth={false}>
      <Box mt={3}>
        <h3>Listado de Teachers</h3>
        <List customers={customers} columnName={columnName} />
      </Box>

      <Button>+ Agregar</Button>
    </Container>
  );
};

export default SchoolTeacher;
