import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(17, 17, 17, 0.6);
  z-index: 1200;
  backdrop-filter: blur(5px);
`;
export const ModalWrapper = styled.div`
  position: relative;
  /* max-width: calc(100vw - 750px);
  max-height: calc(100vh - 100px); */
  border-radius: 30px;
  overflow: hidden;
  z-index: 1300;
`;
export const ModalButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: aquamarine;
  opacity: 0.7;

  border: none;
  top: 10px;
  color: black;
  right: 10px;
  border-radius: 50%;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
  & svg {
    width: 30px;
    height: 30px;
  }
  &:hover,
  &:focus {
    opacity: 1;
  }
`;
