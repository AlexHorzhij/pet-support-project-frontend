import styled from '@emotion/styled';

import { backgroundColor } from 'common-styles.styled';

const Main = styled.main`
  margin-top: 50px;
  background-color: ${backgroundColor};
  padding: 20px;
`;

const DivFlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { Main, DivFlexSpaceBetween };
