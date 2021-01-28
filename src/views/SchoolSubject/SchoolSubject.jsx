import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import List from '../../components/List';
import array from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const SchoolSubject = () => {
  // const classes = useStyles();
  const [customers] = useState(array);
  let columnName = ['Name', 'Email', 'Trash','Update', 'Teacher']
  let ButtonName = ['Trash', 'Update', 'Teacher'];
  return (
      <Container maxWidth={false}>
        <Box mt={3}>
          <List customers={customers} columnName={columnName} ButtonName={ButtonName} />
        </Box>
      </Container>

  );
};

export default SchoolSubject;