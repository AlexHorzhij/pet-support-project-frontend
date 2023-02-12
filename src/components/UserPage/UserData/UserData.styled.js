import { styled } from '@mui/material/styles';
import { IconButton, Box } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { ThreeCircles } from 'react-loader-spinner';

export const BoxWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  boxSizing: 'border-box',
  backgroundColor: theme.palette.background.paper,
  borderTopRightRadius: theme.shape.borderRadius,
  borderBottomRightRadius: theme.shape.borderRadius,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 18px',

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
export const LoaderWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  right: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
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

export const StyledSpiner = styled(ThreeCircles)(({ theme }) => ({
  height: '30px',
  width: '30px',
  color: theme.palette.primary.main,
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
