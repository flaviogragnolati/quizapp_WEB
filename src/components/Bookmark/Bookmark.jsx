import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import IconButton from '@material-ui/core/IconButton';

function Bookmark({ action, ...rest }) {
  const [checked, setChecked] = useState(false);
  let content;
  if (checked === true) {
    content = <BookmarkIcon {...rest} />;
  } else {
    content = <BookmarkBorderIcon {...rest} />;
  }

  const handleClick = (checked) => {
    setChecked((prevState) => setChecked(!prevState));
    if (typeof action === 'function') {
      action(checked);
    }
  };

  return (
    <IconButton
      edge="start"
      color="inherit"
      onClick={() => handleClick(checked)}
    >
      {content}
    </IconButton>
  );
}

Bookmark.propTypes = {
  action: PropTypes.func,
};

export default Bookmark;
