import React, { useEffect } from 'react';
import {  useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';

import BallotIcon from '@material-ui/icons/Ballot';import NavItem from './NavItem';

const quizzEj = {
    avatar: 'https://images.pexels.com/photos/207732/pexels-photo-207732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    subject: 'History of Science',
    category: 'History',
    name: 'Final Test',
    description: 'If you fail this test... Tu vieja'
  };

const items = [
  {
    title: 'Pregunta 1'
  },
  {
    title: 'Pregunta 2'
  },
  {
    title: 'Pregunta 3'
  },
  {
    title: 'Pregunta 4'
  },
  {
    title: 'Pregunta 5'
  },
  {
    title: 'Pregunta 6'
  },
  {
    title: 'Pregunta 7'
  },
  {
    title: 'Pregunta 8  '
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const QuestionSideBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          src={quizzEj.avatar}
          to="/app/account"
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {quizzEj.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {quizzEj.subject}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              key={item.title}
              title={item.title}
              icon={BallotIcon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
      <Box
        p={2}
        m={2}
        bgcolor="background.dark"
      >
          <Button
            color="primary"
            variant="contained"
          >
            Añadir pregunta
          </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

QuestionSideBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

QuestionSideBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default QuestionSideBar;