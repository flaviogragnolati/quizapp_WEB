import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { indigo, pink } from '@material-ui/core/colors';

export const lightTheme = {
  body: '#E2E2E2',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
};

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
};

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
          light: indigo[800],
          main: indigo[500],
          dark: indigo[500],
        },
        secondary: {
          light: '#0044ff',
          main: '#fff',
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
