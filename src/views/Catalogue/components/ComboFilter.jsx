/* eslint-disable no-use-before-define */
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { PropTypes } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function ComboFilter({
  label,
  placeholder,
  options,
  limitTags,
  defaultValue,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        filterSelectedOptions
        limitTags={limitTags || 2}
        id="multiple-limit-tags"
        options={options}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label={label}
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
}

ComboFilter.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  limitTags: PropTypes.number,
  options: PropTypes.object.isRequired,
  defaultValue: PropTypes.object,
};
