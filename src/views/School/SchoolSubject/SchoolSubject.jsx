import React, { useEffect, useState } from 'react';
import { Box, Button, Container, makeStyles } from '@material-ui/core';
import List from '../../../components/List';
import array from './data';
import { useDispatch, useSelector } from 'react-redux';
import { getSubjectsList } from '../SchoolSlice';
import {
  schoolSubjectErrorSelector,
  SchoolSubjectSelector,
  SchoolStatusSelector,
} from 'utils/selectors';
import { userSelector } from 'utils/selectors';
import { deleteSubject, getQuizList } from 'views/School/SchoolSlice';
import { Link, useHistory, useParams } from 'react-router-dom';
import BackdropLoading from 'components/Loading/BackdropLoading';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const SchoolSubject = () => {
  // const classes = useStyles();
  const history = useHistory();
  const [customers] = useState(array);
  const dispatch = useDispatch();
  const subjects = useSelector(SchoolSubjectSelector);
  const subjectsStatus = useSelector(SchoolStatusSelector); // esto no es subjeect status
  const school = useSelector(userSelector);
  const deleteError = useSelector(schoolSubjectErrorSelector);

  useEffect(() => {
    dispatch(getSubjectsList({ id: school.id }));
  }, [school]);

  useEffect(() => {
    if (Boolean(deleteError)) {
      alert(deleteError);
    }
  }, [deleteError, subjects, dispatch]);

  let handlerDelete = (subjectId) => {
    dispatch(deleteSubject({ subjectId, schoolId: school.id }));
  };

  let handlerEdit = (e) => {
    history.push({
      pathname: `/subject-loader/${e}`,
      state: {
        edit: true,
      },
    });
  };

  let columnName = ['Nombre', 'Description', 'Borrar', 'Editar Materia'];
  let propsNames = ['name', 'description', 'Borrar', 'Editar'];
  let actions = {
    Borrar: handlerDelete,
    Editar: handlerEdit,
  };

  return (
    <Container maxWidth={false}>
      <h1>Lista de Materias de la Escuela</h1>
      <Box mt={3}>
        {subjectsStatus === 'success' ? (
          <List
            customers={subjects}
            propsNames={propsNames}
            columnName={columnName}
            actions={actions}
          />
        ) : (
          <BackdropLoading />
        )}
      </Box>
      <Button component={Link} to="/subject-loader">
        Agregar Materia
      </Button>
    </Container>
  );
};

export default SchoolSubject;
