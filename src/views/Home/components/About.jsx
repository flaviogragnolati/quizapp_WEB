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
    backgroundColor: theme.palette.background.default,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(23),
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

function About(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <div className={classes.item}>
              <InfoIcon className={classes.Icon__Values} />
              <Typography variant="h4" className={classes.title}>
                Sobre Nosotros
              </Typography>
              <Typography variant="h5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus facilis ad eum. Repellat ad ipsum dicta ullam,
                suscipit ut saepe ex consectetur non repudiandae aperiam harum
                voluptate minima vitae quisquam!
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.item}>
              <LanguageIcon className={classes.Icon__Values} />
              <Typography variant="h4" className={classes.title}>
                Proyecto
              </Typography>
              <Typography color="primary.contrastText" variant="h5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, quo perspiciatis at velit fugiat magni quidem quia
                accusantium saepe voluptas assumenda quaerat amet, a fugit.
                Similique ad tempora repellat recusandae.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
