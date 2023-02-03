import { styled } from '@mui/material/styles';
import { IconButton, Box } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

export const BoxWrapper = styled(Box)(({ theme }) => ({
  boxSizing: 'border-box',
  backgroundColor: theme.palette.background.paper,
  borderTopRightRadius: theme.shape.borderRadius,
  borderBottomRightRadius: theme.shape.borderRadius,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 18px',
  width: '411px',
  marginLeft: '-30px',
  boxShadow: theme.palette.boxShadow.main,

  [theme.breakpoints.down('lg')]: {
    position: 'relative',
    flexDirection: 'row-reverse',
    width: '100%',
    marginLeft: 0,
    height: '100%',
    paddingBottom: '50px',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    borderRadius: theme.shape.borderRadius20,
  },
}));

export const BoxImageWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  marginBottom: '30px',
  [theme.breakpoints.down('lg')]: {
    height: '100%',
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: '70px',
  },
}));

export const BoxImageBackdrop = styled(Box)(({ theme }) => ({
  width: '233px',
  borderRadius: '50%',
  overflow: 'hidden',
  boxShadow: theme.palette.boxShadow.secondary,
}));

export const WrapperBox = styled(Box)(({ theme }) => ({
  width: '100%',
}));

export const PhotoCameraIconStyled = styled(PhotoCameraIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  height: '20px',
}));

export const BoxImageContainer = styled(Box)({
  width: '100%',
  paddingTop: '100%',
  position: 'relative',
});

export const StyledButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '5px',
  height: '26px',
  padding: '3px',
  position: 'absolute',
  bottom: '-3px',
  right: 0,
  [theme.breakpoints.down('lg')]: {
    bottom: '-40px',
    right: '25px',
  },
}));

export const ImageBox = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

// export const BoxWrapper = styled(Box)({
//   boxSizing: 'border-box',
//   backgroundColor: '#ffffff',
//   borderTopRightRadius: '40px',
//   borderBottomRightRadius: '40px',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   padding: '20px 18px',
//   width: '411px',
//   marginLeft: '-24px',
//   boxShadow: '7px 14px 11px 0px rgba(49, 21, 4, 0.07)',
//   '@media screen and (max-width: 1280px)': {
//     position: 'relative',
//     flexDirection: 'row-reverse',
//     width: '100%',
//     marginLeft: 0,
//     height: '100%',
//     paddingBottom: '50px',
//   },
//   '@media screen and (max-width: 768px)': {
//     position: 'relative',
//     flexDirection: 'column',
//     marginLeft: 0,
//     height: 'auto',
//     borderRadius: '20px',
//   },
// });
// export const BoxImageWrapper = styled(Box)({
//   width: '100%',
//   display: 'flex',
//   position: 'relative',
//   justifyContent: 'center',

//   '@media screen and (max-width: 1280px)': {
//     height: '100%',
//   },
//   '@media screen and (max-width: 768px)': {
//     marginBottom: '70px',
//   },
// });
