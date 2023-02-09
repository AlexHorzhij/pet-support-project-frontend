import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

export const StepperBox = styled(Box)(({ theme }) => ({
  marginTop: '35px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  },
}));

export const StepperButton = styled(Button)(({ theme }) => ({
  minWidth: '180px',
  '&:not(:last-child)': {
    marginRight: '20px',
  },
  [theme.breakpoints.down('md')]: {
    minWidth: '100%',
    '&:not(:last-child)': {
      marginRight: 'unset',
      marginTop: '12px',
    },
  },
}));
