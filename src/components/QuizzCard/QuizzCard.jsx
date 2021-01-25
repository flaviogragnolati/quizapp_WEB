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
  Button,
} from '@material-ui/core';

import InfoIcon from '@material-ui/icons/Info';
import PeopleIcon from '@material-ui/icons/People';
import Bookmark from '../Bookmark';
import { ACTIONS } from 'store/rootReducer';
import { useDispatch } from 'react-redux';
import Badge from '../Badge/Badge';
import { Link } from 'react-router-dom';

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

const QuizzCard = ({ className, item, ...rest }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleNotifications = (state) => {
    if (state) {
      dispatch(ACTIONS.favorites.addToFavorites());
    } else {
      dispatch(ACTIONS.favorites.removeFromFavorites());
    }
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography
            align="center"
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
            {item.quizName}
          </Typography>
          <Bookmark action={handleNotifications} />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <p>{item.schoolName}</p>
          <p>{item.subjectName}</p>
        </Box>
        <Box display="flex" justifyContent="center" mb={3}>
          <img src={item.media} alt="profile pic" />
        </Box>
        <Typography align="center" color="textPrimary" variant="body1">
          {item.description}
        </Typography>
        <br></br>
        {item.tags.map((tag, idx) => (
          <Badge key={idx} color={idx % 2 === 0 ? 'primary' : 'info'}>
            {tag}
          </Badge>
        ))}
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid container justify="space-between" spacing={2}>
          <Box className={classes.statsItem} item>
            <Button component={Link} to={`/school/:quizId`}>
              <InfoIcon className={classes.statsIcon} color="action" />
              Más información
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              ></Typography>
            </Button>
          </Box>
          <Box className={classes.statsItem} item>
            <PeopleIcon className={classes.statsIcon} color="action" />
            <Typography color="textSecondary" display="inline" variant="body2">
              {item.totalDownloads} Estudiantes
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Card>
  );
};

QuizzCard.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object.isRequired,
};

export default QuizzCard;
