import { styled } from '@mui/material/styles';
import {
  Card,
  IconButton,
  CardMedia,
  Box,
  Typography,
  Link,
  Button,
} from '@mui/material';

export const ModalCloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '12px',
  right: '20px',
  backgroundColor: theme.palette.background.default,
  width: '34px',
  height: '34px',
}));

export const ModalCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: '280px',
  padding: '60px 20px 40px 20px',
  [theme.breakpoints.up('md')]: {
    width: '704px',
    padding: '32px 20px 32px 40px',
  },
}));

export const BoxFlex = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const Image = styled(CardMedia)(({ theme }) => ({
  wigth: '240px',
  height: '240px',
  borderRadius: '0 0 40px 40px',
  marginBottom: '16px',

  [theme.breakpoints.up('md')]: {
    width: '288px',
    height: '328px',
    marginBottom: '26px',
    marginRight: '20px',
  },
}));

export const CategoryLable = styled(Box)(() => ({
  position: 'absolute',
  top: '20px',
  left: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0 14px 14px 0',
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '1.25',
  width: '158px',
  height: '28px',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(2px)',
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  marginBottom: '8px',

  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
}));

export const HeadText = styled(Typography)(({ theme }) => ({
  marginBottom: '8px',
  fontWeight: '600',
  fontSize: '14px',

  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
}));

export const OwnerContact = styled(Link)(({ theme }) => ({
  color: 'inherit',
  fontSize: '14px',
  marginBottom: '8px',

  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
}));

export const ButtonsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '16px',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row-reverse',
  },
}));

export const AddFavouriteButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  fontSize: '16px',

  '&:hover': {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
  },

  [theme.breakpoints.up('md')]: {
    width: '160px',
    marginRight: '12px',
  },
}));

export const ContactButton = styled(Button)(({ theme }) => ({
  fontSize: '16px',

  [theme.breakpoints.up('md')]: {
    width: '160px',
  },
}));
