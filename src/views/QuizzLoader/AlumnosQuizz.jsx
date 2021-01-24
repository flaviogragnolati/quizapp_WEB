import React, { useState } from 'react';
import { Box, Container, makeStyles } from "@material-ui/core";
import List from "../../components/List";
import array from "./data";
import Button from "components/Home_MUI/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

export default function AlumnosQuizz() {
  const [customers] = useState(array);
  let columnName = ["Name", "Email", "Location", "Phone", "Registration Date"];
  return (
    <React.Fragment>
      <Container >
        <Box mt={3}>
          <h3>Listado de Alumnos</h3>
          <List customers={customers} columnName={columnName} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
