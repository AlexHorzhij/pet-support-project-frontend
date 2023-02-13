import { styled } from '@mui/material/styles';
import {
  Box,
  CardMedia,
  Grid,
  Link,
  Typography,
  Container,
} from '@mui/material';

export const Main = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  paddingTop: '42px',
  marginTop: '49px',
  paddingBottom: '64px',

  [theme.breakpoints.up('md')]: {
    paddingTop: '64px',
  },
}));

export const CustomContainer = styled(Container)(({ theme }) => ({
  maxWidth: '474px',
  margin: '0 auto',
  padding: '0 20px',

  [theme.breakpoints.up('md')]: {
    maxWidth: '768px',
    padding: '0 32px',
  },

  [theme.breakpoints.up('lg')]: {
    maxWidth: '1280px',
    padding: '0 16px',
  },
}));

// ====================================================================

export const ListGrid = styled(Grid)(({ theme }) => ({
  marginTop: '28px',
  gap: '12px',

  [theme.breakpoints.up('md')]: {
    marginTop: '40px',
    gap: '32px',
  },

  [theme.breakpoints.up('lg')]: {
    marginTop: '60px',
  },
}));

// ====================================================

export const ItemGrid = styled(Grid)(({ theme }) => ({
  maxWidth: '430px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '12px 4px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius20,
  boxShadow: '7px 4px 14px 0px rgba(49, 21, 4, 0.07)',

  [theme.breakpoints.up('md')]: {
    maxWidth: '336px',
    padding: '16px 16px 16px 8px',
    borderRadius: theme.shape.borderRadius,
  },

  [theme.breakpoints.up('lg')]: {
    maxWidth: '394px',
  },
}));

export const BoxTitle = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: '12px',
  padding: '0 15px',

  [theme.breakpoints.up('md')]: {
    marginBottom: '16px',
  },
}));

export const TitleLink = styled(Link)(({ theme }) => ({
  fontWeight: '700',
  fontSize: '12px',
  lineHeight: '1.33',
  color: theme.palette.primary.main,
  transition: 'text-shadow 250ms linear',

  '&:hover': {
    textDecoration: 'none',
    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
  },
  '&:focus': {
    textDecoration: 'none',
    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
  },

  [theme.breakpoints.up('md')]: {
    marginBottom: '16px',
    fontSize: '16px',
    lineHeight: '1.37',
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: '20px',
    lineHeight: '1.35',
  },
}));

export const FriendsLogo = styled(CardMedia)(({ theme }) => ({
  width: '110px',
  height: '78px',
  marginRight: '12px',

  [theme.breakpoints.up('md')]: {
    width: '120px',
    height: '85px',
    marginRight: '14px',
  },

  [theme.breakpoints.up('lg')]: {
    width: '158px',
    height: '112px',
    marginRight: '16px',
  },
}));

export const ContactsItem = styled(Grid)(({ theme }) => ({
  width: '140px',
  marginBottom: '4px',

  [theme.breakpoints.up('md')]: {
    width: '170px',
    marginBottom: '8px',
    maxWidth: '100%',
    flexGrow: '1',
  },

  [theme.breakpoints.up('lg')]: {
    width: '196px',
    marginBottom: '12px',
  },
}));

export const ContactsTypography = styled(Typography)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '1.33',

  [theme.breakpoints.up('md')]: {
    fontSize: '14px',
    lineHeight: '1.35',
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: '16px',
    lineHeight: '1.37',
  },
}));

export const ContactLink = styled(Link)(({ theme }) => ({
  display: 'block',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  color: theme.palette.text.primary,
  transition: 'color 250ms linear',
  textDecoration: 'none',

  '&:hover': {
    color: theme.palette.primary.main,
  },
  '&:focus': {
    color: theme.palette.primary.main,
  },
}));

// ===========================================================
