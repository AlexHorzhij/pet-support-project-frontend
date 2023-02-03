import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const LoaderWrapper = styled(Box)(() => ({
  width: '100%',
  height: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const LoaderPageWrapper = styled(Box)(() => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
