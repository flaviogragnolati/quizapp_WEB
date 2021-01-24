import QuestionSideBar from "components/SideBar/QuestionSideBar";
import React from "react";
import { makeStyles } from '@material-ui/core';
import Questions from "components/Questions/Questions";



const useStyles = makeStyles(() => ({
    div_Questions: {
        marginLeft: '256px',
    }
  }));

function QuestionLoader() {
const classes = useStyles();
  return (
    <>
      <QuestionSideBar />
      <div className={classes.div_Questions}>
        <Questions />
      </div>
    </>
  );
}

export default QuestionLoader;
