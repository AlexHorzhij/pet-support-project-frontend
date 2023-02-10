import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const FormSearch = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  maxWidth: '280px',
  background: '#FFFFFF',
  borderRadius: '40px',
  boxShadow: '7px 4px 14px rgba(49, 21, 4, 0.07)',
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop: '28px',
  marginBottom: '40px',
  padding: '2px 4px',

  [theme.breakpoints.up('md')]: {
    maxWidth: '608px',
    marginTop: '40px',
    marginBottom: '60px',
  },

  // [theme.breakpoints.up('lg')]: {
  //   marginLeft: '16px',
  //   marginRight: '16px',
  //   // marginBottom: '200px',
  // },
}));
