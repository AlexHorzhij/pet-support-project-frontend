import { styled } from '@mui/material/styles';
import { AppBar, Container, Box } from '@mui/material';

export const Header = styled(AppBar)({
  position: 'fixed',
  paddingTop: '12px',
  paddingBottom: '12px',
  color: `#111111`,
  backgroundColor: `#FDF7F2`,
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
