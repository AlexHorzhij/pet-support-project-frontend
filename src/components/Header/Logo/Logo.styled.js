import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LogoWrapper = styled.div`
  font-weight: 700;
`;
export const LogoInfo = styled(NavLink)({
  fontFamily: 'Poppins',
  fontWeight: '700',
  fontSize: '28px',
  lineHeight: '1.7',
  letterSpacing: '0.07em',
  textDecoration: 'none',
  color: 'inherit',
  '@media screen and (min-width: 768px)': {
    fontSize: '32px',
    lineHeight: '1.5',
  },
});

export const Span = styled.span`
  color: orange;
`;
