import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

export const NewsGrid = styled(Grid)(({ theme }) => ({
  marginBottom: '40px',

  [theme.breakpoints.up('md')]: {},

  [theme.breakpoints.up('lg')]: {},
}));
