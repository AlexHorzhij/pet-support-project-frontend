import styled from '@emotion/styled';

export const Card = styled.li`
  width: 280px;
  background-color: lightblue;
  color: #111111;
  border-radius: 20px;
  padding: 12px 4px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  &:not(:last-child) {
    @media (max-width: 767px) {
      margin-bottom: 12px;
    }
  }

  @media (min-width: 768px) {
    width: 336px;
    padding: 16px 4px;
    border-radius: 40px;
  }

  @media (min-width: 1280px) {
    width: 395px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;

  @media (min-width: 768px) {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 16px;
    font-size: 20px;
    line-height: 27px;
  }
`;

export const TitleLink = styled.a`
  color: #f59256;
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const ImgBox = styled.div`
  width: 110px;
  height: 78px;
  margin-right: 12px;

  @media (min-width: 768px) {
    width: 120px;
    height: 85px;
    margin-right: 14px;
  }

  @media (min-width: 1280px) {
    width: 158px;
    height: 112px;
    margin-right: 16px;
  }
`;

export const FriendsContactsList = styled.ul`
  list-style: none;
  padding: 0;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 19px;
  }

  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const FriendsContactItem = styled.li`
  width: 150px;

  &:not(:last-child) {
    margin-bottom: 4px;

    @media (min-width: 768px) {
      margin-bottom: 8px;
    }

    @media (min-width: 1280px) {
      margin-bottom: 12px;
    }
  }

  @media (min-width: 768px) {
    width: 181px;
    overflow: hidden;
  }

  @media (min-width: 1280px) {
    width: 206px;
    overflow: hidden;
  }
`;

export const ContactLink = styled.a`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  color: inherit;
  text-overflow: ellipsis;
  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: #f59256;
  }
`;
