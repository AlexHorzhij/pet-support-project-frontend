import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Link from '@mui/material/Link';
import { CardActions, Card, Box } from '@mui/material';

export const Main = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  paddingTop: '10px',
  marginTop: '49px',
}));

export const Rectangle = styled(Skeleton)({
  height: '8px',
  borderRadius: '40px',
  background: 'linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)',
});

export const NewsCard = styled(Card)({
  border: 'none',
  borderRadius: '0px',
  backgroundColor: 'inherit',
  paddingBottom: '40px',
});

// export const ContentWrapper = styled(Box)(({ theme }) => ({
//   width: '280px',
//   marginBottom: '20px ',
//   marginTop: '16px ',

//   marginRight: 'auto',
//   marginLeft: 'auto',

// [theme.breakpoints.up('md')]: {
//   width: '608px',
//   minHeight: '300px',
//   padding: '60px 80px 40px 80px',
//   backgroundColor: '#fff',
//   borderRadius: '40px',
//   boxShadow: '7px 4px 14px rgba(0, 0, 0, 0.11)',
// },

// [theme.breakpoints.up('lg')]: {
//   width: '618px',
//   padding: '60px 80px 60px 80px',
// },
// }));

export const NewsTitle = styled(Typography)({
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '1.35',
  textAlign: 'start',
  marginTop: '4px',
});

export const NewsText = styled(Typography)({
  position: 'relative',
  fontWeight: '400',
  fontSize: '16px',
  textAlign: 'start',
  color: '#111321',
  marginTop: '16px',
  marginBottom: '40px',
});

export const CardFooter = styled(CardActions)({
  position: 'absolute',
  justifyContent: 'space-between',
  bottom: '0',
  width: '93%',
});

export const NewsDate = styled(Typography)({
  display: 'block',
  fontSize: '16px',
  fontWeight: '400',
  color: '#111111',
});
export const NewsLink = styled(Link)({
  color: '#F59256',
});

//  @media (min-width: 768px) {
//     font-weight: 700;
//     font-size: 16px;
//     line-height: 22px;
//   }

//   @media (min-width: 1280px) {
//     margin-bottom: 16px;
//     font-size: 20px;
//     line-height: 27px;
//   }
