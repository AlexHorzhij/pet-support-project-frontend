import { styled } from '@mui/material/styles';
import EmotionStyled from '@emotion/styled';
import {
  ToggleButton,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { Field } from 'formik';

export const DialogContentStyled = styled(DialogContent)(({ theme }) => ({
  maxWidth: '608px',
  padding: '40px 20px',

  [theme.breakpoints.up('md')]: {
    padding: '40px 80px',
  },
}));

export const DialogTitleStyled = styled(DialogTitle)(({ theme }) => ({
  fontWeight: 600,
  fontSize: 24,
  lineHeight: 1.35,
  textAlign: 'center',

  [theme.breakpoints.up('md')]: {
    fontSize: 36,
  },
}));

export const ToggleButtonStyled = styled(ToggleButton)(({ theme }) => ({
  textTransform: 'lowercase',
  fontWeight: 500,
  fontSize: 18,
  lineHeight: 1.1,

  [theme.breakpoints.up('md')]: {
    fontSize: 24,
  },
}));

export const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: 18,
  lineHeight: 1.1,

  [theme.breakpoints.up('md')]: {
    fontSize: 24,
  },
}));
export const StyledInputChechBox = styled(Field)(({ theme }) => ({
  boxSizing: 'border-box',
  padding: '5px',
  marginBottom: '10px',
  width: '70px',
  height: '70px',
  background: '#ffffff',
  borderRadius: '10px',
  appearance: 'none',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50%',
  transition: 'background-color 250ms ease',
  '&:checked ': {
    backgroundColor: '#fdf7f2',
  },
}));
export const StyledLabel = EmotionStyled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: color 250ms ease;

  &:hover,
  &:focus {
    color: #f59256;
  }
  &:not(:last-child) {
    margin-right: 80px;
  }
`;
