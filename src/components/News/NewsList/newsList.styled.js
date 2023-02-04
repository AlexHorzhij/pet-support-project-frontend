import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

// export const NewsGrid = styled(Grid)({
//   paddingLeft: '0px',
//   marginTop: '0px',
//   marginBottom: '0px',
//   paddingBottom: '100px',
// });

export const NewsGrid = styled(Grid)(({ theme }) => ({
  paddingBottom: '100px',

  [theme.breakpoints.up('md')]: {
    paddingBottom: '100px',
  },

  [theme.breakpoints.up('lg')]: {
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingBottom: '200px',
  },
}));
