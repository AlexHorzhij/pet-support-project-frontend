import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

import mobile from '../../assets/backgrounds/mobile.png';
import tablet from '../../assets/backgrounds/tablet.png';
import desktop from '../../assets/backgrounds/desktop.png';

export const AuthContainer = styled(Box)(({ theme }) => ({
  width: '100%,',
  height: '100vh',
  paddingTop: '100px',
  backgroundColor: theme.palette.background.default,
  backgroundImage: `url(${mobile})`,
  backgroundSize: '100% 160px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  backgroundAttachment: 'fixed',
  overflow: 'auto',

  [theme.breakpoints.up('md')]: {
    paddingTop: '240px',
    backgroundSize: '100% 400px',
    backgroundIage: `url(${tablet})`,
  },

  [theme.breakpoints.up('lg')]: {
    paddingTop: '150px',
    backgroundSize: '100% 390px',
    backgroundIage: `url(${desktop})`,
  },
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  width: '280px',
  padding: '40px 0 40px 0',
  marginRight: 'auto',
  marginLeft: 'auto',

  [theme.breakpoints.up('md')]: {
    width: '608px',
    minHeight: '300px',
    padding: '60px 80px 40px 80px',
    backgroundColor: '#fff',
    borderRadius: '40px',
    boxShadow: '7px 4px 14px rgba(0, 0, 0, 0.11)',
  },

  [theme.breakpoints.up('lg')]: {
    width: '618px',
    padding: '60px 80px 60px 80px',
  },
}));

export const HeaderText = styled(Typography)(({ theme }) => ({
  marginBottom: '40px',
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '1.3',
  textAlign: 'center',

  [theme.breakpoints.up('md')]: {
    fontSize: '36px',
    fontWeight: '500',
  },
}));

export const Switcher = styled(Typography)(() => ({
  marginTop: '20px',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '1.3',
  textAlign: 'center',

  '&:last-child': {
    marginTop: '10px',
  },
}));

export const RemindButton = styled(Button)(() => ({
  marginLeft: '10px',
  height: '25px',
  minWidth: '80px',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '1.3',
}));
