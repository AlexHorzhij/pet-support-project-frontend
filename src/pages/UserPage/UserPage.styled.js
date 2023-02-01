import { styled } from '@mui/material/styles';
import { Container, Typography, IconButton, Box } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const UserDataContainer = styled(Container)({
  flexDirection: 'row',
  justifyContent: 'center',
  display: 'flex',
  backgroundColor: '#FDF7F2',
  gap: '32px',
  marginTop: '50px',
  paddingTop: '30px',
});
export const UserDataTypography = styled(Typography)({
  marginLeft: '17px',
  fontSize: '28px',
  marginBottom: '24px',
  fontWeight: '500',
  lineHeight: '100%',
});
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
});
