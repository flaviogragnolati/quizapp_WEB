import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Field } from 'formik';
import { SimpleFileUpload, TextField } from 'formik-material-ui';
import { quizModel } from './quizLoderHelpers';
import {
  Typography,
  Button,
  Container,
  FormControl,
  InputLabel,
  Select,
  Input,
  Chip,
  MenuItem,
} from '@material-ui/core';
// import { quizModel } from './quizLoderHelpers';
import { Formik, Form } from 'formik';
import { initialState_Quiz } from './quizLoderHelpers';
import { useDispatch, useSelector } from 'react-redux';
import { CreateQuiz } from './QuizLoaderSlice';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { getSubjectsList } from "views/School/SchoolSlice";

import {SchoolSubjectSelector, SchoolStatusSelector} from "utils/selectors"
const { nameQuiz, descripcion, Logo, materia } = quizModel;
export default function DatosQuiz() {
  const Dispatch= useDispatch()
  const subjects = useSelector(SchoolSubjectSelector);
  const subjectsStatus = useSelector(SchoolStatusSelector)
  const [personName, setPersonName] = React.useState('');
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

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

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };
  const handleSubmit = (values, formik) => {
    values.SubjectId = personName
    Dispatch(CreateQuiz(values));
  };

    useEffect(()=>{
        Dispatch(getSubjectsList())
    },[])
    
  // let {
  //   name,
  //   description,
  // URL,
  //userId,
  //   SubjectId,
  //   SchoolId,
  // } = req.body;

  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Informacion general Quizz
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialState_Quiz}>
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
              {/* <Grid item xs={12} sm={6}>
                <Field
                  component={SimpleFileUpload}
                  name={Logo.name}
                  label={Logo.label}
                />
              </Grid> */}
              <Grid item xs={12} sm={6}>
                <Field component={TextField} name="logo" label="URl" />
              </Grid>
              <Container Style="padding: 12px;">
                <FormControl >
                  <InputLabel id="demo-mutiple-chip-label" fullWidth>
                    Selecciona una Materia
                  </InputLabel>
                  <Select
                  Style="min-width: 180px;"
                    labelId="demo-mutiple-chip-label"
                    id="demo-mutiple-chip"
                    value={personName}
                    onChange={handleChange}
                    input={<Input id="select-multiple-chip" />}
                    // renderValue={(selected) => (
                    //   <div >
                    //     {selected.map((value) => (
                    //       <Chip key={value} label={value}  />
                    //     ))}
                    //   </div>
                    // )}
                    MenuProps={MenuProps}
                  >
                    {!!subjects &&
                      subjects.map((subject) => (
                        <MenuItem key={subject.id} value={subject.id}>
                          {subject.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Container>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              // className={classes.button}
              type="submit"
              Style="margin: 26px 0px;"
            >
              Submit Quiz
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
