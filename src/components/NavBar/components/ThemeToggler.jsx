import { Switch } from '@material-ui/core';
import { SideBarContext } from 'App';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function ThemeToggler({ toggleTheme, checked }) {
  // const [checked, setChecked] = useState(false);

  // const handleChecked = () => {
  //   console.log('check before', checked);
  //   setChecked(!checked);
  //   console.log('check', checked);
  //   toggleTheme();
  // };
  console.log('checked', checked);

  return (
    <Switch
      checked={checked === 'light' ? false : true}
      color="primary"
      onChange={() => toggleTheme()}
      name="themeToggler"
    />
  );
}

ThemeToggler.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default ThemeToggler;
