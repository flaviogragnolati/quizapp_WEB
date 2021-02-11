import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  makeStyles
} from '@material-ui/core';
import List from '../../../components/List';
import array from './data';
import { useDispatch, useSelector } from 'react-redux';
import { getSubjectsList } from "../SchoolSlice";
import { SchoolSubjectSelector,SchoolStatusSelector } from 'utils/selectors';
import { userSelector } from 'utils/selectors';
import { deleteSubject } from 'views/School/SchoolSlice'
import { Link, useHistory, useParams } from "react-router-dom";

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
  const dispatch = useDispatch()
  const subjects = useSelector(SchoolSubjectSelector)
  const subjectsStatus = useSelector(SchoolStatusSelector)
  const school = useSelector(userSelector)
 
  useEffect(() => {
    dispatch(getSubjectsList({id:school.id}))
  }, [school])
  
  let handlerDelete = (e) => {
    dispatch(deleteSubject(e))
  }

  let handlerEdit = (e) => {
    history.push({
      pathname: `/subject-loader/${e}`,
      state: {
        edit: true,
      },
    });
  }  

  let columnName = ['Nombre', 'Description', 'Borrar','Editar']
  let propsNames = ['name','description','delete','edit']
  let actions = {
    delete: handlerDelete,
    edit: handlerEdit,
  }

  return (
      <Container maxWidth={false}>
        <h1>Lista de Materias de la Escuela</h1>
        <Box mt={3}>
          {subjectsStatus === 'success' ? <List 
          customers={subjects} propsNames={propsNames} columnName={columnName} actions={actions}/> : null}
        </Box>
        <Button component={Link} to='/subject-loader'>
          agregar Materia
        </Button>
      </Container>

  );
};

export default SchoolSubject;