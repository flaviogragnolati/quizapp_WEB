import {
  CssBaseline,
  MuiThemeProvider,
  StylesProvider,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global.js';

function ThemeWrapper({ children, theme }) {
  return (
    <>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <GlobalStyle />
            <CssBaseline />
            {children}
          </MuiThemeProvider>
        </ThemeProvider>
      </StylesProvider>
    </>
  );
}

ThemeWrapper.defaultProps = {
  children: null,
  theme: {},
};

ThemeWrapper.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
};

export default ThemeWrapper;
