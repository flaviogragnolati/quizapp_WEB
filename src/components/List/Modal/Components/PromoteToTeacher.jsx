import React from 'react'
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Field, Form, Formik } from "formik";
import { Button, Card, Grid, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { UserDetailSelector, UserDetailStatusSelector } from "utils/selectors";
import { getUserEmail, cleanUser, postUserToTeacher } from "views/School/SchoolSlice";
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
      margin: "1vh",
    },
    // paper: {
    //   backgroundColor: theme.palette.background.paper,
    //   border: "2px solid #000",
    //   boxShadow: theme.shadows[5],
    //   padding: theme.spacing(2, 4, 3),
    // },
  }));

function PromoteToTeacher() {
    const classes = useStyles();
    const UserDetail = useSelector(UserDetailSelector);
    
    return (
        <Card className={classes.root}>
                {status === "error" ? (
                  <Alert className={classes.alert} severity="error">
                    No existe usuario con ese mail.
                  </Alert>
                ) : status === "success" ? (
                  <Grid className={classes.user_data} xs={12}>
                    <img className={classes.photo} src={UserDetail.photo} />
                    <Typography variant="button" display="block">
                      {`${UserDetail.firstName} ${UserDetail.lastName}`}
                    </Typography>
                    <Typography variant="button" display="block">
                      {UserDetail.birthdate}
                    </Typography>
                  </Grid>
                ) : null}
                <Grid xs={12}>
                  <Field
                    className={classes.field}
                    placeholder="Email del Usuario"
                    name="email"
                    required
                    // defaultValue={infoQuestion.description}
                    variant="outlined"
                  />
                </Grid>
                <Grid xs={12}>
                  {status === "success" ? (
                    <Grid xs={12}>
                      <Button
                        className={classes.button}
                        color="primary"
                        variant="contained"
                        type="submit"
                      >
                        Promover a profesor
                      </Button>
                    </Grid>
                  ) : status === "idle" ||  status === "error" ? (
                    <Button
                      className={classes.button}
                      color="primary"
                      variant="contained"
                      type="submit"
                    >
                      Buscar Usuario
                    </Button>
                  ) : null}
                </Grid>
              </Card>
    )
}

export default PromoteToTeacher
