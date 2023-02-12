import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';

export const Main = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  marginTop: '42px',
  paddingBottom: '64px',

  [theme.breakpoints.up('md')]: {
    marginTop: '48px',
  },
}));

export const NewsContainer = styled(Container)(({ theme }) => ({
  maxWidth: '474px',
  margin: '0 auto',
  padding: '0 20px',

  [theme.breakpoints.up('md')]: {
    maxWidth: '768px',
    padding: '0 0',
  },

  [theme.breakpoints.up('lg')]: {
    maxWidth: '1280px',
  },
}));
