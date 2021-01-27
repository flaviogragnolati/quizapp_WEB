import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Typography,
  StepLabel,
  Paper,
  Stepper,
  Box,
  Step,
  Button,
} from '@material-ui/core';
import DatosQuiz from './DatosQuiz';
import AlumnosQuiz from './AlumnosQuiz';
import Review from './Review';
// import { quizModel } from './quizLoderHelpers';
import { Formik, Form } from 'formik';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Datos Quiz', 'Alumnos Quiz', 'Review de Quiz'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <DatosQuiz />;
    case 1:
      return <AlumnosQuiz />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function QuizLoader() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Quiz Loader
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  El Proceso a finalizado
                </Typography>
                <Typography variant="subtitle1">
                  La quiz a sido creada, finaliza el proceso agregandole
                  preguntas y respuestas
                </Typography>
                <br></br>
                <Box display="flex" flexDirection="row" justifyContent="center">
                  <Button component={Link} to="/school-quiz">
                    Editar el Quizz
                  </Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Formik>
                  {(formik) => (
                    <Form>
                      {getStepContent(activeStep)}
                      <div className={classes.buttons}>
                        {activeStep !== 0 && (
                          <Button
                            onClick={handleBack}
                            className={classes.button}
                          >
                            Back
                          </Button>
                        )}
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1
                            ? 'Submit Quiz'
                            : 'Next'}
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}