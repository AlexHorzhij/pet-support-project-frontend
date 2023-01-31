import styled from '@emotion/styled';

export const Card = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;
`;

export const ImgWrapper = styled.div`
  width: 280px;
  height: 288px;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  text-align: start;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Discription = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 20px 32px 20px;
`;

export const List = styled.ul`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  margin-bottom: 20px;
`;

export const Key = styled.p`
  width: 90px;
  text-align: start;
`;

export const Title = styled.h2`
  align-self: start;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  margin-bottom: 20px;
`;

export const Btn = styled.button`
  font-size: 16px;
  line-height: 1.37;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.04em;
  background-color: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  padding: 8px 28px;
  width: 248px;
  text-align: center;
`;

// export const Svg = styled(CameraAltOutlinedIcon)`
//   width: 100%;
// `;
