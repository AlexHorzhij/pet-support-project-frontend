import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

export const NewsGrid = styled(Grid)(({ theme }) => ({
  marginBottom: '40px',

  [theme.breakpoints.up('md')]: {
    // marginBottom: '100px',
  },

  [theme.breakpoints.up('lg')]: {
    marginLeft: '16px',
    marginRight: '16px',
    // marginBottom: '200px',
  },
}));
