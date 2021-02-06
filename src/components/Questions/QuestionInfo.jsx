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
import { Field, Form, Formik } from "formik";
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


function QuestionInfo({ info, setMulti, reset }) {

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

  const [infoQuestion, setinfoQuestion] = useState({})
  const [sync, setSync] = useState(true)
  // console.log('tu vieja suelta info', info)
  // console.log('tu vieja suelta infoQuestion', infoQuestion)

  useEffect(() => {
    console.log('useEfect')
    if(sync === false){
      console.log('tu vieja en useEffect', infoQuestion)
      setSync(true)
      setinfoQuestion(info)
    }
  }, [sync])

  if(info.title !== infoQuestion.title || info.question !== infoQuestion.question){
       setSync(false)
       setinfoQuestion(info)


  }

  const classes = useStyles();
  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={ {title: infoQuestion.title, question: infoQuestion.question }}>
        {(formik) => (
          <Form Style="display: contents;">
            <Grid item xs={5}>
              
              <Field
                label="Title"
                name="title"
                component={TextField}
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
              <Field
                fullWidth
                label="Question"
                name="question"
                component={TextField}
                required
                defaultValue={infoQuestion.question}
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
