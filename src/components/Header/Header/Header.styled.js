import { styled } from '@mui/material/styles';
import { AppBar, Container, Box } from '@mui/material';

export const Header = styled(AppBar)({
  position: 'fixed',
  color: `#111111`,
  backgroundColor: `rgb(249, 214, 193)`,
});

export const Wrapper = styled(Container)({
  display: 'flex',
  alignItems: `center`,
  justifyContent: 'space-between',
  // '@media screen and (min-width: 1280px)': {
  //   justifyContent: 'space-between',
  // },
});

export const NavWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});
