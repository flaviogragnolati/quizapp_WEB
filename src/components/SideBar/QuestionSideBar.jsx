import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
  makeStyles,
} from '@material-ui/core';
import BallotIcon from '@material-ui/icons/Ballot';
import QuestionItem from './components/QuestionItem';
import { NavigateBeforeRounded } from '@material-ui/icons';

const quizzEj = {
  avatar:
    'https://images.pexels.com/photos/207732/pexels-photo-207732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  subject: 'Quantum Entanglement',
  category: 'Physics',
  name: 'First Test',
  description: 'If you fail this test... pathetic...',
};

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 280,
    top: 64,
    height: 'calc(100% - 64px)',
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64,
  },
}));

const QuestionSideBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();

  const [questions, setQuestions] = useState([
    { id: 1, title: 'Pregunta ' },
    { id: 2, title: 'Pregunta ' },
    { id: 3, title: 'Pregunta ' },
    { id: 4, title: 'Pregunta ' },
    { id: 5, title: 'Pregunta ' },
    { id: 6, title: 'Pregunta ' },
    { id: 7, title: 'Pregunta ' },
    { id: 8, title: 'Pregunta ' },
  ]);

  const handleAddQuestion = () => {
    setQuestions((prevQ) => [...prevQ, { title: 'Nueva preg ' }]);
  };
  const handleQuestionDelete = (id) => {
    console.log('deleting', id);
    setQuestions((prevQ) => prevQ.filter((q) => q.id !== id));
  };
  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar className={classes.avatar} src={quizzEj.avatar} />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {quizzEj.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {quizzEj.subject}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List component={'ol'}>
          {questions.map((question, idx) => (
            <QuestionItem
              key={question.title}
              title={`${idx + 1} ${question.title}`}
              icon={BallotIcon}
              handleQuestionDelete={handleQuestionDelete}
              id={question.id}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
      <Box p={2} m={2} bgcolor="background.dark">
        <Button color="primary" variant="contained" onClick={handleAddQuestion}>
          Añadir pregunta
        </Button>
      </Box>
    </Box>
  );

  // return (
  //   <>
  //     <Hidden lgUp>
  //       <Drawer
  //         anchor="left"
  //         classes={{ paper: classes.mobileDrawer }}
  //         onClose={onMobileClose}
  //         open={openMobile}
  //         variant="temporary"
  //       >
  //         {content}
  //       </Drawer>
  //     </Hidden>
  //     <Hidden mdDown>
  //       <Drawer
  //         anchor="left"
  //         classes={{ paper: classes.desktopDrawer }}
  //         open
  //         variant="persistent"
  //       >
  //         {content}
  //       </Drawer>
  //     </Hidden>
  //   </>
  // );
};

QuestionSideBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

QuestionSideBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default QuestionSideBar;
