import React, { useState } from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import AddCircleOutlineTwoToneIcon from "@material-ui/icons/AddCircleOutlineTwoTone";

import QuestionInfo from "components/Questions/QuestionInfo";
import QuestionMulti from "components/Questions/QuestionMulti";
import QuestionTF from "components/Questions/QuestionTF";
import { ACTIONS } from "store/rootReducer";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {QuestionDetailSelector, QuestionDetailAnswersSelector, QuestionStatusSelector} from 'utils/selectors'
import { UpdateAnswers, DeleteAnswers, getAllQuestions } from "views/QuizLoader/QuizLoaderSlice";
import { CreateAnswers } from "views/QuizLoader/QuizLoaderSlice";
import { useParams } from "react-router-dom";

const questionInfo = {
  title: "QCD - enunciado",
  description:
    "La QCD (Cromodinamica Cuantica) es una teoria que cuantica de campos que describe: (seleccionar todas las correctas)",
  answers: [
    { id: 1, text: "Describe la interaccion atomica fuerte", correct: true },
    {
      id: 2,
      text: "Permite entender la estructura de los Bariones",
      correct: true,
    },
    {
      id: 3,
      text: "Define los colores que le gustan a los fisicos",
      correct: false,
    },
    { id: 4, text: "No pertenece al modelo estandar", correct: true },
    {
      id: 5,
      text:
        "Mide los colores de las particulas subatomicas a traves de la `cara de color`",
      correct: false,
    },
  ],
  answersTF: [
    { text: "Verdadero", correct: true },
    { text: "Falso", correct: false },
  ],
};

const Questions = ({ question, reset }) => {

  // recibe question que es el estado filtrado sincronamente. contiene el detalle de la pregunta y las respuestas
  const QuestionDetail = useSelector(QuestionDetailSelector)
  const QuestionStatus = useSelector(QuestionStatusSelector);
  const Answers = useSelector(QuestionDetailAnswersSelector)
  const [multi, setMulti] = useState();
  const [multiAns, setMultiAns] = useState(Answers);
  const [boolean,SetBoolean] = useState(false);
  const params = useParams();

  const Dispatch =  useDispatch()
  const handleAnsDelete = (id) => {
    console.log(id)
     Dispatch(DeleteAnswers(id)).then(()=>{
      Dispatch(getAllQuestions(params.id));

    })
    // setMultiAns((prevAns) => prevAns.filter((ans) => ans.id !== id));
  };

  const handleAnsAdd = () => {
    setMultiAns((prevAns) => [
      ...prevAns,
      { id: 'prueba', text: "", correct: boolean },
    ]);
    //creo una nueva respuesta con un texto por defecto
    Dispatch(CreateAnswers({ QuestionId:QuestionDetail.id, text:'escribe tu respuesta', correct:boolean})).then(()=>{
      Dispatch(getAllQuestions(params.id));

    })
  };

  const handleUpdate = (id)=>{
    let text =  document.getElementById(id).value
    //modifica la respuesta
    Dispatch(UpdateAnswers({text,id,correct:boolean})).then(()=>{
      Dispatch(getAllQuestions(params.id));

    })
  }
console.log('tengo mest6',boolean)
  const handlers = {
    handleAnsDelete,
    handleAnsAdd,
    handleUpdate,
  };
   useEffect(() => {
     if(question){

       setMultiAns(question)
          Dispatch(ACTIONS.quizLoader.setQuestionDetail(question))
        setMultiAns(Answers)
     }
   }, [question]);


  return (
    <>
      <Grid item xs={12}>
        <Typography Style="margin: 20px 0px;" variant="h4">
          Edita la Pregunta
        </Typography>
      </Grid>
      {/* <CardHeader subheader="Cuantica I" title="Los gatos de la cuantica" /> */}
      {/* <CardContent> */}
      <br></br>
      <Grid
        item
        container
        xs={12}
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        { QuestionDetail ? <QuestionInfo info={question} setMulti={setMulti}  reset={reset} /> : null}
      </Grid>
      <Grid
        item
        container
        xs={12}
        gap={10}
        direction="row"
        justify="space-between"
        alignItems="center"
      >

        {multi === undefined ? null : multi === 1 ? (
          console.log(multiAns),
          Answers.map((ans, idx) => {
        //le pasa handlers a con las acciones para disparar. 
        //SetBoolean es para obtener el valor true/false de correct y setearlo en el handlerUpdate
            return <QuestionMulti key={idx} answer={ans} SetBoolean={SetBoolean} handlers={handlers} />;
          })
        ) : multi === 2 ? (
          <QuestionTF answer={questionInfo.answersTF} />
        ) : null}
      </Grid>
      {multi === 1 && (
        <Grid
          item
          container
          xs={12}
          direction="row"
          justify="flex-end"
          alignItems="flex-end"
        >
          <IconButton onClick={handleAnsAdd}>
            <AddCircleOutlineTwoToneIcon
              fontSize="large"
              style={{ color: "lightblue" }}
            />
          </IconButton>
        </Grid>
      )}
    </>
  );
};
export default Questions;
