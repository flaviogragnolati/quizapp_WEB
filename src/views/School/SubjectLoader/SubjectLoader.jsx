import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Field } from "formik";
import { SimpleFileUpload, TextField } from "formik-material-ui";
import { subjectModel } from "./quizLoderHelpers";
import { Typography, Button, Container, FormControl } from "@material-ui/core";
import { Formik, Form } from "formik";
import { initialState_Subjects } from "./quizLoderHelpers";
import { useDispatch } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { createSubject } from "../SchoolSlice";




const { name, description } = subjectModel;

export default function SubjectLoader() {
  const dispatch = useDispatch();

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));

  const handleSubmit = (values, formik) => {
    console.log('submit', values);
    dispatch(createSubject(values));
  };

  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Cargar Materias
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialState_Subjects}>
        {(formik) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  name={name.name}
                  label={name.label}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  name={description.name}
                  label={description.label}
                  fullWidth
                />
              </Grid>
              <FormControl></FormControl>
            </Grid>
            <Button variant="contained" color="primary" type="submit">
              {' '}
              Subir Materia{' '}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
