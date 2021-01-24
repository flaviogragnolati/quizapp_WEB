import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
}));

const Questions = () => {
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const [values, setValues] = useState({
    title: "Pregunta 1",
    description: "xxxxxxxxxxxx xxxxxx xxxxxx xxxxxx xxxxxx",
    answers: [
      {
        text: "opcion1",
        correct: true,
      },
      {
        text: "opcion2",
        correct: false,
      },
      {
        text: "opcion3",
        correct: false,
      },
      {
        text: "opcion4",
        correct: true,
      },
      {
        text: "opcion5",
        correct: false,
      },
    ],
  });
  return (
    <>
      <CardHeader subheader="The information can be edited" title="Quizz" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              onChange={handleChange}
              required
              value={values.title}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6}></Grid>
          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              onChange={handleChange}
              required
              value={values.description}
              variant="outlined"
            />
          </Grid>
          {values.answers.map((answer, i) => {
            return (
              <>
                <Grid item md={8} xs={12}>
                  <TextField
                    fullWidth
                    label={`Answer ${i}`}
                    name={`answer ${i}`}
                    onChange={handleChange}
                    required
                    value={answer.text}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={1} xs={12}>
                  <Button color="primary" variant="contained">
                    {answer.correct ? "Correcta" : "Incorrecta"}
                  </Button>
                </Grid>
                <Grid item md={1} xs={12}>
                  <Button color="primary" variant="contained">
                    Eliminar Pregunta
                  </Button>
                </Grid>
              </>
            );
          })}
          <Grid item md={12} xs={12}>
            <Button color="primary" variant="contained">
              Agregar respuesta
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
};

export default Questions;
