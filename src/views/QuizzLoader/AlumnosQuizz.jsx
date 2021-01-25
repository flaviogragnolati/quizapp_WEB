import React, { useState } from 'react';
import { Box, Container, makeStyles } from "@material-ui/core";
import List from "../../components/List";
import array from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  container:{
    whidth:'80%',
    paddingLeft:'0',
    paddingRight:'0'

  }
}));

export default function AlumnosQuizz() {
  const [customers] = useState(array);
  const classes = useStyles();
  let columnName = ["Name", "Email", "Location", "Phone", "Registration Date"];
  return (
    <React.Fragment>
      <Container className={classes.container}>
        <Box mt={3} width={1} >
          <h3>Listado de Alumnos</h3>
          <List customers={customers} columnName={columnName}  />
        </Box>
      </Container>
    </React.Fragment>
  );
}
