import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;
