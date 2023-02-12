import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

export const NewsGrid = styled(Grid)(({ theme }) => ({
  marginBottom: '40px',

  [theme.breakpoints.up('md')]: {
    // marginBottom: '100px',
  },

  [theme.breakpoints.up('lg')]: {
    paddingLeft: '16px',
    paddingRight: '16px',
    // marginBottom: '200px',
  },
}));
