import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Field, Form, Formik } from "formik";
import { Button, Card, Grid, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { UserDetailSelector, UserDetailStatusSelector } from "utils/selectors";
import {
  getUserEmail,
  cleanUser,
  postUserToTeacher,
} from "views/School/SchoolSlice";
import { Alert } from "@material-ui/lab";
import Typography from "components/Home_MUI/Typography";
import { ACTIONS } from "store/rootReducer";

const useStyles = makeStyles((theme) => ({
  field: {
    padding: "20px",
    fontSize: "16px",
    borderRadius: "3px",
    margin: "15px",
    minWidth: "25vh",
  },
  root: {
    minWidth: "30vh",
    minHeight: "30vh",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    border: "3px solid black",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    maxHeight: "20vh",
  },
  user_data: {
    margin: "3vh 3vh 0vh 3vh",
  },
  button: {
    margin: "2vh",
  },
}));

function SearchUser() {
  const classes = useStyles();
  const UserDetail = useSelector(UserDetailSelector);
  const status = useSelector(UserDetailStatusSelector);

  return (
<>
      {status === "error" ? (
        <Alert className={classes.alert} severity="error">
          Ocurrio un Error, intenta de nuevo.
        </Alert>
      ) : null}
      <Grid xs={12}>
        <Field
          className={classes.field}
          placeholder="Email del Usuario"
          name="email"
          required
          variant="outlined"
        />
      </Grid>
      <Grid xs={12}>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          type="submit"
        >
          Buscar Usuario
        </Button>
      </Grid>
</>
  );
}

export default SearchUser;
