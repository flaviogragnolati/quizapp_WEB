import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function BackdropLoading({
  action,
  color = 'inherit',
  thickness = 4,
  size = 250,
  ...props
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Backdrop className={classes.backdrop} open={true} onClick={handleClose}>
        <CircularProgress color={color} size={size} thickness={thickness} />
      </Backdrop>
    </div>
  );
}
