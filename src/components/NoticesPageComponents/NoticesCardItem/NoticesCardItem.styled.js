import styled from '@emotion/styled';
import { List, ListItem, ListItemText, Card } from '@mui/material';

export const NoticeCard = styled(Card)`
  width: 280px;
  margin: 50px 0 0 0;

  @media (min-width: 767.99px) {
    width: 336px;
  }
  @media (min-width: 1279.99px) {
    width: 288px;
  }
`;

export const Li = styled(ListItem)`
  padding: 0;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ItemsList = styled(List)`
  padding: 0 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  margin-bottom: 20px;
`;

export const ItemText = styled(ListItemText)`
  padding: 0;
  margin: 0;
  width: 90px;
`;

export const Title = styled.h2`
  align-self: start;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  margin-bottom: 20px;
`;

export const CategoryLable = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  border-radius: 0 14px 14px 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  width: 158px;
  height: 28px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
`;