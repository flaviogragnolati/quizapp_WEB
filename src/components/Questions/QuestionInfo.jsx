import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  FormHelperText,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  QuestionInfo__select: {
    minWidth: 100,
  },
}));

function QuestionInfo(props) {
  
  const handleChange = (event) => {
    if(event.target.value === 1) {
      props.info.setmulti(1)
    } else if(event.target.value === 2) {
      props.info.setmulti(2)
    } 
  };



  const classes = useStyles();
  return (
    <>
      <Grid item md={6} xs={12}>
        <TextField

          label="Title"
          name="title"
          required
          value={props.info.title}
          variant="outlined"
        />
      </Grid>
      <Grid item md={3} xs={12}>
        <FormControl className={classes.formControl}>
          <InputLabel>Tipo de pregunta</InputLabel>
          <Select

            labelId="demo-simple-select-helper-label"
            //   value={age}
              onChange={handleChange}
          >
            <MenuItem value={1}>Multiple Opcion</MenuItem>
            <MenuItem value={2}>Verdadero o Falso</MenuItem>
          </Select>
          <FormHelperText>
            Elige el tipo de pregunta que deseas
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item md={11} xs={12}>
        <TextField
          fullWidth
          label="Description"
          name="description"
          required
          value={props.info.description}
          variant="outlined"
        />
      </Grid>
    </>
  );
}

export default QuestionInfo;
