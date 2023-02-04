import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Box, Container, Card, CardActions, Link } from '@mui/material';

export const Main = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  paddingTop: '10px',
  marginTop: '49px',
}));

export const NewsContainer = styled(Container)(({ theme }) => ({
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

export const Rectangle = styled(Skeleton)(({ theme }) => ({
  height: '4px',
  borderRadius: '40px',
  background: 'linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)',
  marginTop: '40px',

  [theme.breakpoints.up('md')]: {
    height: '8px',
    marginTop: '60px',
  },

  [theme.breakpoints.up('lg')]: {},
}));
export const TitleWrapper = styled(Box)({
  // Для  назви з трьома крапками
  width: '280px',
  height: '66px',
  overflow: 'hidden',
  // resize: 'horizontal',
  // backgroundColor: 'ghostwhite',
});

export const NewsTitle = styled(Box)({
  width: '280px',
  height: '66px',
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '1.35',
  textAlign: 'start',
  marginTop: '4px',
  // ------------
  // display: 'flex',
  // flexDirection: 'column',
  // lineClamp: '2',
  // overflow: 'hidden',
  // whiteSpace: ' pre-wrap',

  // Для мултистрокової назви з трьома крапками
  // display: '-webkit-box;',
  // webkit-line-clamp: '2',
  // webkitBoxOrient: 'vertical',
  overflow: 'hidden',
  whiteSpace: ' wrap',

  // Для однострокової назви з трьома крапками
  textOverflow: 'ellipsis',
  // whiteSpace: 'nowrap',
  // overflow: 'hidden',
});

export const NewsCard = styled(Card)({
  border: 'none',
  borderRadius: '0px',
  backgroundColor: 'inherit',
  // paddingLeft: '0px',
});

export const NewsText = styled(Typography)({
  position: 'relative',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '1.36',
  textAlign: 'start',
  color: '#111321',
  marginTop: '16px',
  marginBottom: '40px',
});

export const CardFooter = styled(CardActions)({
  position: 'absolute',
  justifyContent: 'space-between',
  bottom: '0',
  width: '90%',
  padding: '0px',
});

export const NewsDate = styled(Typography)({
  display: 'block',
  fontSize: '16px',
  fontWeight: '400',
  textAlign: 'start',
  color: '#111111',
});

export const NewsLink = styled(Link)({
  color: '#F59256',
});
