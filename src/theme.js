import { createTheme } from '@mui/material/styles';

// Premium Black & Gold Theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1a1a1a', // Premium Black
      light: '#2d2d2d',
      dark: '#000000',
      contrastText: '#D4AF37',
    },
    secondary: {
      main: '#D4AF37', // Royal Gold
      light: '#FFD700',
      dark: '#B8860B',
      contrastText: '#1a1a1a',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#D4AF37',
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '0.02em',
      color: '#D4AF37',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2.75rem',
      letterSpacing: '0.01em',
      color: '#D4AF37',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2rem',
      color: '#D4AF37',
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      fontSize: '1.5rem',
      color: '#FFD700',
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      fontSize: '1rem',
    },
    body1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: '1.125rem',
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 2px 8px rgba(212, 175, 55, 0.15)',
    '0 4px 16px rgba(212, 175, 55, 0.2)',
    '0 8px 24px rgba(212, 175, 55, 0.25)',
    '0 12px 32px rgba(212, 175, 55, 0.3)',
    '0 16px 40px rgba(212, 175, 55, 0.35)',
    '0 20px 48px rgba(212, 175, 55, 0.4)',
    '0 24px 56px rgba(212, 175, 55, 0.45)',
    '0 0 0 0',
    '0 0 0 0',
    '0 0 0 0',
    '0 0 0 0',
    '0 0 0 0',
    '0 0 0 0',
    '0 0 0 0',
    '0 0 0 0',
    '0 0 0 0',
    '0 0 0 0',
    '0 0 0 0',
    '0 0 0 0',
    '0 0 0 0',
    '0 0 0 0',
    '0 0 0 0',
    '0 0 0 0',
    '0 0 0 0',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 32px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 24px rgba(212, 175, 55, 0.4)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
          color: '#1a1a1a',
          '&:hover': {
            background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 100%)',
          },
        },
        outlined: {
          borderColor: '#D4AF37',
          color: '#D4AF37',
          '&:hover': {
            borderColor: '#FFD700',
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #1a1a1a 0%, #0a0a0a 100%)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          transition: 'all 0.4s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            border: '1px solid rgba(212, 175, 55, 0.5)',
            boxShadow: '0 12px 32px rgba(212, 175, 55, 0.3)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(180deg, #1a1a1a 0%, rgba(26, 26, 26, 0.95) 100%)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
        },
      },
    },
  },
});

export default theme;
