import { styled } from '@mui/material/styles';
import { Container, Typography, IconButton, Box } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const UserDataContainer = styled(Container)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  display: 'flex',
  backgroundColor: theme.palette.background.default,
  gap: '32px',
  marginTop: '50px',
  paddingTop: '30px',
  paddingBottom: '50px',

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
}));

// export const UserDataContainer = styled(Container)({
//   flexDirection: 'row',
//   justifyContent: 'center',
//   display: 'flex',
//   backgroundColor: '#FDF7F2',
//   gap: '32px',
//   marginTop: '50px',
//   paddingTop: '30px',
//   paddingBottom: '50px',

//   '@media screen and (max-width: 1280px)': {
//     flexDirection: 'column',
//   },
// });

export const UserDataTypography = styled(Typography)(({ theme }) => ({
  marginLeft: '17px',
  fontSize: '28px',
  marginBottom: '24px',
  fontWeight: '500',
  lineHeight: '100%',
  display: 'inline-block',

  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
    marginBottom: '18px',
  },
}));

// export const UserDataTypography = styled(Typography)({
//   marginLeft: '17px',
//   fontSize: '28px',
//   marginBottom: '24px',
//   fontWeight: '500',
//   lineHeight: '100%',

//   '@media screen and (max-width: 768px)': {
//     fontSize: '20px',
//   },
// });

export const AddPetTypography = styled(Typography)({
  fontWeight: '500',
});
export const UserDataIconButton = styled(IconButton)({
  borderRadius: '10px',
  position: 'absolute',
  padding: '5px',
  top: '-10px',
  right: '0',
});
export const AddPetIcon = styled(AddCircleIcon)({
  color: '#F59256',
  fontSize: '40px',
  marginLeft: '5px',
});
export const PetDataBox = styled(Box)({
  position: 'relative',
  width: '100%',
});
export const SceletonWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
    marginTop: '90px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '20px',
    marginTop: '130px',
  },
}));
