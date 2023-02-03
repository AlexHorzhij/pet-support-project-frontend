import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import { Field } from 'formik';

export const StyledInput = styled(Field)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: '100%',
  height: '40px',
  border: `1px solid ${theme.palette.outlines.inputBorder}`,
  borderRadius: theme.shape.borderRadius,
  padding: '0 32px',
  marginBottom: '16px',

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
  padding: '5px 20px',
  marginBottom: '10px',
  color: theme.palette.warning.main,
}));

export const FormButton = styled(Button)(({ theme }) => ({
  width: '100%',
  height: '44px',
  marginTop: '16px',

  [theme.breakpoints.up('lg')]: {
    height: '48px',
  },
}));
