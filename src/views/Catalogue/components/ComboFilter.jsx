/* eslint-disable no-use-before-define */
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { catalogueFilterSelector } from 'utils/selectors';
import { useEffect } from 'react';

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
  action,
}) {
  const filter = useSelector(catalogueFilterSelector);
  const classes = useStyles();
  const [values, setValues] = useState();

  useEffect(() => {
    if (filter) {
      console.log('ASDASDASDASD');
      action(values);
    }
  }, [filter, action, values]);

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        filterSelectedOptions
        limitTags={limitTags || 2}
        id="multiple-limit-tags"
        options={options}
        getOptionLabel={(option) => option.label}
        value={values}
        onChange={(event, newValue) => {
          setValues(newValue);
        }}
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
