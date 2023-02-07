import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';

export const Btn = styled(IconButton)({
  width: `40px`,
  height: `40px`,
  display: 'flex',
  alignItems: 'start',
  '@media screen and (min-width: 1280px)': {
    display: 'none',
  },
});
