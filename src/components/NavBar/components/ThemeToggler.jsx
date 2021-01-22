import { Switch } from '@material-ui/core';
import { func } from 'prop-types';
import React from 'react';

function ThemeToggler({ toggleTheme }) {
  return <Switch varian="primary" onClick={toggleTheme} name="themeToggler" />;
}

ThemeToggler.propTypes = {
  toggleTheme: func.isRequired,
};

export default ThemeToggler;
