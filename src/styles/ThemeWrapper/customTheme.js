import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { indigo, pink } from '@material-ui/core/colors';

function customTheme(themeName = 'light') {
  let theme;
  if (themeName === 'light') {
    theme = createMuiTheme({
      themeName: 'Custom Theme Name',
      typography: {
        useNextVariants: true,
        fontFamily: [
          'Roboto',
          'Lato',
          '"Helvetica Neue"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
      palette: {
        type: themeName,
        primary: {
          light: indigo[500],
          main: '#4278f9',
          dark: 'black',
          buttons: '#e1e1e1',
        },
        secondary: {
          light: '#0044ff',
          main: '#94b3ff',
          dark: pink[500],
        },
      },
    });
  } else if (themeName === 'dark') {
    theme = createMuiTheme({
      themeName: 'dark',
      typography: {
        useNextVariants: true,
        fontFamily: [
          'Roboto',
          'Lato',
          '"Helvetica Neue"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
      palette: {
        type: themeName,
        primary: {
          main: '#ff4400',
          butons: 'blue',
        },
        secondary: {
          light: '#0066ff',
          main: '#0044ff',
        },
      },
    });
  }

  theme = responsiveFontSizes(theme);
  return theme;
}

export default customTheme;
