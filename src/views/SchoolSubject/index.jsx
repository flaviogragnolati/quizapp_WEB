import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import List from '../../components/List';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const [customers] = useState(data);

  return (

      <Container maxWidth={false}>
        <Box mt={3}>
          <List customers={customers} />
        </Box>
      </Container>
  );
};

export default CustomerListView;