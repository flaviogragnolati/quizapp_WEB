import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core/';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useState } from 'react';
// import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
const LimitedBackdrop = withStyles({
  root: {
    position: 'absolute',
    zIndex: 1,
  },
})(Backdrop);

export default function LimitedBackdropLoading({
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
      <LimitedBackdrop
        className={classes.LimitedBackdrop}
        open={true}
        onClick={handleClose}
      >
        <CircularProgress color={color} size={size} thickness={thickness} />
      </LimitedBackdrop>
    </div>
  );
}
