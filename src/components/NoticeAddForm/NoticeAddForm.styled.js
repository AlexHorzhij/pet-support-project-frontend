import { styled } from '@mui/material/styles';
import {
  ToggleButton,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

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
