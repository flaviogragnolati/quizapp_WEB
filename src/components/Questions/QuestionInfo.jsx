import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  TextField,
  FormHelperText,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';

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

function QuestionInfo({ info: { title, description }, setMulti }) {
  const handleChange = (event) => {
    if (event.target.value === 1) {
      setMulti(1);
    } else if (event.target.value === 2) {
      setMulti(2);
    }
  };

  const classes = useStyles();
  return (
    <>
      <Grid item xs={5}>
        <TextField
          label="Title"
          name="title"
          required
          value={title}
          variant="outlined"
          multiline
          rowsMax={3}
        />
      </Grid>
      <Grid item xs={3}>
        <FormControl>
          <InputLabel>Tipo de pregunta</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={1}>Multiple Opcion</MenuItem>
            <MenuItem value={2}>Verdadero o Falso</MenuItem>
          </Select>
          <FormHelperText>Elige el tipo de pregunta que deseas</FormHelperText>
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          label="Description"
          name="description"
          required
          value={description}
          variant="outlined"
        />
      </Grid>
    </>
  );
}

export default QuestionInfo;
