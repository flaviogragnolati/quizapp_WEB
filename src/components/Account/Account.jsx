import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom'

import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};

const quizzEj = {
  avatar: 'https://images.pexels.com/photos/207732/pexels-photo-207732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  subject: 'History of Science',
  category: 'History',
  name: 'Final Test',
  description: 'If you fail this... Tu vieja'
};

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));

const Profile = ({ className,quizz, ...rest}) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      {quizz ?
        <CardContent>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Avatar
            className={classes.avatar}
            src={quizzEj.avatar}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {quizzEj.name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${quizzEj.subject}, ${quizzEj.category}`}
          </Typography>
          <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
          >
          </Typography>
        </Box>
      </CardContent>
      : 
      <CardContent>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Avatar
            className={classes.avatar}
            src={user.avatar}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {user.name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${user.city}, ${user.country}`}
          </Typography>
          <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
          >
          </Typography>
        </Box>
      </CardContent>
}
      <Divider />
      <CardActions>
        <Button
          color="secondary"
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;