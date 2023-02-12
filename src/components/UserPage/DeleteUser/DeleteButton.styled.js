import { styled } from '@mui/material/styles';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const StyledDeleteIcon = styled(DeleteForeverIcon)(({ theme }) => ({
  width: '20px',
  color: theme.palette.primary.main,
}));
