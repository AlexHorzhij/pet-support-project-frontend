import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  textAlign: 'center',

  [theme.breakpoints.up('md')]: {
    fontSize: '48px',
  },
}));
