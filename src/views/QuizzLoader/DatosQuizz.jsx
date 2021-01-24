import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { checkoutFields } from './checkoutHelpers';

const {
    nameQuizz,
    descripcion,
    categoria,
    materia,
  } = checkoutFields;


export default function DatosQuizz() {
    
    return (
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Informacion general Quizz
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Field
                component={TextField}
                name={nameQuizz.name}
                label={nameQuizz.label}
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
                name={categoria.name}
                label={categoria.label}
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
        </React.Fragment>
      );
    }
    