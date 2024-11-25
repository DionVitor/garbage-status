import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50', // Verde principal
      light: '#80e27e', // Verde claro
      dark: '#087f23', // Verde escuro
    },
    secondary: {
      main: '#ffc107', // Amarelo para contraste
    },
    background: {
      default: '#f1f8e9', // Verde muito claro
      paper: '#ffffff', // Fundo de cartões
    },
    text: {
      primary: '#37474f', // Cinza-escuro
      secondary: '#5f7c8a', // Cinza mais claro
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: { fontSize: '2.5rem' },
    h2: { fontSize: '2rem' },
    body1: { fontSize: '1rem' },
  },
});

export default theme;
