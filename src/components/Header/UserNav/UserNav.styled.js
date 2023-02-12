import styled from '@emotion/styled';
import { AuthItem, AuthLink } from '../AuthNav/AuthNav.styled';

export const UserAuthItem = styled(AuthItem)({
  minWidth: '164px',
  margin: '0',
  display: 'flex',
  justifyContent: 'space-evenly',
  color: '#FFFFFF',
  backgroundColor: '#F59256',
  borderRadius: '40px',
});
export const UserAuthLink = styled(AuthLink)({
  fontSize: '16px',
  lineHeight: '22px',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.04em',
  background: '#f59256',
  color: '#FFFFFF',
});
export const IconSpan = styled.span`
  margin-right: 14px;
  padding-top: 4px;
`;
