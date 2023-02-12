import { styled } from '@mui/material/styles';
import { Box, Typography, Button, FormControlLabel } from '@mui/material';

export const Warning = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '16px',
  textAlign: 'center',
  marginBottom: '10px',
  lineHeight: '1.8',

  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  marginBottom: '15px',
  lineHeight: '1.8',

  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
  },
}));

export const AgreementText = styled(FormControlLabel)(({ theme }) => ({
  margin: '0 0 15px 0',
}));

export const BoxFlex = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const DeleteModalButton = styled(Button)(({ theme }) => ({
  fontSize: '16px',
  width: '200px',

  [theme.breakpoints.up('md')]: {
    width: '300px',
  },
}));
