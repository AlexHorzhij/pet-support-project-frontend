import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

export const NewsTitle = styled(Typography)({
  fontSize: '24px',
  textAlign: 'start',
  fontWeight: '700',
  paddingLeft: '16px',
  paddingTop: '4px',
});

export const NewsText = styled(Typography)({
  fontSize: '16px',
  textAlign: 'start',
  fontWeight: '400',
  color: '#111321',
});

export const Rectangle = styled(Skeleton)({
  height: '8px',
  // width: '340px',
  borderRadius: '40px',
  background: 'linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)',
});
export const NewsDate = styled(Typography)({
  display: 'block',
  fontSize: '16px',
  // textAlign: 'start',
  fontWeight: '400',
  color: '#111111',
});
