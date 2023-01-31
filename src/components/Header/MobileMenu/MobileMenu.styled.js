import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import List from '@mui/material/List';

export const MobileMenu = styled(Menu)({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '796px',
  overflow: 'auto',
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
  //   '@media screen and (min-width: 320px)': {
  //     marginLeft: `163px`,
  //   },
  //   '@media screen and (min-width: 768px)': {
  //     marginLeft: '25px',
  //   },
  '@media screen and (min-width: 1280px)': {
    display: 'none',
  },
});
