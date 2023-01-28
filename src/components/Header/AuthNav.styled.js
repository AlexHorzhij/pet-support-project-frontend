import styled from '@emotion/styled';

export const AuthList = styled.ul`
  margin-left: 351px;
  padding: 0;
  display: flex;
  justify-content: center;
  list-style: none;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const AuthLink = styled.a`
  @media screen and (min-width: 768px) {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    align-items: center;
    letter-spacing: 0.04em;
  }
`;
