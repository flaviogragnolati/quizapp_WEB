import { indigo } from '@material-ui/core/colors';

export const muiTheme = {
  light: {
    themeName: 'custom light',
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
      type: 'light',
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
        dark: '#c15e5e',
      },
    },
  },
  dark: {
    themeName: 'custom dark',
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
      type: 'dark',
      primary: {
        main: '#1e004a',
        buttons: '#424242',
        contrastText: '#f7f7f7',
      },
      secondary: {
        light: '#0066ff',
        main: '#090046',
        dark: 'black',
      },
    },
  },
};

export default muiTheme;
