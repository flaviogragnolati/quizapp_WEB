import React, { useState } from "react";
import {
  Button,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  //   makeStyles,
} from "@material-ui/core";
import QuestionInfo from "components/Questions/QuestionInfo";
import QuestionMulti from "components/Questions/QuestionMulti";
import QuestionTF from "components/Questions/QuestionTF";

// const useStyles = makeStyles(() => ({
//   root: {},
// }));

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
      { text: "verdadero", correct: true },
      { text: "falso", correct: false },
      { text: "opcion3", correct: false },
      { text: "opcion4", correct: true },
      { text: "opcion5", correct: false },
    ],
    answersTF: [
      { text: "verdadero", correct: true },
      { text: "falso", correct: false },
    ],
  });



  const [multi, setmulti] = useState();
  
  let aPasar = {
    title: values.title,
    description: values.description,
    setmulti,
  }

  return (

    <>
      <CardHeader subheader="The information can be edited" title="Quizz" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <QuestionInfo info={aPasar} />


          {
          multi === undefined ? null : 
          multi === 1 ? values.answers.map((info, i) => {
            return <QuestionMulti answer={{ info: info, i: i }} />;
          })  : 
          multi === 2 ? <QuestionTF answer={values.answersTF} /> : null
}

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
