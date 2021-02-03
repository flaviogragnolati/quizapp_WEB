import QuestionSideBar from "components/SideBar/QuestionSideBar";
import React, { useEffect, useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Questions from "components/Questions/Questions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllQuestions } from "views/QuizLoader/QuizLoaderSlice";

import { QuestionsSelector } from "utils/selectors";
import { QuestionsStatusSelector } from "utils/selectors";
const useStyles = makeStyles(() => ({
  div_Questions: {
    marginTop: "50px",
  },
}));

function QuestionLoader() {
  const Dispatch = useDispatch();
  const questions = useSelector(QuestionsSelector);
  const questionsStatus = useSelector(QuestionsStatusSelector);
  const params = useParams();

  const [questionId, setQuestionId] = useState(0);
  useEffect(() => {
    Dispatch(getAllQuestions(params.id));
  }, []);
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={5}
      direction="row"
      justify="center"
      alignItems="flex-start"
    >
      <Grid item sm={2}>
        <QuestionSideBar questions={questions} setId={setQuestionId}/>
      </Grid>
      <Grid
        container
        item
        sm={8}
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Questions question={questions.find((question) => question.id === questionId )} />
      </Grid>
    </Grid>
  );
}

export default QuestionLoader;
