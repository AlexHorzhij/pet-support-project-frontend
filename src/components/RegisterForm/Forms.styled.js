import { styled } from '@mui/material/styles';
import { Box, Button, IconButton } from '@mui/material';
import { Field } from 'formik';

export const StyledInput = styled(Field)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: '100%',
  height: '40px',
  border: `1px solid ${theme.palette.outlines.inputBorder}`,
  borderRadius: theme.shape.borderRadius,
  padding: '0 32px',
  marginBottom: '25px',
  fontSize: '20px',

  '&::placeholder': {
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.36',
    letterSpacing: '0.04em',
    color: theme.palette.text.label,
  },

  [theme.breakpoints.up('md')]: {
    height: '52px',

    '&::placeholder': {
      fontSize: '18px',
      lineHeight: '1.39',
    },
  },
}));

export const ErrorText = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '33px',
  fontSize: '14px',
  left: '0',
  padding: '5px 20px',
  color: theme.palette.warning.main,
  zIndex: '5',

  [theme.breakpoints.up('md')]: {
    top: '48px',
  },
}));

export const FormButton = styled(Button)(({ theme }) => ({
  width: '100%',
  height: '44px',
  marginTop: '16px',

  [theme.breakpoints.up('lg')]: {
    height: '48px',
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '-2px',
  right: '20px',

  [theme.breakpoints.up('md')]: {
    top: '4px',
  },
}));
