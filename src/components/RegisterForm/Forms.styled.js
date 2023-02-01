import styled from '@emotion/styled';

export const Input = styled.input`
  background-color: #fdf7f2;
  width: 100%;
  height: 40px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  padding: 0 32px;
  margin-bottom: 16px;

  &::placeholder {
    font-family: 'Manrope';
    font-weight: 400;
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);
  }

  &:last-child {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    height: 52px;

    &::placeholder {
      font-size: 18px;
      line-height: 25px;
    }
  }
`;

export const ErrorText = styled.div`
  padding: 5px 20px;
  margin-bottom: 10px;
  color: #f59256;
`;

export const Button = styled.button`
  background-color: ${props => (props.color ? '#f59256' : '#fff')};
  color: ${props => (props.color ? '#fff' : '#000')};
  border: 2px solid #f59256;
  border-radius: 40px;
  width: 100%;
  height: 44px;
  margin-top: 16px;

  @media screen and (min-width: 1280px) {
    height: 48px;
  }
`;
