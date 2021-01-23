import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../../../components/Home_MUI/Button';
import Typography from '../../../components/Home_MUI/Typography';
import InicioBackground from './InicioBackground';
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router-dom';

const backgroundImage =
  'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function Inicio(props) {
  const { classes } = props;
  const history = useHistory()
  return (
    <InicioBackground backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Tu Universidad Virtual
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Estudia Desde cualquier parte del Mundo.
      </Typography>
      <Link to="/register">
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component="a"
          href="/register"
        >
          Registrarse
        </Button>
      </Link>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Descubre la Experiencia
      </Typography>
    </InicioBackground>
  );
}

Inicio.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inicio);
