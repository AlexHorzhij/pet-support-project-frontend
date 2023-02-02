const palette = {
  type: 'light',
  primary: {
    main: '#F59256',
  },
  secondary: {
    main: '#FFFFFF',
    contrastText: '#000000',
  },
  background: {
    default: '#d5d9dd',
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
    secondary: '#000',
    contrast: '#FFFFFF',
    hint: 'rgba(0,0,0,0.39)',
  },
};

export const ThemeOptions = {
  palette,
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
      textTransform: 'capitalize',
      margin: 4,
      hover: {
        backgroundColor: palette.primary.main,
        color: palette.secondary.main,
      },
    },
    caption: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.34,
    },
  },
  CardActionArea: {
    backgroundColor: 'red',
    p: 20,
  },
  shape: {
    borderRadius: 40,
  },
  components: {
    MuiCard: {
      variants: [
        {
          props: { variant: 'notice' },
          style: {
            width: '280px',
            background: palette.secondary.main,
            boxShadow: '7px 4px 14px rgba(49, 21, 4, 0.07)',
            borderRadius: '0px 0px 20px 20px',
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: `2px solid ${palette.primary.main}`,
            backgroundColor: palette.background.paper,
            color: palette.text.primary,
            '&:hover': {
              backgroundColor: palette.primary.main,
              border: `2px solid ${palette.primary.main}`,
            },
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            color: palette.text.contrast,
          },
        },
      ],
    },
    CardActionArea: {
      backgroundColor: 'red',
    },
  },
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 768,
      desktop: 1280,
    },
  },
};
