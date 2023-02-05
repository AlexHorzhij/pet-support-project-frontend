import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const LogoWrapper = styled.div`
  padding-left: 24px;
  font-weight: 700;
`;

export const LogoInfo = styled(Typography)({
  margin: '0',
  padding: 0,
  fontFamily: 'Poppins',
  fontWeight: '700',
  fontSize: '28px',
  lineHeight: '1.7',
  letterSpacing: '0.07em',
  '@media screen and (min-width: 768px)': {
    fontSize: '32px',
    lineHeight: '48px',
  },
});

// export const LogoInfo = styled.p`
//   margin: 0;
//   padding: 0;
//   font-family: 'Poppins';
//   font-weight: 700;
//   font-size: 28px;
//   line-height: 1.7;
//   letter-spacing: 0.07em;

//   @media screen and (min-width: 768px) {
//     font-size: 32px;
//     line-height: 48px;
//   }
// `;
export const Span = styled.span`
  color: orange;
`;
