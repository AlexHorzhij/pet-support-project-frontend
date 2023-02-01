import { styled } from '@mui/material/styles';
import { IconButton, Box } from '@mui/material';

export const BoxWrapper = styled(Box)({
  boxSizing: 'border-box',
  backgroundColor: '#ffffff',
  borderTopRightRadius: '40px',
  borderBottomRightRadius: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 16px',
  width: '411px',
  marginLeft: '-24px',
  boxShadow: '7px 14px 11px 0px rgba(49, 21, 4, 0.07)',
});
export const BoxImageWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  marginBottom: '36px',
});
export const BoxImageBackdrop = styled(Box)({
  width: '233px',
  borderRadius: '50%',
  overflow: 'hidden',
});
export const BoxImageContainer = styled(Box)({
  width: '100%',
  paddingTop: '100%',
  backgroundColor: 'black',
  position: 'relative',
});
export const StyledButton = styled(IconButton)({
  borderRadius: '5px',
  height: '26px',
  padding: '3px',
  position: 'absolute',
  bottom: 0,
  right: 0,
});
export const ImageBox = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
