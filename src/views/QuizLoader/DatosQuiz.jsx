import React from "react";
import Grid from "@material-ui/core/Grid";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import { quizModel } from "./quizLoderHelpers";
import {
  Typography,
  Button,
  Container,
} from "@material-ui/core";
// import { quizModel } from './quizLoderHelpers';
import { Formik, Form } from "formik";
import { initialState_Quiz } from "./quizLoderHelpers";
const { nameQuiz, descripcion, tags, materia } = quizModel;

export default function DatosQuiz() {
  const handleSubmit = (values, formik) => {
    // aca despachar la accion a la api
    console.log("submit", values);
    // return localStorage.removeItem('form')
  };

  return (
      <Container>
      <Typography variant="h6" gutterBottom>
        Informacion general Quizz
      </Typography>
      <Formik 
      onSubmit={handleSubmit} initialValues={initialState_Quiz}>
        {(formik) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  name={nameQuiz.name}
                  label={nameQuiz.label}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  name={descripcion.name}
                  label={descripcion.label}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  name={tags.name}
                  label={tags.label}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  name={materia.name}
                  label={materia.label}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              // className={classes.button}
              type="submit"
            >
              Submit Quiz
            </Button>
          </Form>
        )}
      </Formik>
      </Container>
  );
}
