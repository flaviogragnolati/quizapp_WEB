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
import {QuestionsDetailSelector, QuestionsDetailStatusSelector} from 'utils/selectors'
import { useDispatch, useSelector } from "react-redux";
import { UpdateQuestion } from "views/QuizLoader/QuizLoaderSlice";


const { title, question } = infoQuizModel;

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

  
  
  const QuestionDetail = useSelector(QuestionsDetailSelector)
  const Dispatch = useDispatch()
  
  let editValues = initialState_Info
  
  const handleSubmit = (values, formik) => {
    console.log(values);
    values.id = QuestionDetail.id
    Dispatch(UpdateQuestion(values))
  };
  useEffect(() => {
  
  }, [Dispatch])
  


    if(QuestionDetail.title !== editValues.title){
      console.log( 'ENTRO AL IF',QuestionDetail)
        editValues.title = QuestionDetail.title
      editValues.question = QuestionDetail.question

    }
  const classes = useStyles();
  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={ editValues }>
        {(formik) => (
          <Form Style="display: contents;">
            <Grid item xs={5}>
              
              <TextField
                label="Title"
                name="title"
                // component={TextField}
                required
                value={formik.values.title}
                onChange={formik.handleChange}
                variant="outlined"
                // multiline
                // rowsMax={3}
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
                label="Question"
                name="question"
                // component={TextField}
                required
                value={formik.values.question}
                onChange={formik.handleChange}
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
