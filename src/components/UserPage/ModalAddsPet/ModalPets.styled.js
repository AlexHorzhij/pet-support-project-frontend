import styled from '@emotion/styled';

export const StyledInput = styled.input`
  box-sizing: border-box;
  background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  padding: 4px 5px;
  padding-left: 15px;
  margin-bottom: 16px;
  width: 100%;
  height: 40px;

  &:focus {
    outline: 1px solid grey;
    border-color: transparent;
  }

  &::placeholder {
    font-family: 'Manrope';
    font-weight: 400;
    font-size: 14px;
    line-height: 121%;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);
  }
  @media screen and (min-width: 768px) {
    height: 52px;

    &::placeholder {
      font-size: 18px;
      line-height: 25px;
    }
  }
`;
export const StyledTextarea = styled.textarea`
  font-size: 18px;
  font-family: 'Manrope';

  box-sizing: border-box;
  background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  padding: 4px 5px;
  padding-left: 15px;
  margin-bottom: 16px;
  height: 123px;
  margin: 0;

  &:focus {
    outline: 1px solid grey;
    border-color: transparent;
  }

  &::placeholder {
    font-family: 'Manrope';
    font-weight: 400;
    font-size: 14px;
    line-height: 121%;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);
  }
  @media screen and (min-width: 768px) {
    height: 52px;

    &::placeholder {
      font-size: 18px;
      line-height: 25px;
    }
  }
`;
