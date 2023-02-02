import { styled } from '@mui/material/styles';
import { AppBar, Container, Box } from '@mui/material';

export const Header = styled(AppBar)({
  position: 'fixed',
  color: `#111111`,
  backgroundColor: `#fdf7f2`,
  boxShadow: 'none',
});

export const Wrapper = styled(Container)({
  display: 'flex',
  alignItems: `center`,
  justifyContent: 'space-between',
});

export const NavWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});
