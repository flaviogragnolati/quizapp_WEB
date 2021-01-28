import React, { useState } from 'react';
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
import DeleteIcon from '@material-ui/icons/Delete';
import TrueFalse from '../TrueFalse/index';

function QuestionMulti({
  answer,
  handlers: { handleAnsDelete, handleAnsAdd },
}) {
  return (
    <>
      <Grid item md={8} xs={12}>
        <TextField
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
          <TrueFalse fontSize="large" />
          <IconButton
            color="secondary"
            aria-label="delete answer"
            component="span"
            size="large"
            onClick={() => handleAnsDelete(answer.id)}
          >
            <DeleteIcon fontSize="large" />
          </IconButton>
        </Box>
      </Grid>
    </>
  );
}

export default QuestionMulti;
