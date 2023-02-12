import { styled } from '@mui/material/styles';
import { Container, Typography, IconButton, Box } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
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

export const AddPetTypography = styled(Typography)(({ theme }) => ({
  fontWeight: '500',
  color: theme.palette.text.primary,
}));
export const UserDataIconButton = styled(IconButton)({
  borderRadius: '10px',
  padding: '5px',
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
export const PetItemAndButtonWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  alignItems: 'baseline',
  justifyContent: 'space-between',

  '@media screen and (max-width: 500px)': {
    flexDirection: 'column',
  },
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
  },
}));
export const SceletonWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: '30px',

  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
    marginTop: '90px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '20px',
    marginTop: '130px',
  },
}));
export const PetsPawIcon = styled(PetsOutlinedIcon)(({ theme }) => ({
  marginTop: '30px',
  fontSize: '100px',
  color: theme.palette.text.secondary,
}));
