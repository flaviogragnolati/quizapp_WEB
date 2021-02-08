import React from 'react';
import { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { PropTypes } from 'prop-types';

function AddRemove({ action, respCorrect =false, boolean, ...rest }) {
  const [correct, setcorrect] = useState(respCorrect);
  let content;
  console.log(' CAMBIANDO',correct)
  if (correct === true) {
    content = <CheckCircleIcon style={{ color: 'green' }} {...rest} />;
  } else {
    content = <CancelIcon style={{ color: 'red' }} {...rest} />;
  }

  const handleClick = (state) => {
    setcorrect((prevState) => {
      return !prevState;
    });
  };

  useEffect(() => {
    boolean(correct)

    if (typeof action === 'function') {
      action(correct);
    }
  }, [correct, action]);

  return (
    <IconButton
      edge="start"
      color="inherit"
      onClick={() => handleClick(correct)}
    >
      {content}
    </IconButton>
  );
}

AddRemove.propTypes = {
  action: PropTypes.func,
};

export default AddRemove;
