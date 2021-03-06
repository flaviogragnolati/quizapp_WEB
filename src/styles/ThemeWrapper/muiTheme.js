export const muiTheme = {
  light: {
    themeName: 'light',
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
        main: '#cfd8dc',
        light: '#ffffff',
        dark: '#9ea7aa',
      },
      secondary: {
        main: '#00838f',
        light: '#4fb3bf',
        dark: '#005662',
      },
      error: {
        light: '#e57373',
        main: '#f44336',
        dark: '#d32f2f',
        contrastText: '#fff',
      },
      warning: {
        light: '#ffb74d',
        main: '#ff9800',
        dark: '#f57c00',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      info: {
        light: '#64b5f6',
        main: '#2196f3',
        dark: '#1976d2',
        contrastText: ' #fff',
      },
      success: {
        light: '#81c784',
        main: '#4caf50',
        dark: '#388e3c',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
    },
  },
  dark: {
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
      type: 'dark',
      primary: {
        main: '#212121',
        light: '#484848',
        dark: '#000000',
      },
      secondary: {
        main: '#121415',
        light: '#a7c0cd',
        dark: '#4b636e',
      },
      // error: {
      //   light: '#e57373',
      //   main: '#f44336',
      //   dark: '#d32f2f',
      //   contrastText: '#fff',
      // },
      // warning: {
      //   light: '#ffb74d',
      //   main: '#ff9800',
      //   dark: '#f57c00',
      //   contrastText: 'rgba(0, 0, 0, 0.87)',
      // },
      // info: {
      //   light: '#64b5f6',
      //   main: '#2196f3',
      //   dark: '#1976d2',
      //   contrastText: ' #fff',
      // },
      // success: {
      //   light: '#81c784',
      //   main: '#4caf50',
      //   dark: '#388e3c',
      //   contrastText: 'rgba(0, 0, 0, 0.87)',
      // },
    },
  },
};

export default muiTheme;
