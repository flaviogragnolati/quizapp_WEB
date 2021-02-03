import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  TextField,
  FormHelperText,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Input,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import { infoQuizModel, initialState_Info } from "./InfoHelp";

const { title, description } = infoQuizModel;

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    // minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  QuestionInfo__select: {
    minWidth: 100,
  },
}));


function QuestionInfo({ info, setMulti }) {

  const handleChange = (event) => {
    if (event.target.value === 1) {
      setMulti(1);
    } else if (event.target.value === 2) {
      setMulti(2);
    }
  };

  const handleSubmit = (e) => {
    console.log(e);
  };

  const [infoQuestion, setinfoQuestion] = useState(info)

  useEffect(() => {
    setinfoQuestion(info)
  }, [info])


  const classes = useStyles();
  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={initialState_Info}>
        {(formik) => (
          <Form Style="display: contents;">
            <Grid item xs={5}>
              <TextField
                label="Title"
                name="title"
                required
                defaultValue={infoQuestion.title}
                variant="outlined"
                multiline
                rowsMax={3}
              />
            </Grid>
            <Grid item xs={3}>
              <FormControl>
                <InputLabel>Tipo de pregunta</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  onChange={(e) => handleChange(e)}
                >
                  <MenuItem value={1}>Multiple Opcion</MenuItem>
                  <MenuItem value={2}>Verdadero o Falso</MenuItem>
                </Select>
                <FormHelperText>
                  Elige el tipo de pregunta que deseas
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid xs={9}></Grid>
            <Grid xs={9}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                required
                defaultValue={infoQuestion.description}
                variant="outlined"
              />
            </Grid>
            <Grid xs={2}>
              <Button color="primary" variant="contained" type="submit">
                Editar Info
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default QuestionInfo;
