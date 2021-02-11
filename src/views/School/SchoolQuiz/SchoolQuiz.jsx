import React, { useEffect, useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import List from 'components/List';
import Button from 'components/Home_MUI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { delateQuiz, getQuizList, getTeachersQuiz } from '../SchoolSlice';
import { SchoolQuizSelector, SchoolStatusSelector, } from 'utils/selectors';
import { userSelector } from 'utils/selectors';
import ModalTeacher from 'components/List/Modal';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const SchoolQuiz = () => {
  const dispatch = useDispatch();
  const quizes = useSelector(SchoolQuizSelector);
  const status = useSelector(SchoolStatusSelector);
  const school = useSelector(userSelector)
  const [QuizId, setQuizId] = useState(0);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const history = useHistory()

  let columnName = ['Nombre del Quiz', 'Materia', 'Descripción' ,'Eliminar','Profesores','Profesores'];
  let propsNames = ['name', 'Subject', 'description', 'delete', 'add', 'ver'];
  
  const handleDelete = (e)=>{
    dispatch(delateQuiz(e));
  }

  const handleAdd = (e)=>{
    setOpen(true);
    setQuizId(e);
  }

  const handleSee = (e)=>{
    dispatch(getTeachersQuiz({QuizId: e}))
    history.push('/quiz-teacher/')
  }

  let actions = {
    delete: handleDelete,
    add:handleAdd,
    ver:handleSee,
  }
  
  useEffect(() => {
    dispatch(getQuizList({id: school.id}));
  }, [school]);

 
  return (
    <Container maxWidth={false}>
      <Box mt={3}>
        <h3>Listado de Quizzes</h3>
        {status === 'success' ? (
          <List
            customers={quizes}
            propsNames={propsNames}
            columnName={columnName}
            actions={actions}
          />
        ) : (
          <h1>Cargando</h1>
        )}
      </Box>
      <Button>Agregar + </Button>
      <ModalTeacher Id={QuizId} open={open} setOpen={setOpen}></ModalTeacher>
    </Container>
  );
};

export default SchoolQuiz;