import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Field } from "formik";
import { SimpleFileUpload, TextField } from "formik-material-ui";
import { subjectModel } from "./quizLoderHelpers";
import { Typography, Button, Container, FormControl } from "@material-ui/core";
import { Formik, Form } from "formik";
import { initialState_Subjects } from "./quizLoderHelpers";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { createSubject } from "../SchoolSlice";
import { useHistory, useParams } from "react-router-dom";
import { SchoolSubjectSelector, SchoolStatusSelector } from 'utils/selectors';
import { editSubject } from "../SchoolSlice";
import { userSelector } from "utils/selectors";

const { name, description } = subjectModel;


export default function SubjectLoader() {
  const dispatch = useDispatch();
  const datos = useParams();
  const subjects = useSelector(SchoolSubjectSelector)
  const subjectsStatus = useSelector(SchoolStatusSelector)
  const school = useSelector(userSelector)
  const History= useHistory()

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
    if (subjects !== undefined && datos.id) {
      values.id = datos.id
      dispatch(editSubject(values))
      .this(
        History.push('/school-subject')
      );
    } else {
      values.SchoolId = school.id
      dispatch(createSubject(values))
      .this(
        History.push('/school-subject')
      );

    }
  };


  let editValues = initialState_Subjects
  
  if (subjectsStatus === 'success' && subjects[0] != undefined && datos.id) {
    editValues = {
      [name.name]:subjects.find((e) => e.id == datos.id).name,
      [description.name]: subjects.find((e) => e.id == datos.id).description,
    };
  }

  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Cargar Materias
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={editValues}>
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
