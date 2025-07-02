import { createTheme } from '@mui/material/styles';

export const GRADIENT_MAIN = 'linear-gradient(90deg, #1976d2 0%, #ffd600 100%)';
export const GRADIENT_HERO = 'linear-gradient(120deg, #1976d2 0%, #63a4ff 50%, #ffd600 100%)';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Unique blue
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffd600', // Vibrant yellow
      light: '#ffff52',
      dark: '#c7a500',
      contrastText: '#1a237e',
    },
    background: {
      default: 'linear-gradient(135deg, #e3f2fd 0%, #fffde7 100%)',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a237e',
      secondary: '#424242',
    },
  },
  typography: {
    fontFamily: 'Space Grotesk, Inter, Roboto, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: 'Space Grotesk, Inter, sans-serif',
      fontWeight: 900,
      fontSize: '3.2rem',
      letterSpacing: '-1.5px',
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: 'Space Grotesk, Inter, sans-serif',
      fontWeight: 800,
      fontSize: '2.4rem',
      letterSpacing: '-1px',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.8rem',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.3rem',
    },
    body1: {
      fontFamily: 'Inter, Roboto, Arial, sans-serif',
      fontSize: '1.1rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
      letterSpacing: '0.5px',
    },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(255,255,255,0.95)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          fontWeight: 700,
          padding: '10px 28px',
        },
      },
    },
  },
});

export default theme; 