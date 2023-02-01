import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

export const StepperBox = styled(Box)({
  marginTop: '35px',
  display: 'flex',
  justifyContent: 'center',
});
export const StepperButton = styled(Button)({
  minWidth: '180px',
  '&:not(:last-child)': {
    marginRight: '20px',
  },
});
