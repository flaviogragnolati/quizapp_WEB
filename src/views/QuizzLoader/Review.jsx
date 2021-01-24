import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
  { firstName: 'Juan', lastName: 'Perez', },
  { firstName: 'Martina', lastName: 'Rojo', },  
  { firstName: 'Miguel', lastName: 'Martinez', },  
  { firstName: 'Lucia', lastName: 'Schwarzenegger', },
];


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {

  const values = {
    name: 'Prueba Final ',
    category: 'Historia',
    subject: 'Historia de la Ciencia',
    description: 'Prueba final donde se evaluaran sus conocimientos adquiridos durante el curso'
  }
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumen Quizz
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.lastName}>
            <ListItemText primary={`${product.firstName} ${product.lastName}`} secondary={product.desc} />
          </ListItem>
        ))}
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            {values.name}
          </Typography>
        </Grid>
        <Grid item  xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            {values.category}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            {values.subject}
          </Typography>
        </Grid>
        <Grid item xs={12} >
          <Typography variant="h6" gutterBottom className={classes.title}>
            {values.description}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}