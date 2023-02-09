import { styled } from '@mui/material/styles';
import { Container, Typography, IconButton, Box } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const UserDataContainer = styled(Container)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  display: 'flex',
  backgroundColor: theme.palette.background.default,
  gap: '32px',
  paddingBottom: '50px',
  marginTop: '58px',
  marginBottom: '58px',

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    marginTop: '88px',
    marginBottom: '88px',
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '60px',
    marginBottom: '60px',
  },
}));

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
  justifyContent: 'center',

  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
    marginTop: '90px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '20px',
    marginTop: '130px',
  },
}));
