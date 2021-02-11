import React, { forwardRef, useContext } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { IconButton, Button, ListItem, makeStyles } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { convertFormikValuesToRedux } from 'utils/helpers';
import { IdsContext } from '../QuestionLoader';
import {
  updateQuestion,
  removeQuestion,
} from 'views/QuizLoader/QuizLoaderSlice';
import { useUpdateQuestion } from 'views/QuestionLoader/components/questionHelpers';
import { updateQuestionData } from 'views/QuestionLoader/components/questionHelpers';

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  title: {
    marginRight: 'auto',
  },
  active: {
    color: theme.palette.primary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& $icon': {
      color: theme.palette.primary.main,
    },
  },
}));

function QuestionItem(props, ref) {
  const {
    className,
    icon: Icon,
    title,
    handleDeleteQuestion,
    id,
    setQuestionId,
    ...rest // recibe setId de QuestionSidebar
  } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const { questionId } = useContext(IdsContext);

  const handleSetId = (id) => {
    //questionId deberia ser el del contexto, ya que hacemos referencia al questionId anterior, ya que es el cual ncesitamos para `actualizar` sus datos
    updateQuestionData(ref, questionId, dispatch);
    setQuestionId(id);
  };

  return (
    <>
      <ListItem
        className={clsx(classes.item, className)}
        disableGutters
        {...rest}
      >
        {/* aca setea el id de la pregunta para ser filtrada en QuestionLoader */}
        <Button
          activeClassName={classes.active}
          className={classes.button}
          onClick={() => handleSetId(id)}
        >
          {Icon && <Icon className={classes.icon} size="20" />}
          <span className={classes.title}>{title}</span>
        </Button>
        <IconButton onClick={() => handleDeleteQuestion(id)}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </>
  );
}

QuestionItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
};
QuestionItem = forwardRef(QuestionItem);
export default QuestionItem;
