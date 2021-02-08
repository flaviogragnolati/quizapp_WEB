import React, { useEffect, useState } from 'react';
import DualButton from '../DualButton/index';
import {
  Box,
  Button,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  IconButton,
  //   makeStyles,
} from '@material-ui/core';
import SyncRoundedIcon from '@material-ui/icons/SyncRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import TrueFalse from '../TrueFalse/index';
import { useSelector } from 'react-redux';
import { QuestionStatusSelector } from 'utils/selectors';

function QuestionMulti({
  answer,
  SetBoolean,
   QuestionId,
    handlers: { handleAnsDelete, handleAnsAdd, handleUpdate, },
}) {
  const QuestionStatus = useSelector(QuestionStatusSelector)
   useEffect(()=>{
      console.log('RENDERIZANDO RESPUESTAS')
   },[QuestionStatus])
  return (
    <>
      <Grid item md={8} xs={12}>
        <TextField
        id={answer.id}
          fullWidth
          label={`Answer ${answer.id}`}
          name={`answer ${answer.id}`}
          // onChange={handleChange}
          required
          defaultValue={answer.text}
          autoFocus={true}
          variant="outlined"
        />
      </Grid>
      {/* <Grid item md={1} xs={12}></Grid> */}
      <Grid item md={4} xs={12}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          marginLeft="1rem"
        >
          {/* <DualButton
            colors={['primary', 'secondary']}
            variants={['contained', 'contained']}
            texts={['Incorrecta', 'Correcta']}
            size="small"
          /> */}
          {/* le paso respCorrect para que tome el valor true/false de los datos recibidos de la api */}
          {/* le paso boolean para obtener el valor true/false del boton y setearselo en el handlerUpdate */}
          <TrueFalse fontSize="large" respCorrect={answer.correct}  boolean={SetBoolean}  />
          <IconButton
            color="secondary"
            aria-label="delete answer"
            component="span"
            size="large"
            onClick={() => handleAnsDelete(answer.id)}
          >
            <DeleteIcon fontSize="large" />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="guardar"
            component="span"
            size="large"
            onClick={() => handleUpdate(answer.id)}
            name={answer.id}
          >
            <SyncRoundedIcon name={answer.id}/>
          </IconButton>
         
        </Box>
      </Grid>
    </>
  );
}

export default QuestionMulti;
