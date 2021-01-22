import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';

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
          main: '#6a95ff',
          dark: 'black',
          buttons: '#e1e1e1',
          contrastText: '#000000',

        },
        secondary: {
          light: '#0044ff',
          main: '#94b3ff',
          dark: "#c15e5e",
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
          main: '#1e004a',
          buttons: '#777',
          contrastText: '#f7f7f7'
        },
        secondary: {
          light: '#0066ff',
          main: '#090046',
          dark: 'black',
        },
      },
    });
  }

  theme = responsiveFontSizes(theme);
  return theme;
}

export default customTheme;
