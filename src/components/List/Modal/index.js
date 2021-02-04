import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Form, Formik } from 'formik';
import { Button, Grid, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
 
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function ModalTeacher({title, content,open, setOpen}) {
    const classes = useStyles();

    // const handleOpen = () => {
    //   setOpen(true);
    // };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleSubmit = ()=>{

    }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
        }}
      >
          
        <Fade in={open}>
          {/* <div className={classes.paper}>
            <h2 id="transition-modal-title">{title}</h2>
            <p id="transition-modal-description">{content}</p>
          </div> */}
          <Formik onSubmit={handleSubmit} >
        {(formik) => (
          <Form Style="display: contents;">
                <Grid xs={2}>
          
              <TextField
                label="Email"
                name="email"
                required
                // defaultValue={infoQuestion.description}
                variant="outlined"
              />
              <Button color="primary" variant="contained" type="submit">
                Buscar Usuario
              </Button>
            </Grid>
              </Form>
              )}
               </Formik>
        </Fade>
      </Modal>
    )
}

export default ModalTeacher
