
export const ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#F59256',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#000000',
    },
    background: {
      default: '#FDF7F2',
      paper: '#FFFFFF',
    },
    warning: {
      main: '#ff1800',
    },
    info: {
      main: '#3091EB',
    },
    text: {
      primary: '#111111',
      secondary: '#000000',
      hint: 'rgba(0,0,0,0.39)',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Manrope',
      fontSize: 68,
      fontWeight: 700,
      lineHeight: 1.47,
    },
    fontFamily: 'Manrope',
    fontSize: 16,
    fontWeightLight: 300,
    h2: {
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 1.35,
    },
    h3: {
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.35,
    },
    h4: {
      fontSize: 24,
      lineHeight: 1.35,
    },
    h5: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.35,
    },
    body2: {
      fontSize: 16,
      lineHeight: 1.37,
    },
    body1: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.37,
    },
    button: {
      fontSize: 20,
      lineHeight: 1.37,
      borderRadius: 20,
      height: 38,
      textTransform: 'capitalize',
      border: 5,
      variant: {
        outlined: {
          borderRadius: 4,
          backgroundColor: 'red'
        }
      }
    },
    caption: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.34,
    },
  },
  shape: {
    borderRadius: 40,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            textTransform: 'none',
            border: `2px dashed red`,
            backgroundColor: 'green'
          },
        },
        {
          props: { variant: 'dashed' },
          style: {
            textTransform: 'none',
            border: `2px dashed red`,
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            border: `4px dashed blue`,
          },
        },
      ],
    },
  },
};