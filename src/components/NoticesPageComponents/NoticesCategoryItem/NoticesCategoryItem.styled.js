import styled from '@emotion/styled';
import { List, ListItem, ListItemText } from '@mui/material';
// export const Card1 = styled(CardActionArea)`
//   width: 280px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background: #ffffff;
//   box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
//   border-radius: 0px 0px 20px 20px;
// `;

// export const ImgWrapper = styled.div`
//   width: 280px;
//   height: 288px;
//   background-image: url(${Rectangle16});
// `;

export const Li = styled(ListItem)`
  padding: 0;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

// export const Discription = styled.div`
//   /* display: flex;
//   align-items: center;
//   flex-direction: column;
//   padding: 20px 20px 32px 20px; */
// `;

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
  /* text-align: start; */
`;

export const Title = styled.h2`
  align-self: start;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  margin-bottom: 20px;
`;

export const Lable = styled.p`
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
