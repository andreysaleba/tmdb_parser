import { createTheme } from '@mui/material/styles';
import { red, yellow } from '@mui/material/colors';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Ubuntu',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: 'rgb(18, 177, 18)',
      dark: 'rgb(26, 145, 218)',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgba(214, 214, 214, 1)',
    },
    warning: {
      main: yellow.A700,
    },
    error: {
      main: red.A400,
    },
    bad: {
      main: red[800],
    },
    background: {
      default: '#f5f5dc',
    },
    text: {
      primary: '#14171a',
    },
  },
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
          padding: 20,
        },
      },
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        textAlign: 'left',
      },
    },
  },
});

export default theme;
