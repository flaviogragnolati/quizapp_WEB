import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { Field, Form, Formik, useFormikContext } from 'formik';
import {
  questionLoaderModel,
  initialState_questionLoader,
} from 'utils/forms/questionLoader';
import { QuestionDetailSelector } from 'utils/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateQuestion } from 'views/QuizLoader/QuizLoaderSlice';
import { TextField } from 'formik-material-ui';
import styled from 'styled-components';

const { title: titleModel, question: questionModel } = questionLoaderModel;

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

function QuestionInfo(props, ref) {
  const { title, question } = props;
  const dispatch = useDispatch();
  // const questionInfoRef = useRef(null);

  // useImperativeHandle(
  //   ref,
  //   () => {
  //     return questionInfoRef.current.values;
  //   },
  //   [questionInfoRef]
  // );

  // const handleSubmit = (values, formik) => {
  //   console.log(values);
  //   values.id = 1; //QuestionDetail.id; hardcodeado por ahora, conviene pasar id por props???
  //   dispatch(UpdateQuestion(values));
  // };

  const initialValues = {
    title,
    question,
  };
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      innerRef={ref}
    >
      <Form Style="display: contents;">
        <Grid item xs={5}>
          <Field
            name={titleModel.name}
            component={TextField}
            label={titleModel.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={8}>
          <Field
            name={questionModel.name}
            component={TextField}
            label={questionModel.label}
            multiline
            fullWidth
            rowsMax={3}
          />
        </Grid>
        <Grid xs={2}>
          <Button color="primary" variant="contained" type="submit">
            Editar Info
          </Button>
        </Grid>
      </Form>
    </Formik>
  );
}

QuestionInfo = forwardRef(QuestionInfo);

export default QuestionInfo;
