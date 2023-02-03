import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Link from '@mui/material/Link';
import { CardActions, Card } from '@mui/material';

export const Rectangle = styled(Skeleton)({
  width: '340px',
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

export const NewsTitle = styled(Typography)({
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '1.35',
  textAlign: 'start',
  paddingTop: '60px',
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
