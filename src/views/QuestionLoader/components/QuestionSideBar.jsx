import React, { useEffect, useContext, useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  Typography,
  makeStyles,
} from '@material-ui/core';
import BallotIcon from '@material-ui/icons/Ballot';
import QuestionItem from './QuestionItem';
import { QuestionsSelector } from 'utils/selectors';
import { addQuestion, updateQuestion } from 'views/QuizLoader/QuizLoaderSlice';
import { v4 as uuid } from 'uuid';
import { removeQuestion } from 'views/QuizLoader/QuizLoaderSlice';
import { IdsContext } from '../QuestionLoader';
import { convertFormikValuesToRedux } from 'utils/helpers';

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 280,
    top: 64,
    height: 'calc(100% - 64px)',
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64,
  },
}));

function QuestionSideBar(props, ref) {
  const { setQuestionId, quizDetail } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const { questionId, quizId } = useContext(IdsContext);
  const { questionInfoRef, answersContentRef } = ref;
  const questions = useSelector(QuestionsSelector);

  //recibe setId desde QuestionLoader para guardar el id en su estado local

  const handleAddQuestion = () => {
    let question = {
      id: uuid(),
      title: '',
      question: '',
      modifiedBy: 1, //traer el id del user, por ahora hardcordeado
      createdBy: 1, //idem modifiedby
      Answers: [{ id: uuid(), text: '', correct: false }],
      QuizId: quizId,
      type: 1,
    };
    const questionData = {
      info: questionInfoRef.current.values,
      answers: convertFormikValuesToRedux(answersContentRef.current.values),
      questionId,
    };
    dispatch(updateQuestion(questionData));
    dispatch(addQuestion({ question }));
    // dispatch(CreateQuestion(Question));
  };

  const handleDeleteQuestion = (id) => {
    const questionData = {
      info: questionInfoRef.current.values,
      answers: convertFormikValuesToRedux(answersContentRef.current.values),
      questionId,
    };
    dispatch(updateQuestion(questionData));
    dispatch(removeQuestion(id));
    // dispatch(deleteQuestion(id));
  };

  const updateAll = (questions) => {};

  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar className={classes.avatar} src={quizDetail.logo} />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {quizDetail.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {quizDetail.Subject.name}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List component={'ol'}>
          {questions &&
            questions.map((question, idx) => (
              <QuestionItem
                key={question.title}
                title={`${idx + 1} ${question.title}`}
                icon={BallotIcon}
                ref={ref}
                setQuestionId={setQuestionId} // se le pasa setId para objener desde dentro el id de la pregunta
                handleDeleteQuestion={handleDeleteQuestion}
                id={question.id}
              />
            ))}
        </List>
      </Box>
      <Box
        p={2}
        m={2}
        display="flex"
        flexGrow="1"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Button
          color="primary"
          size="small"
          variant="contained"
          onClick={handleAddQuestion}
        >
          Añadir pregunta
        </Button>
        <Button
          color="secondary"
          size="small"
          variant="contained"
          onClick={handleAddQuestion}
        >
          Guardar Todo
        </Button>
      </Box>
    </Box>
  );
}

QuestionSideBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

QuestionSideBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

QuestionSideBar = forwardRef(QuestionSideBar);
export default QuestionSideBar;
