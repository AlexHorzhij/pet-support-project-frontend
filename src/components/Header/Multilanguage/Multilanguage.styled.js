import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

export const LangWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  '@media screen and (min-width: 768px)': {
    marginRight: '12px',
  },
  '@media screen and (min-width: 1280px)': {
    marginRight: '20px',
  },
});

export const LangBtn = styled(Button)({
  '@media screen and (max-width: 767px)': {
    minWidth: '44px',
  },
});
