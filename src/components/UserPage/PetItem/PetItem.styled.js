import { styled } from '@mui/material/styles';
import styledEmotion from '@emotion/styled';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  Typography,
  Box,
  ListItem,
  IconButton,
  DialogContent,
} from '@mui/material';

export const PetListItem = styled(ListItem)(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'start',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '40px',
  boxShadow: theme.palette.boxShadow.main,
  padding: '20px',
  '&:not(:last-child)': {
    marginBottom: '22px',
  },

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const PetImageBox = styled(Box)(({ theme }) => ({
  minWidth: '161px',
  height: '161px',
  [theme.breakpoints.down('md')]: {
    marginBottom: '20px',
  },
}));

export const PetInfoBox = styled(Box)(({ theme }) => ({
  marginLeft: '32px',
  marginRight: 'auto',
  [theme.breakpoints.down('md')]: {
    marginLeft: 'unset',
  },
}));

export const PetInfoBoxWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  width: '100%',
}));
export const IconButtonWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  [theme.breakpoints.down('md')]: {
    position: 'relative',
  },
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
}));
export const DaleteIconStyled = styled(DeleteIcon)(({ theme }) => ({
  backgroundColor: 'transparent',

  [theme.breakpoints.down('md')]: {
    fontSize: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
}));

export const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  width: '41px',
  height: '41px',
  borderRadius: '50%',
  backgroundColor: theme.palette.background.default,
  '&:not(:last-child)': {
    marginBottom: '13px',
  },
  '&:hover': { backgroundColor: 'rgba(187, 187, 187, 0.9)' },
}));

export const PetInfoTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '22px',
  letterSpacing: '0.6px',
  '&:not(:last-child)': {
    marginBottom: '13px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    lineHeight: '18px',
    '&:not(:last-child)': {
      marginBottom: '12px',
    },
  },
}));
export const ModalDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: '40px 80px',
  height: '550px',

  [theme.breakpoints.down('md')]: {
    padding: '30px',
  },
}));

export const PetImage = styledEmotion.img`
  width: 161px;
  height: 161px;
  border-radius: 40px;
  object-fit: cover;
`;
export const PetInfoTitleSpan = styledEmotion.span`
 font-weight: 500;
`;
