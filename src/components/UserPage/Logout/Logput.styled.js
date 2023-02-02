import { styled } from '@mui/material/styles';
import { IconButton, Typography } from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

export const StyledLogoutButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '5px',
  height: '26px',
  alignSelf: 'start',
  padding: '0',
  marginTop: '10px',

  [theme.breakpoints.down('lg')]: {
    marginTop: '35px',
  },
}));

export const StyledLogoutIcon = styled(LogoutRoundedIcon)(({ theme }) => ({
  width: '20px',
  color: theme.palette.primary.main,
}));
export const StyledButtonTitle = styled(Typography)({
  fontSize: '12px',
});

// export const StyledLogoutButton = styled(IconButton)({
//   borderRadius: '5px',
//   height: '26px',
//   alignSelf: 'start',
//   padding: '0',
//   marginTop: '10px',
//   '@media screen and (max-width: 1280px)': {
//     marginTop: '35px',
//   },
// });

// export const StyledLogoutIcon = styled(LogoutRoundedIcon)({
//   width: '20px',
//   color: '#F59256',
// });
