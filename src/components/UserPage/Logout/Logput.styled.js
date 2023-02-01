import { styled } from '@mui/material/styles';
import { IconButton, Typography } from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

export const StyledLogoutButton = styled(IconButton)({
  borderRadius: '5px',
  height: '26px',
  alignSelf: 'start',
  padding: '0',
  marginTop: '10px',
  '@media screen and (max-width: 960px)': {
    marginTop: '35px',
  },
  // '@media screen and (max-width: 768px)': {
  //   left: '630px',
  // },
});
export const StyledLogoutIcon = styled(LogoutRoundedIcon)({
  width: '20px',
  color: '#F59256',
});
export const StyledButtonTitle = styled(Typography)({
  fontSize: '12px',
});
