import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Button,
  TextField,
} from '@material-ui/core';
import List from '../../components/List';
import { fakeUsers, studentList } from './data';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  container: {
    whidth: '80%',
    paddingLeft: '0',
    paddingRight: '0',
  },
}));

export default function AlumnosQuiz() {
  const [students] = useState(fakeUsers);
  const classes = useStyles();
  let columnName = ['Name', 'Email', 'Location', 'Phone', 'Registration Date'];
  return (
    <React.Fragment>
      <Container>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <div className={classes.root}>
            <Autocomplete
              multiple
              limitTags={2}
              id="multiple-limit-tags"
              options={studentList}
              fullWidth
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Buscar"
                  placeholder="Alumnos"
                />
              )}
            />
          </div>
          <Button variant="container" color="primary" size="small">
            Enrolar seleccionados
          </Button>
        </Box>
      </Container>
      <Container className={classes.container}>
        <Box mt={3} width={1}>
          <h3>Listado de Alumnos</h3>
          <List customers={students} columnName={columnName} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
