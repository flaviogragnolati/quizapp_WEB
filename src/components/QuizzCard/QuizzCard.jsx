import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';

import InfoIcon from '@material-ui/icons/Info';
import PeopleIcon from '@material-ui/icons/People';
import Bookmark from '../Bookmark';
import { ACTIONS } from 'store/rootReducer';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  img: {
    maxWidth: '160px',
    width: '100%',
    margin: '0 auto',
    transform: 'translate3d(0, -50%, 0)',
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex',
  },
  statsIcon: {
    marginRight: theme.spacing(1),
  },
}));

const QuizzCard = ({ className, product, ...rest }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleNotifications = (state) => {
    if (state) {
      dispatch(ACTIONS.favorites.removeFromFavorites());
    } else {
      dispatch(ACTIONS.favorites.addToFavorites());
    }
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography
            align="center"
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
            {product.title}
          </Typography>
          <Bookmark action={handleNotifications} />
        </Box>
        <Box display="flex" justifyContent="center" mb={3}>
          <img src={product.media} alt="profile pic" />
          {/* <Avatar alt="Product" src={product.media} variant="square" /> */}
        </Box>
        <Typography align="center" color="textPrimary" variant="body1">
          {product.description}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid container justify="space-between" spacing={2}>
          <Grid className={classes.statsItem} item>
            <InfoIcon className={classes.statsIcon} color="action" />
            Más información
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            ></Typography>
          </Grid>
          <Grid className={classes.statsItem} item>
            <PeopleIcon className={classes.statsIcon} color="action" />
            <Typography color="textSecondary" display="inline" variant="body2">
              {product.totalDownloads} Estudiantes
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

QuizzCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired,
};

export default QuizzCard;
