import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import Button from '@mui/material';
import Menu from '@mui/material/Menu';
import List from '@mui/material/List';

export const MobileMenu = styled(Menu)({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '796px',
  overflow: 'auto',
  opacity: '0',
  visibility: 'hidden',
  zIndex: '1',
  pointerEvents: 'none',
});

export const Lt = styled(List)({
  position: 'relative',
  backgroundColor: 'white',
  width: '100%',
});
// export const MobileContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 100vw;
//   position: relative;
//   padding-top: 48px;
// `;
export const Btn = styled(IconButton)({
  width: `40px`,
  height: `40px`,
  display: 'flex',
  alignItems: 'start',
  '@media screen and (min-width: 1280px)': {
    display: 'none',
  },
});
// export const Btn = styled(Button)({
//   width: `40px`,
//   height: `40px`,
//   '@media screen and (min-width: 1280px)': {
//     display: 'none',
//   },
// });
