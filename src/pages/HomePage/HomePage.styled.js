import { styled } from '@mui/material/styles';
import { Box, Typography, Container } from '@mui/material';

import homeMobile from '../../assets/backgrounds/home-mobile.png';
import homeDesktopB from '../../assets/backgrounds/home-desk-b.png';
import homeDesktopS from '../../assets/backgrounds/home-desk-s.png';
import womanImg from '../../assets/backgrounds/woman.png';
import heartImg from '../../assets/backgrounds/heart.png';

export const AdaptiveTypography = styled(Typography)(({ theme }) => ({
  maxWidth: '280px',
  fontSize: '32px',

  [theme.breakpoints.up('md')]: {
    maxWidth: '588px',
    fontSize: '68px',
  },
}));

export const HomeContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100vh',
  paddingTop: '118px',
  backgroundColor: theme.palette.background.default,
  backgroundImage: `url(${homeMobile})`,
  backgroundSize: '100% 400px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  backgroundAttachment: 'fixed',
  overflow: 'hidden',
  zIndex: '-1',

  [theme.breakpoints.up('md')]: {
    paddingTop: '160px',
    backgroundSize: '100% 990px',
  },

  [theme.breakpoints.up('lg')]: {
    backgroundSize: '100% 400px',
    backgroundImage: `url(${homeDesktopB})`,
  },
}));

export const RelativeContainer = styled(Container)(() => ({
  position: 'relative',
  overflow: 'hidden',
}));

export const AdditionalImage = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    position: 'fixed',
    bottom: '0',
    right: '0',
    width: '511px',
    height: '440px',
    backgroundColor: 'transparent',
    backgroundImage: `url(${homeDesktopS})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: '1',
  },
}));

export const WomanImage = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: '0',
  right: '0',
  width: '320px',
  height: '337px',
  backgroundColor: 'transparent',
  backgroundImage: `url(${womanImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  zIndex: '2',

  [theme.breakpoints.up('md')]: {
    width: '700px',
    height: '650px',
  },

  [theme.breakpoints.up('lg')]: {
    width: '625px',
    height: '655px',
  },
}));

export const HeartImage = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    position: 'fixed',
    top: '170px',
    right: '480px',
    width: '94px',
    height: '90px',
    backgroundColor: 'transparent',
    backgroundImage: `url(${heartImg})`,
    backgroundSize: 'cover',
    zIndex: '3',
  },
}));
