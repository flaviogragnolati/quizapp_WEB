import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Field, Form, Formik } from "formik";
import { Button, Card, Grid, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { UserDetailSelector } from "utils/selectors";
import { getUserEmail } from "views/School/SchoolSlice";

const useStyles = makeStyles((theme) => ({
  field: {
    padding: "20px",
    fontSize: "16px",
    borderRadius: "3px",
    margin: "10px",
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
  // paper: {
  //   backgroundColor: theme.palette.background.paper,
  //   border: "2px solid #000",
  //   boxShadow: theme.shadows[5],
  //   padding: theme.spacing(2, 4, 3),
  // },
}));



function ModalTeacher({ Id, open, setOpen }) {
  const classes = useStyles();
  const Dispatch = useDispatch();
  const UserDetail = useSelector(UserDetailSelector);
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (values) => {
    values.Id = Id
    console.log('tu', values)
    Dispatch(getUserEmail(values))
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      BackdropComponent={Backdrop}
      BackdropProps={{}}
    >
      <Fade in={open}>
        {/* <div className={classes.paper}>
            <h2 id="transition-modal-title">{title}</h2>
            <p id="transition-modal-description">{content}</p>
          </div> */}
        <Formik onSubmit={handleSubmit}  initialValues={{ email: '' }}>
          {(formik) => (
            <Form Style="display: contents;">
              <Card className={classes.root}>
              <Grid xs={12}>
                <Field
                  className={classes.field}
                  placeholder="Email del Usuario"
                  name="email"

                  // defaultValue={infoQuestion.description}
                  variant="outlined"
                />
                </Grid>
                              <Grid xs={12}>
                <Button color="primary" variant="contained" type="submit">
                  Buscar Usuario
                </Button>
              </Grid>
              </Card>
            </Form>
          )}
        </Formik>
      </Fade>
    </Modal>
  );
}

export default ModalTeacher;
