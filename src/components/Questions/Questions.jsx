import React, { useState } from 'react';
import {
  Button,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
  Box,
  TextField,
  IconButton,
} from '@material-ui/core';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';

import QuestionInfo from 'components/Questions/QuestionInfo';
import QuestionMulti from 'components/Questions/QuestionMulti';
import QuestionTF from 'components/Questions/QuestionTF';
import { useEffect } from 'react';

const questionInfo = {
  title: 'QCD - enunciado',
  description:
    'La QCD (Cromodinamica Cuantica) es una teoria que cuantica de campos que describe: (seleccionar todas las correctas)',
  answers: [
    { id: 1, text: 'Describe la interaccion atomica fuerte', correct: true },
    {
      id: 2,
      text: 'Permite entender la estructura de los Bariones',
      correct: true,
    },
    {
      id: 3,
      text: 'Define los colores que le gustan a los fisicos',
      correct: false,
    },
    { id: 4, text: 'No pertenece al modelo estandar', correct: true },
    {
      id: 5,
      text:
        'Mide los colores de las particulas subatomicas a traves de la `cara de color`',
      correct: false,
    },
  ],
  answersTF: [
    { text: 'Verdadero', correct: true },
    { text: 'Falso', correct: false },
  ],
};

const Questions = () => {
  const [multi, setMulti] = useState();
  const [multiAns, setMultiAns] = useState(questionInfo.answers);

  const handleAnsDelete = (id) => {
    setMultiAns((prevAns) => prevAns.filter((ans) => ans.id !== id));
  };

  const handleAnsAdd = () => {
    setMultiAns((prevAns) => [
      ...prevAns,
      { id: 10, text: '', correct: false },
    ]);
  };

  const handlers = {
    handleAnsDelete,
    handleAnsAdd,
  };

  // useEffect(() => {}, [multiAns]);

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h5">Los gatos de la cuantica</Typography>
        <Typography variant="subtitle1">Cuantica I</Typography>
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
        <QuestionInfo info={questionInfo} setMulti={setMulti} />
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
          multiAns.map((ans, idx) => {
            return <QuestionMulti key={idx} answer={ans} handlers={handlers} />;
          })
        ) : multi === 2 ? (
          <QuestionTF answer={questionInfo.answersTF} />
        ) : null}
      </Grid>
      {/* <Grid
        item
        container
        spacing={3}
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        gap={10}
      >

            <Grid item md={12} xs={12}>
          <Button color="primary" variant="contained">
            Agregar respuesta
          </Button>
        </Grid>
      </Grid> */}
      {/* </CardContent> */}
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
              style={{ color: 'lightblue' }}
            />
          </IconButton>
        </Grid>
      )}
    </>
  );
};
export default Questions;
