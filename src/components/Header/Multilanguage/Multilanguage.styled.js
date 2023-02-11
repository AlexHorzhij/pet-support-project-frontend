import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const LangWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  '@media screen and (min-width: 767px)': {
    flexDirection: 'column',
  },
});
