import { Switch } from '@material-ui/core';
import { func } from 'prop-types';
import React, { useContext } from 'react';

function ThemeToggler({ toggleTheme }) {
  const {openSidebar} = useContext(SideBarContext)
  return <Switch checked={openSidebar} varian="primary" onClick={toggleTheme} name="themeToggler" />;
}

ThemeToggler.propTypes = {
  toggleTheme: func.isRequired,
};

export default ThemeToggler;
