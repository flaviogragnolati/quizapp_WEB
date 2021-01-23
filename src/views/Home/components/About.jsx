import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../../../components/Home_MUI/Typography';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import LanguageIcon from '@material-ui/icons/Language';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.main,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
  Icon__Values: {
    width: '2em',
    height: '2em',
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <InfoIcon className={classes.Icon__Values} />
              <Typography variant="h4" className={classes.title}>
                Sobre Nosotros
              </Typography>
              <Typography variant="h5">
                {
                  'xxxxxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxx xxxxxxxxx xxxxxxx xxxxxxx xxxxxxxxxxxxx'
                }
                {
                  'xxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxx xxxxxxxxx xxxxxxxx xxxxxxxxxxx'
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <LanguageIcon className={classes.Icon__Values} />
              <Typography variant="h4" className={classes.title}>
                Proyecto
              </Typography>
              <Typography color="primary.contrastText" variant="h5">
                {
                  'xxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxx xxxxxxxxxx xxxxxxxx xxxxxxxxxxxx xxxxxxxxxx'
                }
                {
                  'xxxxxxxx xxxxxxxxx xxxxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxx'
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <ContactsIcon className={classes.Icon__Values} />
              <Typography variant="h4" className={classes.title}>
                Contacto
              </Typography>
              <Typography variant="h5">
                {
                  'xxxxxx xxxxxxxxxxxxxx xxxxxxxxxxxxxxxx xxxxxxx xxxxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx'
                }
                {
                  'xxxxxxx xxxxxxxxxx xxxxxxxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxx'
                }
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
