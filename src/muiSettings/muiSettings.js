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
    primary: '#000',
    secondary: '#535353',
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
  shape: {
    borderRadius: 40,
  },
  components: {

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
              border: `2px solid ${palette.secondary.main}`,
            },
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            color: palette.text.contrast,
          },
        },
        {
          props: { variant: 'text' },
          style: { color: palette.text.primary}
        }
      ],
    },
    MuiContainer: {
      variants: [
        {
          props: { component: 'main' },
          style: {
            backgroundColor: palette.background.default,
            marginTop: 49,
            paddingTop: 10,

          }
        }
      ]
    },
    // MuiContainerBase: {
    //   mx: 'auto'
    // }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1280,
      xl: 1536,
    },
  },
};
