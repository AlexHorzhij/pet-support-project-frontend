import { styled } from '@mui/material/styles';
import { AppBar, Container, Typography } from '@mui/material';

export const Header = styled(AppBar)({
  color: `#111111`,
  backgroundColor: `rgb(249, 214, 193)`,
});

export const Wrapper = styled(Container)({
  margin: `0px`,
  padding: `0px`,
  display: 'flex',
  alignItems: `center`,
  '@media screen and (max-width: 320px)': {
    justifyContent: 'space-between',
  },
  '@media screen and (min-width: 1280px)': {
    justifyContent: 'space-between',
  },
});

export const LogoInfo = styled(Typography)({
  margin: `0`,
  padding: `0`,

  '@media screen and (min-width: 768px)': {
    fontFamily: 'Poppins',
    fontStyle: `normal`,
    fontWeight: `700`,
    fontSize: `32px`,
    lineHeight: `48px`,

    letterSpacing: `0.07em`,
  },
});
