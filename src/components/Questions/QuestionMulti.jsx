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

function QuestionMulti(props) {
  let i = props.answer.i;
  let answer = props.answer.info;
  return (
    <>
      <Grid item md={8} xs={12}>
        <TextField
          fullWidth
          label={`Answer ${i}`}
          name={`answer ${i}`}
          // onChange={handleChange}
          required
          defaultValue={answer.text}
          autoFocus={true}
          variant="outlined"
        />
      </Grid>
      <Grid item md={1} xs={12}>
        <Button color="primary" variant="contained">
          {answer.correct ? "Correcta" : "Incorrecta"}
        </Button>
      </Grid>
      <Grid item md={1} xs={12}>
        <Button color="primary" variant="contained">
          Eliminar respuesta
        </Button>
      </Grid>
    </>
  );
}

export default QuestionMulti;
