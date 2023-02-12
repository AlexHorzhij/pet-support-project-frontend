import { styled } from '@mui/material/styles';
import { Box, Typography, Button, FormControlLabel } from '@mui/material';

export const Text = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  marginBottom: '15px',

  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
  },
}));

export const AgreementText = styled(FormControlLabel)(({ theme }) => ({
  fontSize: '10px',
  marginBottom: '15px',

  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
}));

export const BoxFlex = styled(Box)(({ theme }) => ({
  marginLeft: 'auto',
  marginRigth: 'auto',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const DeleteModalButton = styled(Button)(({ theme }) => ({
  fontSize: '16px',
  width: '200px',

  [theme.breakpoints.up('md')]: {
    width: '300px',
  },
}));
